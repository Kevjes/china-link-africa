import ScholarshipCard from "@/components/ScholarshipCard";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Bourses d'Études - SAO Chine",
    description: "Liste complète des bourses d'études disponibles en Chine : CSC, Gouvernement Provincial, Universités.",
};

const scholarships = [
    {
        title: "Bourse du Gouvernement Chinois (CSC Type A)",
        type: "Gouvernemental",
        amount: "Indemnité mensuelle 2500-3500 RMB",
        university: "Toutes universités",
        coverage: "Frais de scolarité, Logement, Assurance",
    },
    {
        title: "Bourse du Gouvernement de Shanghai (SGS)",
        type: "Provincial",
        amount: "Variable selon niveau",
        university: "Universités de Shanghai (Fudan, SJTU...)",
        coverage: "Complète ou Partielle",
    },
    {
        title: "Bourse Confucius (CIS)",
        type: "Langue & Culture",
        amount: "Complète",
        university: "Instituts Confucius",
        coverage: "Scolarité, Logement, Vie quotidienne",
    },
    {
        title: "Schwarzman Scholars",
        type: "Excellence",
        amount: "Entièrement financé",
        university: "Tsinghua University",
        coverage: "Master One-Year Program",
    },
    {
        title: "Bourse de l'Université de Zhejiang",
        type: "Universitaire",
        amount: "20,000 - 30,000 RMB",
        university: "Zhejiang University",
        coverage: "Partielle ou Complète",
    },
    {
        title: "Bourse 'Belt and Road'",
        type: "International",
        amount: "Variable",
        university: "Partenaires Belt & Road",
        coverage: "Spécifique aux pays partenaires",
    },
    {
        title: "Bourse du Gouvernement de Beijing",
        type: "Provincial",
        amount: "20,000 - 40,000 RMB/an",
        university: "Universités de Pékin",
        coverage: "Exemption frais de scolarité partielle/totale",
    },
    {
        title: "Bourse Jasmine (Jiangsu)",
        type: "Provincial",
        amount: "30,000 - 50,000 RMB",
        university: "Universités du Jiangsu",
        coverage: "Complète pour talents",
    }
];

export default function BoursesPage() {
    return (
        <div className="bg-gray-50 min-h-screen pb-10">
            {/* Visual Header */}
            <div className="relative h-[300px] w-full mb-10">
                <Image
                    src="/images/students.jpg"
                    alt="Étudiants diplômés"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl text-center px-4">
                        Bourses d'Études en Chine
                    </h1>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Explorez les opportunités de financement pour vos études. Il existe plus de 50 programmes de bourses en Chine.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {scholarships.map((scholarship, index) => (
                        <ScholarshipCard key={index} {...scholarship} />
                    ))}
                </div>

                <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
                    <h2 className="text-2xl font-bold mb-6">Critères d'Éligibilité Généraux</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Pour Licence (Bachelor)</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Diplôme de fin d'études secondaires (Baccalauréat)</li>
                                <li>Moins de 25 ans</li>
                                <li>HSK 4 (pour programmes en chinois) ou IELTS (pour anglais)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Pour Master</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Diplôme de Licence (Bachelor)</li>
                                <li>Moins de 35 ans</li>
                                <li>2 lettres de recommandation</li>
                                <li>Projet d'étude complet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
