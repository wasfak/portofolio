"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const Links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  return (
    <nav className="flex gap-6">
      {Links.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className={`${
              link.href === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all ease-in-out`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
