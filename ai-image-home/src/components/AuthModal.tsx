"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, googleProvider, initAnalytics } from "@/lib/firebase";
import { LiquidGlass } from "./LiquidGlass";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AuthModal({ open, onClose, onSuccess }: AuthModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const attemptRef = useRef(0);
  const signingRef = useRef(false); // single-flight guard
  const openRef = useRef(open);

  useEffect(() => {
    setMounted(true);
    if (open) {
      initAnalytics().catch(() => {});
    }
  }, [open]);

  useEffect(() => {
    openRef.current = open;
    if (open) {
      // reset transient state when modal opens
      setError(null);
      setLoading(false);
      // fresh attempt namespace on open
      attemptRef.current++;
      signingRef.current = false;
    } else {
      // invalidate any in-flight attempt on close and drop single-flight lock
      attemptRef.current++;
      signingRef.current = false;
    }
  }, [open]);

  if (!mounted || !open) return null;

  const handleGoogle = async () => {
    try {
      if (signingRef.current) return; // prevent multiple popups
      setError(null);
      setLoading(true);
      signingRef.current = true;
      const myAttempt = ++attemptRef.current;
      const canPopup = typeof window !== 'undefined' && !(window as any).crossOriginIsolated;
      if (canPopup) {
        await signInWithPopup(auth, googleProvider);
      } else {
        // Fallback to redirect in environments with COOP/COEP
        await signInWithRedirect(auth, googleProvider);
        // Close modal before redirect navigation
        onClose();
        return;
      }
      if (attemptRef.current !== myAttempt) return; // modal was closed; ignore
      setLoading(false);
      signingRef.current = false;
      onSuccess?.();
      onClose();
    } catch (e: any) {
      setLoading(false);
      signingRef.current = false;
      const code = e?.code as string | undefined;
      if (
        code === 'auth/popup-closed-by-user' ||
        code === 'auth/cancelled-popup-request' ||
        code === 'auth/popup-blocked' ||
        (typeof e?.message === 'string' && (
          e.message.includes('popup-closed-by-user') ||
          e.message.includes('cancelled-popup-request')
        ))
      ) {
        // Popup not available or closed: fall back to redirect exactly once
        try {
          await signInWithRedirect(auth, googleProvider);
          onClose();
          return;
        } catch {
          return;
        }
      }
      setError(e?.message ?? 'Failed to sign in');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;
    if (!node.contains(e.target as Node)) onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] bg-black/10 backdrop-blur-sm"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="grid h-full w-full place-items-center p-4">
        <div ref={cardRef} className="w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <LiquidGlass
          borderRadius="24px"
          blurIntensity="xl"
          shadowIntensity="md"
          glowIntensity="sm"
          className="p-6 bg-white/70 text-black"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Sign in</h3>
            <p className="text-sm">Continue with your Google account.</p>
            {error && (
              <div className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}
            <button
              onClick={handleGoogle}
              disabled={loading}
              className="w-full rounded-md border border-black/20 bg-white px-4 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2"
            >
              <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 533.5 544.3">
                <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.2H272v95.1h147.3c-6.4 34.5-25.9 63.7-55.1 83.3v68h88.9c52.1-48 80.4-118.7 80.4-196.2z"/>
                <path fill="#34A853" d="M272 544.3c73.5 0 135.2-24.3 180.3-66.8l-88.9-68c-24.7 16.6-56.3 26.4-91.4 26.4-70.2 0-129.7-47.4-151-111.1H30.3v69.9C75 487.7 168.6 544.3 272 544.3z"/>
                <path fill="#FBBC05" d="M121 324.8c-10.2-30.5-10.2-63.5 0-94l.1-69.9H30.3c-40.6 81.1-40.6 152.7 0 234z"/>
                <path fill="#EA4335" d="M272 107.7c38.8-.6 76.1 13.8 104.6 40.5l78.2-78.2C406.9 25.8 342.5-.1 272 0 168.6 0 75 56.6 30.3 149l90.7 69.9C142.3 155.2 201.8 107.7 272 107.7z"/>
              </svg>
              {loading ? "Signing in..." : "Continue with Google"}
            </button>
            <p className="text-xs text-black/60 text-center">Click anywhere outside to close</p>
          </div>
        </LiquidGlass>
        </div>
      </div>
    </div>,
    document.body
  );
}
