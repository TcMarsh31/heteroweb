"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const tl = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { y: -12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    );

    if (dropdownRef.current) {
      tl.current = gsap
        .timeline({ paused: true })
        .fromTo(
          dropdownRef.current,
          { autoAlpha: 0, y: 8, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.2 }
        );
    }
  }, []);

  return (
    <header
      ref={navRef}
      className="
        fixed top-3 inset-x-0 z-50
        px-3
        md:top-4 md:left-1/2 md:-translate-x-1/2
        md:w-[90%] md:max-w-6xl md:px-0
      "
    >
      <div
        className="
          rounded-2xl
          backdrop-blur-xl
          bg-white/15
          border border-white/20
          shadow-lg
          text-white
        "
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="text-base font-semibold">
            LOGO
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm relative">
            <div
              className="relative"
              onMouseEnter={() => tl.current?.play()}
              onMouseLeave={() => tl.current?.reverse()}
            >
              <button className="flex items-center gap-1 font-medium">
                About us <span className="text-xs">▾</span>
              </button>

              <div
                ref={dropdownRef}
                className="
                  absolute left-0 top-10
                  w-44
                  rounded-xl
                  p-3
                  backdrop-blur-xl
                  bg-white/20
                  border border-white/20
                  shadow-xl
                  opacity-0
                "
              >
                {[
                  { label: "Who we are", href: "/about" },
                  { label: "Crew", href: "/crew" },
                  { label: "Reviews", href: "/reviews" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="#services">Services</Link>
            <Link href="#projects">Projects</Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="hidden md:inline-flex text-black"
            >
              Contact us
            </Button>

            {/* HAMBURGER */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
              aria-label="Open menu"
            >
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col border-t border-white/20">
            {/* ABOUT ACCORDION */}
            <button
              onClick={() => setAboutOpen((v) => !v)}
              className="flex items-center justify-between px-4 py-4 font-medium"
            >
              About us
              <span className={`transition ${aboutOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {aboutOpen && (
              <div className="flex flex-col bg-white/5">
                {[
                  { label: "Who we are", href: "/about" },
                  { label: "Crew", href: "/crew" },
                  { label: "Reviews", href: "/reviews" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-6 py-3 text-sm hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="#services" className="px-4 py-4 hover:bg-white/10">
              Services
            </Link>

            <Link href="#projects" className="px-4 py-4 hover:bg-white/10">
              Projects
            </Link>

            <div className="p-4">
              <Button variant="outline" size="sm" className="w-full">
                Contact us
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
