import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";

export default function PortofolioPage() {
    return (
        <AnimatedSection>
        <Container className="py-24">
        <SectionHeading title="Portofolio" subtitle="Hasil kerja dan dokumentasi" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {portfolioData.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition group">
            <div className="h-48 relative bg-neutral-100">
            {project.image ? (
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-400 text-sm">Gambar Proyek</div>
            )}
            </div>
            <div className="p-6">
            <h3 className="font-serif font-bold text-lg text-primary">{project.title}</h3>
            <p className="text-neutral-600 mt-2 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">
                {tag}
                </span>
            ))}
            </div>
            </div>
            </div>
        ))}
        </div>
        </Container>
        </AnimatedSection>
    );
}
