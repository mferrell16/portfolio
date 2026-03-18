"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathName = usePathname();

  return (
    <nav>
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
    </nav>
  );
}
