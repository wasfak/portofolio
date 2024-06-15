import Link from "next/link";
import Nav from "../Nav";
import { Button } from "./button";
import MobileNav from "../MobileNav";

export default function Header() {
  return (
    <header className="text-white py-4 xl:py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Wasfy<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*DeskTop Nav */}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/*Mobile Nav */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
