import { Metadata } from "next";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
    title: "Postuler - China Link Africa",
    description: "Candidature en ligne pour les bourses d'études et services China Link Africa.",
};

export default function ApplyPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="mx-auto max-w-xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4">Postuler Maintenant</h1>
                    <p className="text-gray-600">
                        Remplissez le formulaire ci-dessous pour démarrer votre procédure.
                        Nos experts analyseront votre dossier gratuitement.
                    </p>
                </div>
                <ApplicationForm />
            </div>
        </div>
    );
}
