import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-10 px-5 md:px-10 relative overflow-hidden">
    {/* Subtle glow */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5C00] blur-[160px] opacity-[0.07] pointer-events-none" />

    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-14 pb-16 border-b border-white/6">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="mb-7">
            <Image
              src="/devola-solutions-logo.png"
              alt="Devola Solutions"
              width={90}
              height={90}
            />
          </div>
          <p className="text-slate-400 max-w-sm text-[15px] leading-relaxed mb-8 font-medium">
            Building digital bridges between your business and your customers
            with precision and style.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <BsTwitter size={15} />, href: "https://twitter.com/dev_olayinka" },
              { icon: <BsInstagram size={15} />, href: "https://instagram.com/dev_olayinka" },
              { icon: <FaTiktok size={14} />, href: "https://tiktok.com/@dev_olayinka" },
              { icon: <BsWhatsapp size={15} />, href: "https://wa.me/08169415526" },
            ].map(({ icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-[#FF5C00] hover:text-[#FF5C00] hover:bg-[#FF5C00]/8 transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-[#FF5C00]">Services</h4>
            <ul className="space-y-3.5">
              {[
                { label: "Web Development", href: "/services/web-development" },
                { label: "Mobile App Dev", href: "/services/app-development" },
                { label: "Graphic Design", href: "/services/graphic-design" },
                { label: "Business Registration", href: "/services/business-registration" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 text-sm font-medium hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-[#FF5C00]">Agency</h4>
            <ul className="space-y-3.5">
              {[
                { label: "About Us", href: "/aboutus" },
                { label: "Pricing", href: "/pricing" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 text-sm font-medium hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-[#FF5C00]">Work With Us</h4>
            <p className="text-slate-400 text-sm mb-4 font-medium">Have a project in mind?</p>
            <a
              href="mailto:devolasolutions@gmail.com"
              className="text-base font-bold border-b-2 border-[#FF5C00]/40 hover:border-[#FF5C00] hover:text-[#FF5C00] transition-all duration-300 pb-1 inline-block"
            >
              abdulsalam@devolasolutions.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-[0.25em] font-bold">
        <p>© 2026 DevOla Solutions. Handcrafted in Nigeria.</p>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-slate-400 transition-colors duration-200">Privacy Policy</a>
          <a href="/terms" className="hover:text-slate-400 transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
