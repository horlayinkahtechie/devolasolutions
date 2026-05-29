"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

const pricingLinks = [
  { name: "Web Development", href: "/pricing/web-development" },
  { name: "Mobile Development", href: "/pricing/mobile-development" },
  { name: "Graphic Design", href: "/pricing/grahic-design" },
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
    { name: "How we work", href: "/how-we-work" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const isPricingActive = pathname.startsWith("/pricing");

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-white/80 backdrop-blur-xl py-3 shadow-sm border-b border-slate-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-slate-900 cursor-pointer"
        >
          <Image
            src="/devola-solutions-logo.png"
            alt="Devola Solutions Logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-bold transition-colors group ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF5C00] transition-all duration-300 ${
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
              className={`flex items-center gap-1 text-sm font-bold transition-colors relative group ${
                isPricingActive
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Pricing
              <MdKeyboardArrowDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  pricingOpen ? "rotate-180" : ""
                }`}
              />
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF5C00] transition-all duration-300 ${
                  isPricingActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {pricingOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 overflow-hidden">
                <div className="p-1.5">
                  {pricingLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setPricingOpen(false)}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "bg-[#FF5C00] text-white font-bold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-slate-900 text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-[#FF5C00] transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-orange-500/20"
          >
            Build My Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-[101]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-500 lg:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-screen space-y-6 px-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black tracking-tighter ${
                pathname === link.href ? "text-[#FF5C00]" : "text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Pricing Accordion */}
          <div className="w-full">
            <button
              onClick={() => setMobilePricingOpen((o) => !o)}
              className={`flex items-center gap-2 text-4xl font-black tracking-tighter ${
                isPricingActive ? "text-[#FF5C00]" : "text-slate-900"
              }`}
            >
              Pricing
              <MdKeyboardArrowDown
                className={`w-8 h-8 transition-transform duration-200 ${
                  mobilePricingOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobilePricingOpen && (
              <div className="mt-3 ml-2 flex flex-col space-y-3 border-l-2 border-[#FF5C00] pl-5">
                <Link
                  href="/pricing"
                  onClick={() => {
                    setIsOpen(false);
                    setMobilePricingOpen(false);
                  }}
                  className={`text-lg font-bold ${
                    pathname === "/pricing"
                      ? "text-[#FF5C00]"
                      : "text-slate-600"
                  }`}
                >
                  All Pricing
                </Link>
                {pricingLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setMobilePricingOpen(false);
                    }}
                    className={`text-lg font-bold ${
                      pathname === item.href
                        ? "text-[#FF5C00]"
                        : "text-slate-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button className="w-full bg-[#FF5C00] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/20 mt-4">
            Start Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
