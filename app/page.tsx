import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MeetWorkers } from "@/components/MeetWorkers";
import { DigitalWorkers } from "@/components/DigitalWorkers";
import { Industries } from "@/components/Industries";
import { HowItWorks } from "@/components/HowItWorks";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { ReadyToHire } from "@/components/ReadyToHire";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative">
        <Hero />
        <ScrollingBanner />
      </div>
      <MeetWorkers />
      <DigitalWorkers />
      <Industries />
      <HowItWorks />
      <ReadyToHire />
      <Footer />
    </div>
  );
}
