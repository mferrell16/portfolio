import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full py-4">
      <div className="text-lg font-bold">
        <Link href="/" className="md:hidden">
          M<span className="text-primary">D</span>
        </Link>
        <Link href="/" className="hidden md:block">
          Makayla <span className="text-primary">Decoded</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
}
