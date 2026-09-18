import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "2348169415526"; // +234 816 941 5526
const WHATSAPP_MESSAGE = "Hi Devola Solutions, I'd like to talk about a project.";

/* Fixed floating WhatsApp button, shown on every page (see app/layout.tsx).
   The pulsing ring behind the icon is the "beeping" draw-attention effect. */
export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30 group-hover:bg-[#20BD5A] transition-colors duration-200">
        <FaWhatsapp size={28} />
      </span>
    </a>
  );
}
