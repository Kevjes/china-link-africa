import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, GraduationCap, Plane, Globe, Award } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Shanghai Bund"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-red-900/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Votre Avenir Commence en <span className="text-secondary">Chine</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Découvrez des opportunités de bourses d'études exceptionnelles et explorez la richesse culturelle de la Chine.
              SAO Chine vous accompagne de A à Z.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/bourses">
                <Button size="lg" className="bg-secondary text-red-900 hover:bg-yellow-400 font-bold border-none text-lg px-8">
                  Trouver une Bourse
                </Button>
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-secondary hover:underline flex items-center gap-1">
                Nous contacter <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Product: Scholarships */}
      <section className="py-24 bg-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos Bourses d'Études</h2>
            <p className="mt-2 text-lg leading-8 text-muted-foreground">
              Accédez aux meilleures universités chinoises avec des financements complets ou partiels.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-red-50 p-2 ring-1 ring-red-100">
                <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Gouvernement Chinois (CSC)</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Bourses complètes couvrant frais de scolarité, logement et allocation mensuelle. Le "Graal" pour les étudiants internationaux.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-red-50 p-2 ring-1 ring-red-100">
                <Globe className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Bourses Provinciales</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Financements offerts par les provinces (Shanghai, Beijing, Zhejiang...) pour attirer les talents dans leurs universités.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-red-50 p-2 ring-1 ring-red-100">
                <Award className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Universités d'Excellence</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Programmes spécifiques des universités du C9 League (Tsinghua, Peking University) et autres institutions prestigieuses.
              </p>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="/bourses">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-red-50">
                Voir toutes les bourses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Services Complets</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Au-delà des études, nous facilitons votre arrivée et votre séjour en Chine.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
              <Plane className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold leading-8 text-white">Assistance Visa</h3>
              <p className="mt-4 text-base leading-7 text-gray-300">Guide complet pour les visas L (Tourisme), M (Affaires) et X (Études). Documents, délais et coûts.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
              <Globe className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold leading-8 text-white">Tourisme & Culture</h3>
              <p className="mt-4 text-base leading-7 text-gray-300">Circuits sur mesure : Muraille de Chine, Shanghai, Cité Interdite. Découvrez la beauté de la Chine.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
              <Award className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold leading-8 text-white">Logistique Business</h3>
              <p className="mt-4 text-base leading-7 text-gray-300">Support pour les voyages d'affaires : interprètes, transports, et sourcing de produits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Prêt à commencer votre aventure ?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-red-100">
              Que ce soit pour étudier, voyager ou faire des affaires, SAO Chine est votre partenaire privilégié.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/apply">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 shadow-xl">
                  Contacter un Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
