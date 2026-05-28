import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-32 pb-12 px-6 relative overflow-hidden">
    {/* Subtle Background Glow */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5C00] blur-[150px] opacity-10 pointer-events-none" />

    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-24 border-b border-white/5">
        {/* Brand Info */}
        <div className="md:col-span-5">
          <div className="text-3xl font-black mb-8 tracking-tighter">
            <Image
              src="/devola-solutions-logo.png"
              alt="Devola Solutions Logo"
              width={100}
              height={100}
            />
          </div>
          <p className="text-slate-400 max-w-sm text-lg leading-relaxed mb-10 font-medium">
            Building digital bridges between your business and your customers
            with precision and style.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <BsTwitter />, href: "https://twitter.com/dev_olayinka" },
              {
                icon: <BsInstagram />,
                href: "https://instagram.com/dev_olayinka",
              },
              { icon: <FaTiktok />, href: "https://tiktok.com/dev_olayinka" },
              { icon: <BsWhatsapp />, href: "https://wa.me/08169415526" },
            ].map(({ icon, href }, i) => {
              const cls =
                "w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-bold text-xs hover:border-[#FF5C00] hover:text-[#FF5C00] cursor-pointer transition-all duration-300";
              return href ? (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {icon}
                </a>
              ) : (
                <div key={i} className={cls}>
                  {icon}
                </div>
              );
            })}
          </div>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-[#FF5C00]">
              Services
            </h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="hover:text-white transition cursor-pointer">
                <Link href="/services/web-development">Web Development</Link>
              </li>
              <li className="hover:text-white transition cursor-pointer">
                <Link href="/services/app-development">
                  Mobile App Development
                </Link>
              </li>
              <li className="hover:text-white transition cursor-pointer">
                <Link href="/services/graphic-design">Graphic Design</Link>
              </li>
              <li className="hover:text-white transition cursor-pointer">
                <Link href="/services/business-registration">
                  Business Registration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-[#FF5C00]">
              Agency
            </h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="hover:text-white transition cursor-pointer">
                <Link href="/aboutus">About Us</Link>
              </li>
              <li className="hover:text-white transition cursor-pointer">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="hover:text-white transition cursor-pointer">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className="hover:text-white transition cursor-pointer">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:text-white transition cursor-pointer">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-[#FF5C00]">
              Work with us
            </h4>
            <p className="text-slate-400 mb-6 font-medium">
              Have a project in mind?
            </p>
            <a
              href="mailto:devolacontact@gmail.com"
              className="text-xl font-bold border-b-2 border-[#FF5C00] hover:text-[#FF5C00] transition-colors pb-1"
            >
              devolacontact@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">
        <p>© 2026 DevOla Solutions. Handcrafted in Nigeria.</p>
        <div className="mt-6 md:mt-0 space-x-8">
          <a href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
