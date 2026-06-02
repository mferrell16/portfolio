"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Nav() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathName);

  if (pathName !== menuPath) {
    setMenuPath(pathName);
    setIsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav>
      {/* Desktop */}
      <ul className="hidden md:flex gap-4 items-center">
        <li>
          <Link
            className={`border-b-2 ${pathName === "/" ? "border-b-primary" : "border-b-transparent"}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`border-b-2 ${pathName === "/blog" ? "border-b-primary" : "border-b-transparent"}`}
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li className="bg-primary px-2 py-1 rounded-md hover:bg-secondary transition-colors duration-300 ease-in-out">
          <Link href="/contact">Contact Me</Link>
        </li>
      </ul>

      {/* Toggle button — stays in header, above the overlay */}
      <button
        className="md:hidden relative z-50"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <HiX className="w-6 h-6 text-primary" /> : <HiMenu className="w-6 h-6 text-primary" />}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-background z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >

        <ul className="flex flex-col items-center gap-6 text-lg">
          <li>
            <Link
              className={`border-b-2 ${pathName === "/" ? "border-b-primary" : "border-b-transparent"}`}
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`border-b-2 ${pathName === "/blog" ? "border-b-primary" : "border-b-transparent"}`}
              href="/blog"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="bg-primary px-3 py-1 rounded-md hover:bg-secondary transition-colors duration-300 ease-in-out text-base">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
