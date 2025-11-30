import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-[1280px] mx-auto w-full">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <Image
                        src="/ventylogo.png"
                        alt="Ventiy Logo"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                    />
                </div>
                <span className="text-2xl font-bold text-white tracking-wide">VENTIY</span>
            </div>

            {/* Navigation Links */}
            {/* Navigation Links */}
            <div className="hidden md:flex items-center">
                <div className="flex items-center gap-8">
                    <Link href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                        About
                    </Link>
                    <Link href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                        Features
                    </Link>
                    <Link href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                        Community
                    </Link>
                </div>

                <Button
                    className="ml-12 bg-[#EDAA02] hover:bg-[#d99b02] text-white rounded-xl px-6 py-2 font-semibold transition-all"
                >
                    Join
                </Button>
            </div>
        </nav>
    );
}
