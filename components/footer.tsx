import Link from "next/link";
import { Logo } from "./logo";

const links = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Solution",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>


        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} NoteApp, All rights reserved
        </span>
      </div>
    </footer>
  );
}
