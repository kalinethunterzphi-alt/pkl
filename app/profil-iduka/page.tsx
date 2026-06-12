import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { idukaPlaceholder } from "@/data/idukaPlaceholder";
import Image from "next/image";

export default function ProfilIDUKAPage() {
    return (
        <AnimatedSection>
        <Container className="py-24">
        <SectionHeading title="Profil IDUKA" subtitle="Tempat Praktik Kerja Lapangan" />
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8">
        <div className="w-32 h-32 mx-auto md:mx-0 relative rounded-xl overflow-hidden bg-neutral-100 border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">
        {idukaPlaceholder.logo ? (
            <Image src={idukaPlaceholder.logo} alt="Logo IDUKA" fill className="object-contain p-2" />
        ) : (
            <span className="text-xs">Logo</span>
        )}
        </div>
        <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-serif font-bold text-primary">{idukaPlaceholder.name}</h2>
        <p className="text-neutral-600">
        <span className="font-medium text-neutral-800">Bidang:</span> {idukaPlaceholder.field}
        </p>
        <p className="text-neutral-600">
        <span className="font-medium text-neutral-800">Alamat:</span> {idukaPlaceholder.address}
        </p>
        </div>
        </div>
        <div className="mt-8 space-y-4">
        <div>
        <h3 className="text-lg font-semibold text-primary">Deskripsi</h3>
        <p className="text-neutral-700">{idukaPlaceholder.description}</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
        <div>
        <h3 className="font-medium text-primary">Telepon</h3>
        <p className="text-neutral-600">{idukaPlaceholder.contact.phone}</p>
        </div>
        <div>
        <h3 className="font-medium text-primary">Email</h3>
        <p className="text-neutral-600">{idukaPlaceholder.contact.email}</p>
        </div>
        <div>
        <h3 className="font-medium text-primary">Website</h3>
        <p className="text-neutral-600">{idukaPlaceholder.contact.website}</p>
        </div>
        </div>
        <div>
        <h3 className="text-lg font-semibold text-primary">Catatan</h3>
        <p className="text-neutral-700 bg-neutral-50 p-4 rounded-lg italic">{idukaPlaceholder.notes}</p>
        </div>
        </div>
        </div>
        </Container>
        </AnimatedSection>
    );
}
