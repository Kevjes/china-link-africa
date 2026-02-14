import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Pied de page
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2 mb-4 rounded-xl inline-flex">
                            <Image src="/images/logo-transparent.png" alt="China Link Africa Logo" width={150} height={50} className="h-18 w-auto rounded-lg" />
                        </div>
                        <p className="text-sm leading-6 text-gray-300">
                            Votre partenaire de confiance pour les études, les voyages d'affaires et le tourisme en Chine.
                            Connectons les opportunités entre l'Afrique et la Chine.
                        </p>
                        <div className="flex space-x-6">
                            {/* Add social links here if needed */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/bourses" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Bourses d'études
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/voyage" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Assistance Visa
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Logistique & Import
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/voyage" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Tourisme
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Contactez-nous
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="flex items-center gap-2 text-sm text-gray-300">
                                        <Mail className="h-4 w-4 text-primary" />
                                        <span>contact@chinalinkafrica.net</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-300">
                                        <Phone className="h-4 w-4 text-primary" />
                                        <span>+86 150 4163 6209</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-300">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        <span>Xuzhou, Chine</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} China Link Africa. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
