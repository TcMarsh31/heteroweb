"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import gsap from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Standard shadcn utility

const servicesMenu = [
  {
    title: "",
    items: ["All SERVICES"],
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    items: [".NET MAUI", "REACT NATIVE APP"],
  },
  {
    title: "FRONT-END DEVELOPMENT",
    items: ["REACT.JS", "ANGULAR", "HTML 5 & CSS 3", "JAVASCRIPT"],
  },
  {
    title: "BACK-END DEVELOPMENT",
    items: ["C#", "NODEJS", "NEXTJS"],
  },
];

export default function Navbar() {
  const pathname = usePathname(); // 2. Get current path
  const navRef = useRef(null);
  // const servicesDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  // const servicesTl = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  // Helper to check if link is active
  const isActive = (path) => pathname === path;

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    const mm = gsap.matchMedia();

    // ✅ DESKTOP behavior
    mm.add("(min-width: 768px)", () => {
      gsap.to(navRef.current, {
        scrollTrigger: {
          trigger: document.body,
          start: "top -100px",
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
    });

    // ✅ MOBILE behavior (NO horizontal movement)
    mm.add("(max-width: 767px)", () => {
      gsap.to(navRef.current, {
        scrollTrigger: {
          trigger: document.body,
          start: "top -100px",
          toggleActions: "play reverse play reverse",
        },
        backgroundColor: "rgba(255,255,255,0.95)",
        borderColor: "rgba(0,0,0,0.08)",
        color: "#000",
        backdropFilter: "blur(10px)",
        top: 0,
        left: 0,
        x: 0,
        width: "100%",
        borderRadius: 0,
        duration: 0.25,
        ease: "power3.inOut",
      });
    });

    return () => mm.revert();
  }, []);

  // const openServicesMenu = () => servicesTl.current?.play();
  // const closeServicesMenu = () => servicesTl.current?.reverse();

  // const buildNavLink = (item) => {
  //   if (item.toLowerCase() === "all services") return "/services";
  //   const slug = item.toLowerCase().replace(/[\s&]+/g, "-");
  //   return `/services/${slug}`;
  // };

  return (
    <header
      ref={navRef}
      className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-2xl bg-white/15 border border-white/20 shadow-lg text-white transition-colors"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          HeteroGenz
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm relative">
          {/* <div
            className="relative"
            onMouseEnter={openServicesMenu}
            onMouseLeave={closeServicesMenu}
          >
            <button
              className={cn(
                "flex items-center gap-1 font-medium transition-colors hover:opacity-80",
                pathname.includes("/services") && "text-blue-400" // Active state for parent
              )}
            >
              Services <ChevronDown size={14} />
            </button>

            <div
              ref={servicesDropdownRef}
              className="absolute left-0 top-[calc(100%+22px)] w-[500px] rounded-b-2xl p-6 opacity-0 backdrop-blur-xl bg-white/20 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              <div className="columns-2 gap-8 space-y-6">
                {servicesMenu.map((category) => (
                  <div
                    key={category.title}
                    className="break-inside-avoid flex flex-col space-y-2"
                  >
                    {category.title && (
                      <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">
                        {category.title}
                      </h4>
                    )}
                    <ul className="space-y-1 text-xs">
                      {category.items.map((item) => {
                        const href = `#${item
                          .toLowerCase()
                          .replace(/[\s&]+/g, "-")}`;
                        return (
                          <li key={item}>
                            <Link
                              href={`${buildNavLink(item)}`}
                              className={cn(
                                "block py-1 transition-colors hover:text-blue-500",
                                isActive(href)
                                  ? "text-blue-500 font-semibold"
                                  : "text-inherit"
                              )}
                            >
                              {item}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Standard Links with Active Logic */}
          {[
            { name: "Services", href: "/services" },
            { name: "About us", href: "/about-us" },
            { name: "Projects", href: "/projects" },
            { name: "Contact us", href: "/contact" },
            // { name: "Blog", href: "/blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-colors hover:opacity-80",
                isActive(link.href) ? "text-blue-400" : "text-inherit"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <Button
            size="sm"
            variant="outline"
            className="text-black hidden md:flex"
          >
            Contact us
          </Button> */}
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="mx-4 mb-4 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/20">
          <Link
            className="block px-5 py-4 font-medium"
            href="/services"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            className="block px-5 py-4 font-medium"
            href="/about-us"
            onClick={() => setMobileOpen(false)}
          >
            About us
          </Link>
          <Link
            className="block px-5 py-4 font-medium"
            href="/projects"
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="block px-5 py-4 font-medium"
            href="/contact"
            onClick={() => setMobileOpen(false)}
          >
            Contact us
          </Link>
          {/* <div className="p-4">
            <Button size="sm" variant="outline" className="w-full">
              Contact us
            </Button>
          </div> */}
        </nav>
      </div>
    </header>
  );
}
