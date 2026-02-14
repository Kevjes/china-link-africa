import { Metadata } from "next";
import ApplicationForm from "@/components/ApplicationForm";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Contactez-nous - China Link Africa",
    description: "Entrez en contact avec l'équipe China Link Africa.",
};

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info & Image */}
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">Contactez-nous</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Une question sur une bourse ? Un projet d'importation ?
                            Notre équipe est à votre disposition pour vous répondre rapidement.
                        </p>

                        <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8 shadow-lg">
                            <Image
                                src="/images/contact.png"
                                alt="Equipe China Link Africa"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Téléphone / WhatsApp</h3>
                                    <p className="text-gray-600 mt-1 mb-1">+86 150 4163 6209 (Chine)</p>
                                    <p className="text-gray-600">+237 691 23 15 54 (Cameroun)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-600 mt-1">contact@chinalinkafrica.net</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Bureaux</h3>
                                    <p className="text-gray-600 mt-1">Xuzhou, Province du Jiangsu, Chine</p>
                                    <p className="text-gray-600">Douala, Cameroun</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-8 text-gray-900">Envoyez-nous un message</h2>
                        <ApplicationForm />
                    </div>

                </div>
            </div>
        </div>
    );
}
