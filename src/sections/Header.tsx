"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo-01.png";

const navLinks = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Designs",
    href: "#designs",
  },
  {
    label: "Testimonials",
    href: "#feedbacks",
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
  const [activeLink, setActiveLink] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      if (window.scrollY < 120) {
        setActiveLink("#");
        return;
      }

      const sectionLinks = navLinks.filter((link) => link.href !== "#");

      for (const link of sectionLinks) {
        const section = document.querySelector(link.href) as HTMLElement | null;

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(link.href);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  const navItemClassName = (href: string) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      activeLink === href
        ? "bg-white text-gray-900 shadow-sm"
        : "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="fixed top-3 left-0 w-full z-50 px-4 overflow-x-clip">
      <nav className="mx-auto flex max-w-[900px] items-center justify-between gap-4 rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur">
        <a
          href="#"
          onClick={() => handleNavClick("#")}
          className="group flex items-center overflow-hidden rounded-full bg-[#080C14] p-1 pr-1 shadow-lg shadow-black/20 ring-1 ring-white/10 transition-all duration-500 hover:pr-4 hover:ring-[#49b79e]/50"
          aria-label="Go to home"
        >
          <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#080C14]">
            <Image
              src={logo}
              alt="Amen logo"
              width={40}
              height={40}
              className="size-10 rounded-full object-cover"
              priority
            />
          </span>

          <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 text-sm font-bold uppercase tracking-[0.2em] text-[#49b79e] opacity-0 transition-all duration-500 ease-out group-hover:max-w-[90px] group-hover:pl-1 group-hover:opacity-100">
            Amen
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={navItemClassName(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className={`hidden md:inline-flex h-12 items-center rounded-full px-4 text-sm font-semibold transition-all duration-300 ${
              activeLink === "#contact"
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-white text-gray-900 hover:bg-white/90"
            }`}
          >
            👋 Let&apos;s Talk
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
                onClick={() => handleNavClick(link.href)}
                className={`${navItemClassName(link.href)} text-center`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className={`mt-2 inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition-all duration-300 ${
                activeLink === "#contact"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "bg-white text-gray-900 hover:bg-white/90"
              }`}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
