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
  const [productOpen, setProductOpen] = useState(false);

  useEffect(() => {
    // Navbar entrance
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    // Desktop dropdown animation
    tl.current = gsap.timeline({ paused: true }).fromTo(
      dropdownRef.current,
      { autoAlpha: 0, y: 12, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.25,
        ease: "power3.out",
      }
    );
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
        text-white/80
      "
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          LOGO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm relative">
          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <button className="flex items-center gap-1 font-medium">
              About us <span className="text-xs">▾</span>
            </button>

            {/* Hover bridge */}
            <div className="absolute left-0 top-full h-3 w-full" />

            {/* Dropdown */}
            <div
              ref={dropdownRef}
              className="
                absolute left-0 top-[calc(100%+22px)]
                w-44 rounded-bl-2xl rounded-br-2xl p-4
                opacity-0
                backdrop-blur-xl
                bg-white/20
                border border-t-0 border-white/20
                shadow-[0_20px_50px_rgba(0,0,0,0.2)]
              "
            >
              <p className="mb-3 text-xs uppercase tracking-wide opacity-60">
                About us
              </p>

              <ul className="space-y-1">
                {[
                  { label: "Who we are", href: "/product/overview" },
                  { label: "Crew", href: "/product/features" },
                  { label: "Reviews", href: "/product/pricing" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="
                        group flex items-center
                        rounded-xl px-3 py-2
                        transition hover:bg-white/15
                      "
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="ml-auto text-xs opacity-0 transition group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="#pricing" className="font-medium">
            Services
          </Link>
          <Link href="#contact" className="font-medium">
            Projects
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="hidden md:flex text-black"
          >
            Contact us
          </Button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-white/10"
            aria-label="Open menu"
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
          {/* Product Accordion */}
          <button
            onClick={() => setProductOpen(!productOpen)}
            className="flex w-full items-center justify-between px-5 py-4 font-medium"
          >
            Product
            <span className={`transition ${productOpen ? "rotate-180" : ""}`}>
              ▾
            </span>
          </button>

          {productOpen && (
            <div className="flex flex-col bg-white/5">
              {[
                { label: "Overview", href: "/product/overview" },
                { label: "Features", href: "/product/features" },
                { label: "Pricing", href: "/product/pricing" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-8 py-3 text-sm hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="#pricing"
            className="block px-5 py-4 font-medium hover:bg-white/10"
          >
            Pricing
          </Link>

          <Link
            href="#contact"
            className="block px-5 py-4 font-medium hover:bg-white/10"
          >
            Contact
          </Link>

          <div className="p-4">
            <Button className="w-full" size="sm" variant="outline">
              Contact us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
