import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { BlogPostCard } from "@/components/BlogPostCard";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blogg",
  description:
    "Insikter och nyheter om AI, automation och framtidens arbetsplats. Läs våra senaste artiklar.",
};

const blogPosts = [
  {
    title: "Så förändrar AI-kollegor svenska SME:ers vardag",
    excerpt:
      "Allt fler svenska företag inser att AI inte bara är för storbolagen. Läs om hur småföretag använder AI-kollegor för att frigöra tid och skapa bättre resultat.",
    date: "15 mars 2026",
    category: "AI & Automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "On-premises vs Cloud: Varför vi valde lokal AI",
    excerpt:
      "Datasäkerhet är inte förhandlingsbart. Vi förklarar varför on-premises AI är det enda rätta för svenska företag som värnar om GDPR.",
    date: "8 mars 2026",
    category: "Säkerhet",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "5 uppgifter du borde delegera till en AI-kollega idag",
    excerpt:
      "Från content-skapande till lead-uppföljning — här är fem konkreta uppgifter där AI-kollegor levererar bäst.",
    date: "1 mars 2026",
    category: "Tips & Tricks",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Human-in-the-loop: Varför AI behöver människor",
    excerpt:
      "AI är kraftfullt, men det behöver mänsklig övervakning. Läs om hur vi säkerställer kvalitet med human-in-the-loop.",
    date: "22 feb 2026",
    category: "AI & Automation",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Framtidens B2B-försäljning drivs av AI",
    excerpt:
      "Möt Axel, vår AI-säljare som engagerar prospects, bokar möten och bygger pipeline — medan du fokuserar på att stänga affärer.",
    date: "15 feb 2026",
    category: "Försäljning",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Så mäter du ROI på din AI-kollega",
    excerpt:
      "Konkreta tips för att mäta och följa upp effekten av dina AI-kollegor. Från tidsbesparingar till ökad omsättning.",
    date: "8 feb 2026",
    category: "Strategi",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

export default function BloggPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Blogg"
        subtitle="Insikter och nyheter om AI, automation och framtidens arbetsplats"
        backgroundImage="https://images.unsplash.com/photo-1708718322180-3c57a5683b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />

      {/* Blog Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={post.title} {...post} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>

      <CTA />
      <Footer />
    </div>
  );
}
