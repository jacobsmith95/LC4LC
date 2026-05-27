import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-lavender text-white md:px-8 py-4">
      <div className="w-full flex justify-between items-center md:px-8 py-2">
        <section className="flex space-x-4">
          <Link href="/link1" className="hover:underline">
            Link 1
          </Link>
          <Link href="/link2" className="hover:underline">
            Get Er Done With Joy Equus Life Coaching
          </Link>
        </section>

        <section className="flex justify-center">
          <Link href="/" className="text-lg font-semibold hover:underline">
          </Link>
        </section>

        <section className="flex space-x-4">
          <Link href="/link4" className="hover:underline">
            About
          </Link>
          <Link href="/link5" className="hover:underline">
            Contact
          </Link>
        </section>
      </div>
    </nav>
  );
}