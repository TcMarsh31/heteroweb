"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "@/lib/gsap";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const tl = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Navbar entrance
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    // Dropdown animation
    tl.current = gsap
      .timeline({ paused: true })
      .fromTo(
        dropdownRef.current,
        { autoAlpha: 0, y: 12, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.25, ease: "power3.out" }
      );

    // Scroll-based navbar style change
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: "top -550px",
        toggleActions: "play reverse play reverse",
      },
      backgroundColor: "rgba(255,255,255,0.95)",
      borderColor: "rgba(0,0,0,0.08)",
      color: "#000", // 👈 black on scroll
      backdropFilter: "blur(10px)",

      width: "100%",
      maxWidth: "100%",
      top: 0,
      borderRadius: 0,
      left: "50%",
      xPercent: -50,
      duration: 0.25,

      duration: 0.25,
      ease: "power3.inOut",
    });

    // Dropdown / menu background
    gsap.to(dropdownRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: "top -550px",
        toggleActions: "play reverse play reverse",
      },
      backgroundColor: "#fff",
      borderColor: "rgba(0,0,0,0.08)",
      duration: 0.25,
      ease: "power2.out",
    });
  }, []);

  const openMenu = () => tl.current?.play();
  const closeMenu = () => tl.current?.reverse();

  return (
    <header
      ref={navRef}
      className="
        fixed top-4 left-1/2 z-50
        w-[90%] max-w-6xl
        -translate-x-1/2
        rounded-2xl
        backdrop-blur-xl
        bg-white/15
        border border-white/20
        shadow-lg
        text-white   /* 👈 initial text color */
        transition-colors
      "
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          LOGO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm relative">
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <button className="flex items-center gap-1 font-medium">
              About us <span className="text-xs">▾</span>
            </button>

            <div
              ref={dropdownRef}
              className="
                absolute left-0 top-[calc(100%+22px)]
                w-44 rounded-b-2xl p-4
                opacity-0
                backdrop-blur-xl
                bg-white/20
                border border-white/20
                shadow-[0_20px_50px_rgba(0,0,0,0.2)]
              "
            >
              <ul className="space-y-1">
                {["Who we are", "Crew", "Reviews"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="flex items-center rounded-xl px-3 py-2 hover:bg-white/15"
                    >
                      {item}
                      <span className="ml-auto text-xs opacity-0 group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="#services" className="font-medium">
            Services
          </Link>
          <Link href="#projects" className="font-medium">
            Projects
          </Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="text-black hidden md:flex"
          >
            Contact us
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-white/10"
          >
            <span className="block h-0.5 w-5 bg-current mb-1" />
            <span className="block h-0.5 w-5 bg-current mb-1" />
            <span className="block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-4 mb-4 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/20">
          <Link className="block px-5 py-4 font-medium" href="#services">
            Services
          </Link>
          <Link className="block px-5 py-4 font-medium" href="#projects">
            Projects
          </Link>

          <div className="p-4">
            <Button size="sm" variant="outline" className="w-full">
              Contact us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
