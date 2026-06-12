import HeroSection from "@/components/home/HeroSection";
import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { homeData } from "@/data/home";
import Link from "next/link";

export default function Home() {
    return (
        <>
        <HeroSection />
        <AnimatedSection>
        <Container className="py-24">
        <SectionHeading title="Tujuan PKL" subtitle="Mengapa Praktik Kerja Lapangan penting?" />
        <div className="grid md:grid-cols-3 gap-8 mt-10">
        {homeData.objectives.map((obj, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <span className="text-accent font-bold text-lg">{idx + 1}</span>
            </div>
            <p className="text-neutral-700">{obj}</p>
            </div>
        ))}
        </div>
        </Container>
        </AnimatedSection>

        <AnimatedSection className="bg-white">
        <Container className="py-24">
        <SectionHeading title="Manfaat PKL" subtitle="Apa yang saya dapatkan?" />
        <div className="grid md:grid-cols-3 gap-8 mt-10">
        {homeData.benefits.map((benefit, idx) => (
            <div key={idx} className="text-center p-6">
            <div className="text-4xl mb-4">✨</div>
            <p className="text-neutral-700 font-medium">{benefit}</p>
            </div>
        ))}
        </div>
        </Container>
        </AnimatedSection>

        <AnimatedSection>
        <Container className="py-24 text-center">
        <h2 className="text-2xl font-serif font-bold text-primary">Jelajahi Lebih Lanjut</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link href="/profil-iduka" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition">
        Profil IDUKA
        </Link>
        <Link href="/kompetensi" className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
        Kompetensi
        </Link>
        <Link href="/portofolio" className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
        Portofolio
        </Link>
        </div>
        </Container>
        </AnimatedSection>
        </>
    );
}
