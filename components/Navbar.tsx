import React from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black/70 backdrop-blur-md border-b border-neutral-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo or Name */}
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          Gagan.dev
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-200 hover:text-white transition-colors font-medium text-base"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
