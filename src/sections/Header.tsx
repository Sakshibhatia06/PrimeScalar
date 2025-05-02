"use client";
import { useState, useEffect } from "react";
import LogoIcon from '@/assets/logo.svg';
import { Button } from '@/components/Button';
import MenuIcon from '@/assets/icon-menu.svg';
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to shrink header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      } md:py-4`}
    >
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div
          className={`flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative transition-all duration-300 ${
            scrolled ? "scale-[0.95]" : "scale-100"
          }`}
        >
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>

          {/* Logo */}
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {["/", "/about", "/services", "/case-studies", "/contact"].map((path, index) => {
                const labels = ["HOME", "ABOUT", "SERVICES", "CASE STUDIES", "CONTACT US"];
                return (
                  <Link
                    key={path}
                    href={path}
                    className={
                      pathname === path
                        ? "text-purple-500 transition"
                        : "text-white/70 hover:text-white transition"
                    }
                  >
                    {labels[index]}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex gap-4 items-center">
            <Button>Join Now</Button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              <MenuIcon />
            </button>
          </div>
        </div>

        {/* Mobile Menu with scroll-based row/column transition */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div
            className={`flex ${
              scrolled
                ? "flex-row flex-wrap justify-center gap-x-6 gap-y-2"
                : "flex-col gap-4"
            } bg-black/90 border border-white/10 p-5 rounded-xl text-sm transition-all duration-300`}
          >
            {[
              { href: "/", label: "HOME" },
              { href: "/about", label: "ABOUT" },
              { href: "/services", label: "SERVICES" },
              { href: "/case-studies", label: "CASE STUDIES" },
              { href: "/contact", label: "CONTACT US" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={
                  pathname === href
                    ? "text-purple-500"
                    : "text-white/70 hover:text-white"
                }
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

