import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Briefcase, 
  Target, 
  ChevronRight, 
  BadgePercent, 
  Award,
  Zap,
  Gift
} from "lucide-react";

export default function OpportunitePage() {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-red-600/10 ring-1 ring-red-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-red-600/10">
              Programme Partenaire Exclusif
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Devenez Partenaire & <span className="text-primary">Bénéficiez de Nos Réseaux</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Rejoignez notre programme de partenariat exclusif et transformez chaque collaboration en opportunité de revenus récurrents.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-6 h-auto shadow-lg transition-all hover:scale-105">
                Devenir Partenaire
              </Button>
            </Link>
            <Link href="#commission-structure" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-primary transition-colors">
              Voir les commissions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Découvrez Notre Programme Partenaire <span className="text-primary">Gagnant-Gagnant</span>
                </h2>
                <div className="space-y-6 text-lg leading-8 text-gray-600">
                  <p>
                    Chez <strong>CHINA LINK AFRICA</strong>, nous ne nous contentons pas de vous offrir des services d'excellence pour l'obtention de bourses scolaires en Chine, les visas visiteurs et affaires, et l'accompagnement dans l'achat de machines et articles en gros.
                  </p>
                  <p>
                    Nous allons plus loin en vous proposant une opportunité unique de devenir partenaire et de générer des revenus supplémentaires grâce à notre programme de marketing de réseau.
                  </p>
                  <div className="bg-red-50 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="font-medium text-gray-900 italic">
                      "Chaque client peut désormais devenir un ambassadeur et être récompensé pour ses ventes et celles de son réseau développé."
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl bg-gray-900 p-8 shadow-2xl lg:p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-red-900 opacity-90" />
                <div className="relative z-10 flex flex-col justify-center h-full text-white">
                    <Users className="w-16 h-16 mb-6 text-white/80" />
                    <h3 className="text-2xl font-bold mb-4">La Force du Réseau</h3>
                    <p className="text-red-100 mb-6">
                        Construisez une équipe dynamique et profitez de la croissance collective. Notre modèle est conçu pour récompenser l'engagement et la performance à tous les niveaux.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <Briefcase className="w-5 h-5 text-red-200" />
                            <span>Opportunité Business Clé en Main</span>
                        </li>
                         <li className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-red-200" />
                            <span>Revenus Potentiels Illimités</span>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Comment Ça Fonctionne */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comment Ça Fonctionne ?</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Un modèle simple et transparent en 4 étapes.</p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Devenez Client-Partenaire",
                description: "Dès votre première commande de service ou d'achat de produits, vous pouvez activer votre statut de partenaire.",
                icon: Target
              },
              {
                step: "02",
                title: "Recommandez et Gagnez",
                description: "Recevez un lien ou un code partenaire unique pour recommander nos services.",
                icon: Gift
              },
              {
                step: "03",
                title: "Élargissez Votre Réseau",
                description: "Gagnez des commissions sur les ventes générées par les partenaires que vous recrutez dans votre réseau.",
                icon: Users
              },
              {
                step: "04",
                title: "Suivez Vos Gains",
                description: "Tableau de bord personnalisé avec suivi en temps réel de vos commissions et performances.",
                icon: TrendingUp
              },
            ].map((feature) => (
              <div key={feature.title} className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-red-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                   <p className="mt-6 text-4xl font-black text-gray-100 absolute top-4 right-6 -z-10 group-hover:text-red-50 transition-colors">{feature.step}</p>
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Avantages */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pourquoi Rejoindre Notre Réseau ?</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Les avantages exclusifs de notre programme.</p>
          </div>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {[
              {
                name: "Commissions Attractives",
                description: "Pourcentage sur chaque vente directe et indirecte.",
                icon: BadgePercent,
              },
              {
                name: "Formation Gratuite",
                description: "Ressources et formations pour maximiser vos revenus.",
                icon: GraduationCapIcon, // Defined below to avoid conflict if imported
              },
              {
                name: "Support Dédié",
                description: "Équipe disponible pour vous accompagner.",
                icon: ShieldCheck,
              },
              {
                name: "Flexibilité Totale",
                description: "Travaillez à votre rythme, sans contrainte horaire.",
                icon: Clock,
              },
              {
                name: "Rémunération Récurrente",
                description: "Gains potentiels sur la durée grâce à votre réseau.",
                icon: Zap,
              },
              {
                name: "Produits Demandés",
                description: "Vous proposez des services à forte valeur ajoutée.",
                icon: Award,
              },
            ].map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Documentation : Structure de Commissions */}
      <section id="commission-structure" className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wide">Transparence Totale</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Structure de Commissions Détaillée</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprenez exactement comment vous êtes rémunéré à chaque niveau de votre réseau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Niveau 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 p-3 rounded-full">
                    <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Niveau 1 (Ventes Directes)</h3>
              </div>
              <ul className="space-y-4">
                <CommissionItem label="Services de visa" value="25% de commission" />
                <CommissionItem label="Bourses scolaires" value="20% de commission" />
                <CommissionItem label="Accompagnement achat machines" value="15% du profit" />
                <CommissionItem label="Articles en gros" value="10% selon le volume" />
              </ul>
            </div>

            {/* Niveaux Indirects */}
            <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-gray-500" />
                        Niveau 2-10
                    </h3>
                     <p className="text-gray-600 font-medium text-lg">5% <span className="text-sm font-normal">sur toutes les ventes de vos filleuls directs...</span></p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                     <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-gray-400" />
                        Niveau 11-15
                    </h3>
                    <p className="text-gray-600 font-medium text-lg">3% <span className="text-sm font-normal">sur les ventes des filleuls de vos filleuls...</span></p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                     <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-gray-300" />
                        Niveau 16+
                    </h3>
                    <p className="text-gray-600 font-medium text-lg">1% <span className="text-sm font-normal">sur les ventes des filleuls</span></p>
                </div>
            </div>
          </div>

          {/* Bonus */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center sm:text-left">Bonus Spéciaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <BonusCard 
                    title="Bonus de Démarrage" 
                    value="50€" 
                    sub="après 3 premières ventes" 
                    icon={Zap}
                />
                 <BonusCard 
                    title="Bonus Mensuel" 
                    value="+ 5%" 
                    sub="si volume > 5000€" 
                    icon={TrendingUp}
                />
                 <BonusCard 
                    title="Bonus Leadership" 
                    value="2%" 
                    sub="sur le volume total de votre équipe" 
                    icon={Award}
                />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Prêt à commencez ?</h2>
            <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-bold px-10 py-6 h-auto shadow-xl text-lg rounded-full">
                    Rejoindre le Programme
                </Button>
            </Link>
        </div>
      </section>
    </div>
  );
}

function CommissionItem({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0 last:pb-0">
      <span className="text-gray-600">{label}</span>
      <span className="font-bold text-primary">{value}</span>
    </li>
  );
}

function BonusCard({ title, value, sub, icon: Icon }: { title: string; value: string; sub: string; icon: any }) {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-lg">{title}</h4>
            </div>
            <p className="text-4xl font-bold text-white mb-2">{value}</p>
            <p className="text-gray-300 text-sm">{sub}</p>
        </div>
    );
}

// Icon wrapper for features
function GraduationCapIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    )
}
