"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./ui/Button";

export default function WhatsAppButton() {
    const phoneNumber = "8615041636209";
    const message = "Bonjour, j'ai besoin d'assistance pour SAO Chine.";

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur WhatsApp"
            >
                <Button
                    size="icon"
                    className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg animate-bounce hover:animate-none transition-all duration-300"
                >
                    <MessageCircle className="h-8 w-8 text-white" />
                </Button>
            </a>
        </div>
    );
}
