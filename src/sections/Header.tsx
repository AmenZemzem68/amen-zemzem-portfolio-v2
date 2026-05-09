"use client";

import { useState } from "react";

const navLinks = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-3 left-0 w-full z-50 px-4 overflow-x-clip">
      <nav className="mx-auto flex max-w-[900px] items-center justify-between gap-4 rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur">
        <a
          href="#"
          className="pl-4 pr-2 text-sm font-semibold text-white/90 whitespace-nowrap"
        >
          Amen Zemzem
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-item">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex h-9 items-center rounded-full bg-white px-4 text-sm font-semibold text-gray-900 transition hover:bg-white/90"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex size-10 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-controls="mobile-navbar"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>

            {isOpen ? (
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-navbar"
          className="mx-auto mt-3 max-w-[900px] rounded-3xl border border-white/15 bg-white/10 p-2 backdrop-blur md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="nav-item text-center"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-gray-900 transition hover:bg-white/90"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
