import { Navbar } from "@/components/ui/layout/navbar";
import { Hero } from "@/components/ui/layout/hero";
import { About } from "@/components/ui/layout/about";
import { Pillars } from "@/components/ui/layout/pillars";
import { Footer } from "@/components/ui/layout/footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Pillars />
            <Footer />
        </>
    );
}