import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ReadyToHire } from "@/components/ReadyToHire";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Vi hjälper små och medelstora företag att växa med AI-kollegor. Svenskt bolag, GDPR-first, all data on-premises.",
};

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Om oss"
        subtitle="Vi hjälper små och medelstora företag att växa med AI-kollegor"
        backgroundImage="https://images.unsplash.com/photo-1767536473007-cb68dfe57ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />
      <AboutSection />
      <ValuesSection />
      <TeamSection />
      <ReadyToHire />
      <Footer />
    </div>
  );
}
