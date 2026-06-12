import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { competenceData } from "@/data/competenceData";
import Image from "next/image";

export default function KompetensiPage() {
    return (
        <AnimatedSection>
        <Container className="py-24">
        <SectionHeading title="Kompetensi" subtitle="Keahlian yang saya kuasai" />
        <div className="grid md:grid-cols-2 gap-10 mt-12">
        {competenceData.map((comp) => (
            <div
            key={comp.id}
            className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition flex flex-col"
            >
            {comp.image && (
                <div className="h-48 relative">
                <Image src={comp.image} alt={comp.title} fill className="object-cover" />
                </div>
            )}
            <div className="p-6 flex flex-col flex-1">
            <div className="flex items-start justify-between">
            <h3 className="text-xl font-serif font-bold text-primary">{comp.title}</h3>
            {comp.highlight && (
                <span className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                {comp.highlight}
                </span>
            )}
            </div>
            <p className="mt-3 text-neutral-600 flex-1">{comp.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
            {comp.skills.map((skill) => (
                <li key={skill} className="bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full">
                {skill}
                </li>
            ))}
            </ul>
            </div>
            </div>
        ))}
        </div>
        </Container>
        </AnimatedSection>
    );
}
