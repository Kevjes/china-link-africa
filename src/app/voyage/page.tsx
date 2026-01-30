import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Voyage en Chine - Visa & Tourisme",
    description: "Guide complet pour voyager en Chine : Visas, Villes principales et conseils pratiques.",
};

export default function VoyagePage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="relative bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Guide Voyage Chine</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Préparez votre départ sereinement. Tout savoir sur les visas, la vie sur place et les destinations incontournables.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">

                {/* Visas Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-primary">Types de Visa & Procédures</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Visa L (Tourisme)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">Pour visiter la Chine à des fins touristiques.</p>
                                <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                    <li>Passeport valide (6 mois+)</li>
                                    <li>Billet A/R</li>
                                    <li>Réservation hôtel</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Visa M (Affaires)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">Pour activités commerciales et réunions.</p>
                                <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                    <li>Lettre d'invitation entreprise chinoise</li>
                                    <li>Licence commerciale partenaire</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Visa Z (Travail)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">Pour travailler légalement en Chine.</p>
                                <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                    <li>Permis de travail</li>
                                    <li>Contrat de travail</li>
                                    <li>Examen médical</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Cities Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-primary">Villes Incontournables</h2>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold">Beijing (Pékin)</h3>
                            <p className="text-gray-600">Le cœur politique et culturel. Visitez la Grande Muraille, la Cité Interdite et les Hutongs traditionnels.</p>
                            <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/images/greatwall.jpg"
                                    alt="Grande Muraille de Chine"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold">Shanghai</h3>
                            <p className="text-gray-600">La capitale économique futuriste. Le Bund, la tour Shanghai et l'ancienne concession française.</p>
                            <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/images/shanghai.jpg"
                                    alt="Skyline de Shanghai"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practical Info */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-primary">Vie Pratique</h2>
                    <div className="bg-red-50 p-8 rounded-2xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-2">Applications Indispensables</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>📱 <strong>WeChat</strong> : Communication & Paiement (Vital !)</li>
                                    <li>💳 <strong>Alipay</strong> : Paiements mobiles alternatifs</li>
                                    <li>🗺️ <strong>Baidu Maps</strong> / <strong>Gaode</strong> : Pour se repérer</li>
                                    <li>🚗 <strong>Didi</strong> : Le Uber chinois</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Urgences</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>👮 Police : <strong>110</strong></li>
                                    <li>🚑 Ambulance : <strong>120</strong></li>
                                    <li>🚒 Pompiers : <strong>119</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
