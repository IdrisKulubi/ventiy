import { Navbar } from "@/components/ui/layout/navbar";
import { Hero } from "@/components/ui/layout/hero";
import { About } from "@/components/ui/layout/about";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
        </>
    );
}