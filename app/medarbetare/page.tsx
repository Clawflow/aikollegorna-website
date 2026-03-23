import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { DigitalWorkers } from "@/components/DigitalWorkers";
import { MeetWorkers } from "@/components/MeetWorkers";
import { ReadyToHire } from "@/components/ReadyToHire";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medarbetare",
  description:
    "Möt våra AI-kollegor: Alice (Content Manager), Emma (Social Media Manager) och Axel (B2B Sales). Mänskliga resultat, dygnet runt.",
};

export default function MedarbetarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Medarbetare"
        subtitle="Möt våra AI-kollegor som arbetar sida vid sida med ditt team"
        backgroundImage="https://images.unsplash.com/photo-1725025124058-3932f9216507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />
      <MeetWorkers />
      <DigitalWorkers />
      <ReadyToHire />
      <Footer />
    </div>
  );
}
