"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

const pricingLinks = [
  { name: "Web Development", href: "/pricing/web-development" },
  { name: "Mobile Development", href: "/pricing/mobile-development" },
  { name: "Graphic Design", href: "/pricing/graphic-design" },
  { name: "Business Registration", href: "/pricing/business-registration" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [mobilePricingOpen, setMobilePricingOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPricingOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Services", href: "/services" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const isPricingActive = pathname.startsWith("/pricing");

  return (
    <nav
      className={`fixed top-0 w-full z-100 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-white/90 backdrop-blur-2xl py-3 shadow-sm shadow-slate-900/5 border-b border-slate-100/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 shrink-0 group">
          <Image
            src="/devola-solutions-logo.png"
            alt="Devola Solutions"
            width={96}
            height={96}
            className="transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors duration-200 group pb-0.5 ${
                  isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#FF5C00] rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* Pricing Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setPricingOpen((o) => !o)}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 relative group pb-0.5 ${
                isPricingActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Pricing
              <MdKeyboardArrowDown
                className={`w-4 h-4 transition-transform duration-300 ${pricingOpen ? "rotate-180" : ""}`}
              />
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#FF5C00] rounded-full transition-all duration-300 ${
                  isPricingActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {pricingOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-56 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden animate-slide-up">
                <div className="p-2">
                  {pricingLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setPricingOpen(false)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        pathname === item.href
                          ? "bg-[#FF5C00] text-white font-bold"
                          : "text-slate-600 hover:bg-orange-50 hover:text-[#FF5C00]"
                      }`}
                    >
                      {pathname === item.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      )}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0">
          <Link
            href="/contact"
            className="relative overflow-hidden bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:bg-[#FF5C00] shadow-md shadow-slate-900/10 hover:shadow-orange-500/20 inline-flex items-center gap-2 group"
          >
            Build My Project
            <span className="group-hover:translate-x-0.5 transition-transform duration-200 text-xs">→</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[102] w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-slate-900 rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-slate-900 rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-slate-900 rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-101 lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Mobile menu top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/devola-solutions-logo.png" alt="Devola Solutions" width={80} height={80} />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col px-6 py-8 gap-1 h-[calc(100vh-73px)] overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-bold transition-all duration-200 animate-fade-in ${
                pathname === link.href
                  ? "bg-orange-50 text-[#FF5C00]"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="w-2 h-2 rounded-full bg-[#FF5C00]" />
              )}
            </Link>
          ))}

          {/* Mobile Pricing Accordion */}
          <div>
            <button
              onClick={() => setMobilePricingOpen((o) => !o)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-bold transition-all duration-200 ${
                isPricingActive ? "bg-orange-50 text-[#FF5C00]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Pricing
              <MdKeyboardArrowDown
                className={`w-5 h-5 transition-transform duration-300 ${mobilePricingOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobilePricingOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-orange-100 pl-4 pb-2">
                <Link
                  href="/pricing"
                  onClick={() => { setIsOpen(false); setMobilePricingOpen(false); }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    pathname === "/pricing" ? "text-[#FF5C00]" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  All Pricing
                </Link>
                {pricingLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => { setIsOpen(false); setMobilePricingOpen(false); }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                      pathname === item.href ? "text-[#FF5C00]" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-base hover:bg-[#FF5C00] transition-all duration-300 shadow-lg"
            >
              Build My Project →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
