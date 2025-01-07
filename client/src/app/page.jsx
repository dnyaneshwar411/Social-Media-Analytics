import Image from "next/image";
import Header from "@/components/home/header";
import Features from "@/components/home/feature";
import Footer from "@/components/home/footer";
import SocialProof from "@/components/home/SocialProof";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/hero";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
