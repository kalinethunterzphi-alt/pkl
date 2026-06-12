import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/ui/Container";
import { closingData } from "@/data/closing";

export default function PenutupPage() {
    return (
        <AnimatedSection>
        <Container className="py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-primary">{closingData.title}</h2>
        <div className="mt-10 text-neutral-700 leading-relaxed text-lg whitespace-pre-line">
        {closingData.message}
        </div>
        <div className="mt-12 p-6 bg-white rounded-xl border border-neutral-200 shadow-sm">
        <p className="text-neutral-600">{closingData.contact}</p>
        </div>
        </Container>
        </AnimatedSection>
    );
}
