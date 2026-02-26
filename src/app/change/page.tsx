import { Metadata } from "next";
import ChangeMoneyForm from "@/components/ChangeMoneyForm";
import Image from "next/image";
import { ArrowRightLeft, ShieldCheck, Zap, Wallet } from "lucide-react";

export const metadata: Metadata = {
    title: "Change de Monnaie - China Link Africa",
    description: "Échangez vos dollars et FCFA en Yuan Chinois (RMB). Taux compétitifs et transferts rapides.",
};

export default function ChangePage() {
    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            {/* Visual Header */}
            <div className="relative h-[300px] sm:h-[400px] w-full mb-10 overflow-hidden">
                <Image
                    src="/images/business&sourcing.png"
                    alt="Change de devises vers la Chine"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-md">
                        Change de Monnaie 💰
                    </h1>
                    <p className="mt-4 text-xl text-red-100 max-w-2xl drop-shadow-sm">
                        Échangez facilement vos devises vers le Yuan (RMB) au meilleur taux du marché.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start mt-8">
                    
                    {/* Explications et Avantages */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Service de Change Rapide & Sécurisé</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Nous simplifions vos transactions commerciales et vos transferts vers la Chine. Convertissez directement vos <strong className="text-gray-900">Dollars américains (USD)</strong> ou vos <strong className="text-gray-900">Francs CFA (FCFA)</strong> en monnaie locale chinoise. Que ce soit pour payer vos fournisseurs, alimenter votre compte personnel, ou recharger vos portefeuilles électroniques.
                        </p>

                        <div className="space-y-8">
                            <div className="flex bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-primary">
                                        <Wallet className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Vers tous les portefeuilles</h3>
                                    <p className="mt-2 text-gray-600">Alimentation directe sur Alipay, WeChat Pay, ou virements sur vos comptes bancaires chinois (ICBC, Bank of China, etc.)</p>
                                </div>
                            </div>

                            <div className="flex bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-primary">
                                        <ArrowRightLeft className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Taux Compétitifs</h3>
                                    <p className="mt-2 text-gray-600">Nous offrons des taux de change actualisés et très avantageux par rapport aux banques classiques avec de faibles frais cachés.</p>
                                </div>
                            </div>

                            <div className="flex bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-primary">
                                        <Zap className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Transactions Éclair</h3>
                                    <p className="mt-2 text-gray-600">La majorité des transferts sont réalisés en quelques minutes après réception de vos fonds, vous permettant de faire des affaires sans délai.</p>
                                </div>
                            </div>
                            
                            <div className="flex bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-primary">
                                        <ShieldCheck className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Confiance Absolue</h3>
                                    <p className="mt-2 text-gray-600">Transactions 100% sécurisées. Notre expertise et notre transparence vous garantissent une opération en toute tranquillité.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="lg:sticky lg:top-8">
                        <ChangeMoneyForm />
                    </div>

                </div>
            </div>
        </div>
    );
}
