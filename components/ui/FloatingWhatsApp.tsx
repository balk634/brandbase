import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import { masterConfig } from "@/config/master";

export function FloatingWhatsApp() {
  const whatsappNumber = masterConfig.contact.phone.replace(/[^0-9]/g, '');

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      aria-label="Chat on WhatsApp"
    >
      <IconBrandWhatsapp size={32} strokeWidth={1.5} />
    </Link>
  );
}
