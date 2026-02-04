import { Metadata } from "next";
import { Briefcase, Plane, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Nos Services - China Link Africa",
    description: "Services dédiés aux entreprises et particuliers : Sourcing, Interprétariat, Logistique.",
};

export default function ServicesPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Nos Services</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        China Link Africa connecte les opportunités entre l'Afrique et la Chine avec une gamme de services professionnels.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gray-50 flex flex-col rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image src="/images/business&sourcing.png" alt="Sourcing & Achat" fill className="object-cover" />
                        </div>
                        <div className="p-8">
                            <div className="mb-4 inline-block p-3 bg-red-100 rounded-lg text-primary">
                                <ShoppingBag className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Sourcing & Achat</h3>
                            <p className="text-gray-600">
                                Recherche de fournisseurs fiables, négociation de prix, et contrôle qualité avant expédition.
                                Nous sommes vos yeux en Chine.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 flex flex-col rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image src="/images/premium_travel.png" alt="Voyages d'Affaires" fill className="object-cover" />
                        </div>
                        <div className="p-8">
                            <div className="mb-4 inline-block p-3 bg-red-100 rounded-lg text-primary">
                                <Briefcase className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Voyages d'Affaires</h3>
                            <p className="text-gray-600">
                                Organisation complète de vos déplacements : invitation pour visa, interprète accompagnateur, réservation d'hôtels et transport.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 flex flex-col rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image src="/images/logistic_export.png" alt="Logistique Export" fill className="object-cover" />
                        </div>
                        <div className="p-8">
                            <div className="mb-4 inline-block p-3 bg-red-100 rounded-lg text-primary">
                                <Plane className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Logistique Export</h3>
                            <p className="text-gray-600">
                                Gestion du transport (aérien/maritime), groupage de marchandises, et formalités douanières export.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-primary rounded-3xl p-8 sm:p-16 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Besoin d'une solution sur mesure ?</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8 text-red-100">
                        Discutons de votre projet. Notre équipe est basée à Xuzhou et connaît parfaitement le terrain.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                            Demander un devis
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
