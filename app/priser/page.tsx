import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { PricingFaq } from "@/components/PricingFaq";
import { ReadyToHire } from "@/components/ReadyToHire";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Priser",
  description:
    "Fast månadsavgift utan dolda kostnader. Ingen inlåsning efter 6 månader. Från 14 900 kr/mån per AI-kollega.",
};

const plans = [
  {
    name: "Starter",
    price: "14 900 kr",
    period: "/mån",
    description: "Perfekt för att testa en AI-kollega i teamet",
    features: [
      "1 AI-kollega (Alice, Emma eller Axel)",
      "Mac Mini on-premises installation",
      "GDPR-säker datahantering",
      "Human-in-the-loop",
      "Grundläggande support",
      "Månadsrapporter",
    ],
  },
  {
    name: "Professional",
    price: "34 900 kr",
    period: "/mån",
    description: "För team som vill skala med flera AI-kollegor",
    features: [
      "Upp till 3 AI-kollegor",
      "Mac Mini on-premises installation",
      "GDPR-säker datahantering",
      "Human-in-the-loop",
      "Prioriterad support",
      "Veckorapporter & optimering",
      "Anpassade workflows",
      "Dedikerad kundansvarig",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Kontakta oss",
    period: "",
    description: "Skräddarsydda lösningar för större organisationer",
    features: [
      "Obegränsat antal AI-kollegor",
      "Skräddarsydd installation",
      "Enterprise säkerhetsgranskning",
      "Human-in-the-loop",
      "24/7 dedikerad support",
      "Realtidsrapporter",
      "Anpassade integrationer",
      "SLA-garantier",
    ],
  },
];

export default function PriserPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Priser"
        subtitle="Fast månadsavgift utan dolda kostnader. Ingen inlåsning efter 6 månader."
        backgroundImage="https://images.unsplash.com/photo-1548364504-57247d6f96bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />

      {/* Pricing Cards */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} {...plan} delay={index * 0.15} />
            ))}
          </div>
        </div>
      </div>

      <PricingFaq />
      <ReadyToHire />
      <Footer />
    </div>
  );
}
