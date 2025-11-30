import { Navbar } from "@/components/ui/layout/navbar";
import { Hero } from "@/components/ui/layout/hero";
import Image from "next/image";

export default function Home() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#03352C]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero/herobg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                    priority
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#03352C]/90 to-[#03352C]/40" />
            </div>

            <Navbar />

            <Hero />

        </main>
    );
}