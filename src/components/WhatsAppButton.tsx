"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./ui/Button";

export default function WhatsAppButton() {
    const communityLink = "https://chat.whatsapp.com/I2RmvktwN085gjtUhLoKcp"

    return (
        <div className="fixed bottom-6 right-6 z-50 group flex items-center justify-end">
            {/* Tooltip */}
            <div className="absolute right-20 mr-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl text-sm font-semibold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-max border border-gray-100 transform translate-x-4 group-hover:translate-x-0">
                Besoin d'aide ? Contactez nous
                {/* Arrow */}
                <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white border-t border-r border-gray-100 transform -translate-y-1/2 rotate-45"></div>
            </div>

            <a
                href={communityLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur WhatsApp"
                className="relative z-10"
            >
                <Button
                    size="icon"
                    className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg animate-bounce hover:animate-none transition-all duration-300 ring-4 ring-white"
                >
                    <MessageCircle className="h-8 w-8 text-white" />
                </Button>
            </a>
        </div>
    );
}
