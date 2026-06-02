import { MdEmail } from "react-icons/md";
import { FaMediumM, FaLinkedinIn } from "react-icons/fa";

export default function Page() {
  return (
    <main className="px-4 py-10 flex-1">
      <h1 className="text-4xl text-center font-bold mb-10">
        Contact <span className="text-primary">Me</span>
      </h1>

      <div className="flex justify-center gap-4">
        <a
          href="mailto:makayla.b.ferrell@gmail.com"
          aria-label="Email"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2d3347] hover:bg-[#3a4160] transition-colors duration-300"
        >
          <MdEmail className="w-5 h-5" />
        </a>
        <a
          href="https://medium.com/@makayla.b.ferrell"
          aria-label="Medium"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2d3347] hover:bg-[#3a4160] transition-colors duration-300"
        >
          <FaMediumM className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/makayla-ferrell"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2d3347] hover:bg-[#3a4160] transition-colors duration-300"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>
      </div>
    </main>
  );
}
