export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center w-full p-4">
      <p className="text-gray-font text-center text-xs md:text-sm">
        Copyright &copy; {currentYear} MakaylaDecoded. All rights reserved.
      </p>
    </footer>
  );
}
