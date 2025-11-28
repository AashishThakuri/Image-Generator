"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthModal from "@/components/AuthModal";

export default function Page() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  return (
    <AuthModal
      open={open}
      onClose={() => {
        setOpen(false);
        router.push("/");
      }}
      onSuccess={() => router.push("/")}
    />
  );
}
