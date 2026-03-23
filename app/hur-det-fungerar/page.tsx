import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { ReadyToHire } from "@/components/ReadyToHire";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hur det fungerar",
  description:
    "Tre steg till din första AI-kollega: Konsultation, Installation, Löpande optimering. Aktiv inom 2 veckor, allt on-premises.",
};

export default function HurDetFungerarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Hur det fungerar"
        subtitle="En enkel process som tar dig från idé till fungerande AI-kollega på under en månad"
        backgroundImage="https://images.unsplash.com/photo-1637218047721-27f1892e2e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />
      <HowItWorks />
      <Features />
      <ReadyToHire />
      <Footer />
    </div>
  );
}
