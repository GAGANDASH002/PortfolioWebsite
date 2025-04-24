"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ navItems }) => {
  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/70 backdrop-blur-md border border-neutral-800 shadow-lg px-6 py-2 flex items-center gap-2",
        "transition-all duration-300 mt-7"
      )}
      style={{ minWidth: 320 }}
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className={cn(
            "flex items-center gap-2 px-3 py-1 rounded-full text-gray-200 hover:text-white hover:bg-white/10 transition-colors font-medium text-base"
          )}
        >
          {item.icon && <span className="w-5 h-5">{item.icon}</span>}
          <span>{item.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default FloatingNavbar;
