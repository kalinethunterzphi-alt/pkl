import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { schoolProfile } from "@/data/schoolProfile";

export default function ProfilSekolahPage() {
    return (
        <AnimatedSection>
        <Container className="py-24">
        <SectionHeading title="Profil Sekolah" subtitle={schoolProfile.name} />
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 md:p-12">
        <div className="space-y-6 text-neutral-700">
        <div>
        <h3 className="text-lg font-semibold text-primary">Alamat</h3>
        <p>{schoolProfile.address}</p>
        </div>
        <div className="flex flex-wrap gap-8">
        <div>
        <h3 className="text-lg font-semibold text-primary">Telepon</h3>
        <p>{schoolProfile.phone}</p>
        </div>
        <div>
        <h3 className="text-lg font-semibold text-primary">Email</h3>
        <p>{schoolProfile.email}</p>
        </div>
        </div>
        <div>
        <h3 className="text-lg font-semibold text-primary">Visi</h3>
        <p className="italic border-l-4 border-accent pl-4 py-2 bg-neutral-50 rounded-r-lg">{schoolProfile.vision}</p>
        </div>
        <div>
        <h3 className="text-lg font-semibold text-primary">Misi</h3>
        <ul className="list-disc list-inside space-y-1">
        {schoolProfile.missions.map((m, i) => (
            <li key={i}>{m}</li>
        ))}
        </ul>
        </div>
        </div>
        </div>
        </Container>
        </AnimatedSection>
    );
}
