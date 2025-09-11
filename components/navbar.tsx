"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link href="/">MyApp</Link>
      <ModeToggle />
    </nav>
  );
}
