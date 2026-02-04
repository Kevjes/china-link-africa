"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, GraduationCap, Plane, Briefcase, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Bourses", href: "/bourses", icon: GraduationCap },
    { name: "Voyage & Visa", href: "/voyage", icon: Plane },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Phone },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                        <Image src="/images/logo.png" alt="China Link Africa Logo" width={180} height={60} className="h-14 w-auto" priority />
                        <span className="text-2xl font-extrabold tracking-tight text-primary">China Link Africa</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Ouvrir menu principal</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors flex items-center gap-1"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/apply">
                        <Button variant="default" className="font-semibold bg-primary hover:bg-red-700 text-white shadow-md hover:shadow-lg transition-all">
                            Postuler Maintenant <span aria-hidden="true">&rarr;</span>
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-white">
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                                <Image src="/images/logo.png" alt="China Link Africa Logo" width={150} height={50} className="h-12 w-auto" />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Fermer menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <div className="flex items-center gap-2">
                                                {item.icon && <item.icon className="h-5 w-5" />}
                                                {item.name}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="/apply"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Button className="w-full">Candidater</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
