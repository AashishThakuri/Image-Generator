"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type React from "react";

interface FancyButtonProps {
    href: string;
    text: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function FancyButton({ href, text, onClick }: FancyButtonProps) {
    return (
        <Link href={href} onClick={onClick} className="fancy group inline-block">
            <span className="top-key absolute left-2 top-[-1.5px] h-[1.5px] w-[20px] bg-[#f79a18] transition-all duration-500 ease-out group-hover:left-[-1.5px] group-hover:w-0"></span>
            <span className="text block pl-6 text-sm font-semibold uppercase leading-snug text-black transition-all duration-300 ease-in-out group-hover:pl-5 group-hover:text-white">
                {text}
            </span>
            <span className="bottom-key-1 absolute bottom-[-1.5px] right-[24px] h-[1.5px] w-[20px] bg-[#f79a18] transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
            <span className="bottom-key-2 absolute bottom-[-1.5px] right-2 h-[1.5px] w-[8px] bg-[#f79a18] transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
        </Link>
    );
}
