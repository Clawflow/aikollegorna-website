import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { CaseStudies } from "@/components/CaseStudies";
import { Industries } from "@/components/Industries";
import { ReadyToHire } from "@/components/ReadyToHire";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kundcase",
  description:
    "Se hur våra kunder använder AI-kollegor för att växa och effektivisera. Verkliga resultat från svenska företag.",
};

export default function KundcasePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Kundcase"
        subtitle="Se hur våra kunder använder AI-kollegor för att växa och effektivisera"
        backgroundImage="https://images.unsplash.com/photo-1596800990083-ad117c8eae6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />
      <CaseStudies />
      <Industries />
      <ReadyToHire />
      <Footer />
    </div>
  );
}
