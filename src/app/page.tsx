import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, GraduationCap, Plane, Globe, Award } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="China Link Africa Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 drop-shadow-sm">
              Connectez-vous à la <span className="text-secondary">Chine</span> avec <br className="hidden sm:block" />
              <span className="text-white">China Link Africa</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100 max-w-2xl mx-auto">
              Votre pont vers l'excellence académique et les opportunités d'affaires.
              Nous simplifions votre parcours vers la Chine.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link href="/bourses" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-red-700 text-white font-bold text-lg px-8 py-6 h-auto shadow-lg transition-all hover:scale-105">
                  Trouver une Bourse
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/20 font-semibold text-lg px-8 py-6 h-auto shadow-lg bg-transparent backdrop-blur-sm">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-24 bg-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Nos Bourses d'Études</h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Accédez aux meilleures universités chinoises avec des financements complets ou partiels.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold leading-7 text-gray-900">Gouvernement Chinois (CSC)</h3>
              <p className="mt-4 text-base leading-7 text-gray-600 flex-auto">
                Bourses complètes couvrant frais de scolarité, logement et allocation mensuelle. Le "Graal" pour les étudiants internationaux visé par l'excellence.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Globe className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold leading-7 text-gray-900">Bourses Provinciales</h3>
              <p className="mt-4 text-base leading-7 text-gray-600 flex-auto">
                Financements attractifs offerts par les provinces (Shanghai, Beijing, Zhejiang...) pour attirer les talents mondiaux.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Award className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold leading-7 text-gray-900">Universités d'Excellence</h3>
              <p className="mt-4 text-base leading-7 text-gray-600 flex-auto">
                Programmes d'élite des universités du C9 League (Tsinghua, Peking University) et autres institutions de renommée mondiale.
              </p>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="/bourses">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-red-50 font-semibold px-8">
                Voir toutes les bourses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">Services Complets pour le Business</h2>
              <p className="text-lg leading-8 text-gray-300 mb-8">
                Au-delà des études, nous facilitons votre arrivée et votre séjour en Chine avec une expertise locale. Logistique, Sourcing, Accompagnement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-primary/20 p-2 rounded-full"><Plane className="h-5 w-5 text-primary" /></div>
                  <span>Assistance Visa & Voyage</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-primary/20 p-2 rounded-full"><Globe className="h-5 w-5 text-primary" /></div>
                  <span>Sourcing & Import/Export</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-primary/20 p-2 rounded-full"><Award className="h-5 w-5 text-primary" /></div>
                  <span>Interprétariat & Conciergerie</span>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/services">
                  <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-8 h-12">
                    Découvrir nos services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/administration&visa.png"
                alt="Services China Link Africa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimony Section */}
      <section className="py-24 bg-gray-50 sm:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/testimony.png"
                alt="Happy Student Testimony"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Réussir son projet avec China Link Africa</h2>
              <blockquote className="text-xl italic text-gray-700 leading-9 mb-8">
                "Grâce à l'accompagnement de China Link Africa, j'ai pu obtenir ma bourse CSC et m'installer sereinement à Pékin. Leur expertise sur le terrain fait toute la différence."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl">M</div>
                <div>
                  <p className="font-bold text-gray-900">Moussa K.</p>
                  <p className="text-sm text-gray-500">Étudiant en Master, Tsinghua University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Prêt à lancer votre aventure ?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-red-100">
            China Link Africa vous ouvre les portes de l'Empire du Milieu. Études, Voyage, Business - Nous sommes là.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-6 h-auto shadow-xl text-lg rounded-full">
                Parler à un Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
