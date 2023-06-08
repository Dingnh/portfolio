"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const links = [
  { label: "about", url: "/" },
  { label: "portfolio", url: "/portfolio" },
  { label: "contact", url: "/contact-me" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Container className="w-full flex flex-col gap-5 sm:flex-row pt-8 pb-4 sm:py-0 justify-between items-center">
        <h1 className="font-sentient text-2xl xl:text-[42px]">
          DING NICK HONG
        </h1>
        <div className="font-epilogue flex gap-5">
          {links.map((link, id) => {
            const isActive = pathname.startsWith(link.url);
            return (
              <Link
                href={link.url}
                className={classNames(
                  "uppercase text-lg flex items-center hover:text-neutral-900 underline-offset-8",
                  {
                    ["text-neutral-400 hover:underline"]: !isActive,
                    ["text-neutral-900 underline"]: isActive,
                  }
                )}
                key={id}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;