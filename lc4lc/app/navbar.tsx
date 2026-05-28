import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-3 z-50 w-9/10 bg-lavender text-white md:px-8 py-4 rounded-xl">
      <div className="w-full flex justify-between items-center md:px-8 py-2 text-xl">
        <section className="flex space-x-4">
          <Link href="/link1" className="hover:text-lorigreen">
            Get Er Done With Joy Equus Life Coaching
          </Link>
          <Link href="/link2" className="hover:text-lorigreen">
          </Link>
        </section>

        <section className="flex justify-center">
          <Link href="/" className="">
          </Link>
        </section>

        <section className="flex space-x-12">
          <Link href="/link4" className="hover:text-lorigreen">
            About
          </Link>
          <Link href="/link5" className="hover:text-lorigreen">
            Contact
          </Link>
        </section>
      </div>
    </nav>
  );
}