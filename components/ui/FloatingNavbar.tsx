"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ navItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/70 backdrop-blur-md border border-neutral-800 shadow-lg transition-all duration-300",
        open ? "px-6 py-4" : "px-4 py-2",
        "flex items-center gap-2"
      )}
      style={{ minWidth: 320 }}
    >
      {/* Hamburger / Close button — always visible on mobile, hidden on md+ */}
      <button
        className="text-gray-200 hover:text-white focus:outline-none md:hidden"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
      >
        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Nav items container */}
      <div
        className={cn(
          // on mobile: hide unless open
          "flex-wrap items-center",
          "md:flex md:gap-2",             // on md+ always flex
          open ? "flex gap-2 mt-2 w-full justify-center" : "hidden"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={cn(
              "flex items-center gap-2 px-3 py-1 rounded-full text-gray-200 hover:text-white hover:bg-white/10 transition-colors font-medium text-base"
            )}
            onClick={() => setOpen(false)}
          >
            {item.icon && <span className="w-5 h-5">{item.icon}</span>}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNavbar;
