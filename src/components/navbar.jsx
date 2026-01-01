"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Define the structure for the services menu with only the requested sections
const servicesMenu = [
  {
    title: "MOBILE APP DEVELOPMENT",
    items: [
      "FLUTTER APP DEVELOPMENT (IOS & ANDROID)",
      "AUGMENTED REALITY APP",
      "RADIO APP",
    ],
  },
  {
    title: "WEB APP DEVELOPMENT",
    items: [
      "FRONT-END DEVELOPMENT",
      "BACK-END DEVELOPMENT",
      ".NET",
      "REACT.JS",
      "PROGRESSIVE WEB APPS",
    ],
  },
];

const aboutUsItems = ["Who we are", "Crew", "Reviews"];

export default function Navbar() {
  const navRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const servicesTl = useRef(null);
  const aboutTl = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Navbar entrance
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    // Services Dropdown animation timeline
    servicesTl.current = gsap
      .timeline({ paused: true })
      .fromTo(
        servicesDropdownRef.current,
        { autoAlpha: 0, y: 12, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.25, ease: "power3.out" }
      );

    // About Us Dropdown animation timeline
    aboutTl.current = gsap
      .timeline({ paused: true })
      .fromTo(
        aboutDropdownRef.current,
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
      color: "#000",
      backdropFilter: "blur(10px)",
      width: "100%",
      maxWidth: "100%",
      top: 0,
      borderRadius: 0,
      left: "50%",
      xPercent: -50,
      duration: 0.25,
      ease: "power3.inOut",
    });

    // Dropdown / menu background scroll change (targeting both refs)
    gsap.to([servicesDropdownRef.current, aboutDropdownRef.current], {
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

  // Handlers for Services menu
  const openServicesMenu = () => servicesTl.current?.play();
  const closeServicesMenu = () => servicesTl.current?.reverse();

  // Handlers for About us menu
  const openAboutMenu = () => aboutTl.current?.play();
  const closeAboutMenu = () => aboutTl.current?.reverse();

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
        text-white
        transition-colors
      "
    >
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          LOGO
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm relative">
          {/* --- Services Mega Menu (Now only 2 columns) --- */}
          <div
            className="relative"
            onMouseEnter={openServicesMenu}
            onMouseLeave={closeServicesMenu}
          >
            <button className="flex items-center gap-1 font-medium">
              Services{" "}
              <ChevronDown
                size={14}
                className="transition-transform duration-200"
              />
            </button>

            <div
              ref={servicesDropdownRef}
              className="
                absolute left-0 top-[calc(100%+22px)]
                w-150 rounded-b-2xl p-4
                opacity-0
                backdrop-blur-xl
                bg-white/20
                border border-white/20
                shadow-[0_20px_50px_rgba(0,0,0,0.2)]
              "
            >
              {/* Using a 2-column grid instead of 4 */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                {servicesMenu.map((category) => (
                  <div key={category.title} className="flex flex-col space-y-3">
                    <h4 className="text-xs font-semibold uppercase opacity-50">
                      {category.title}
                    </h4>
                    <ul className="space-y-2 text-xs">
                      {category.items.map((item) => (
                        <li key={item}>
                          <Link
                            href={`#${item
                              .toLowerCase()
                              .replace(/[\s&]+/g, "-")}`}
                            className="block py-1 hover:text-blue-500 transition-colors"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- About us Dropdown --- */}
          <div
            className="relative"
            onMouseEnter={openAboutMenu}
            onMouseLeave={closeAboutMenu}
          >
            <button className="flex items-center gap-1 font-medium">
              About us{" "}
              <ChevronDown
                size={14}
                className="transition-transform duration-200"
              />
            </button>

            <div
              ref={aboutDropdownRef}
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
                {aboutUsItems.map((item) => (
                  <li key={item} className="group">
                    <Link
                      href={`#${item.toLowerCase().replace(/[\s&]+/g, "-")}`}
                      className="block py-1 hover:text-blue-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- Standard Links --- */}
          <Link href="/projects" className="font-medium">
            Projects
          </Link>
          <Link href="/blog" className="font-medium">
            Blog
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
          <Link className="block px-5 py-4 font-medium" href="#about">
            About us
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
