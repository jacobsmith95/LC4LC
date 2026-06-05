import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-3 z-50 w-3/4 bg-lavender text-white md:px-8 py-4 rounded-xl font-sans">
      <div className="w-full flex justify-between items-center md:px-8 py-2 text-md md:text-xl">
        <section className="flex space-x-4">
          <Link href="/" className="hover:text-lorigreen text-center px-5">
            Get Er Done With Joy <p className="hidden md:block">Equus Life Coaching</p>
          </Link>
        </section>

        <section className="flex space-x-10 text-center px-5">
          <Link href="#about" className="hidden md:block hover:text-lorigreen">
            About
          </Link>
          <Link href="#contact" className="hover:text-lorigreen">
            Contact
          </Link>
        </section>
      </div>
    </nav>
  );
}