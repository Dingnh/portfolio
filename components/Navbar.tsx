"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
const links = [
  { label: "about", url: "/", wip: false },
  { label: "portfolio", url: "/portfolio", wip: false },
  { label: "contact", url: "/contact-me", wip: false },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Container className="w-full flex flex-col gap-5 sm:gap-8 pt-8 pb-4 sm:py-0 justify-between items-center">
        <h1 className="font-sentient text-2xl sm:text-[42px]">
          DING NICK HONG
        </h1>
        <div className="font-epilogue flex gap-5">
          {links.map((link, id) => {
            const isActive = pathname === link.url;
            return (
              <Link
                href={link.url}
                className={classNames(
                  "uppercase text-lg sm:text-xl flex items-center underline-offset-8",
                  {
                    ["text-neutral-400 hover:text-neutral-900 hover:underline"]:
                      !isActive,
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
