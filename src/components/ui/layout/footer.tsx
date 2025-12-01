import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-[#022721] text-white py-16">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                    {/* Column 1: Branding */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/ventylogo.png"
                                    alt="Ventiy Logo"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold text-white">VENTIY</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                            Your safe space for emotional wellness. Anonymous venting, AI-driven insights, and pathways to professional care.
                        </p>
                        <div className="text-white/50 text-sm">
                            &copy; {new Date().getFullYear()} Ventiy. All rights reserved.
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <nav className="flex flex-col space-y-3">
                            <Link href="#" className="text-white/70 hover:text-[#EDAA02] transition-colors text-sm">
                                About Us
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-[#EDAA02] transition-colors text-sm">
                                Features
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-[#EDAA02] transition-colors text-sm">
                                Community
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-[#EDAA02] transition-colors text-sm">
                                Therapist Directory
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-[#EDAA02] transition-colors text-sm">
                                Pricing
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-[#EDAA02] transition-colors text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-[#EDAA02] transition-colors text-sm">
                                Terms of Service
                            </Link>
                        </nav>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
                        <div className="flex flex-col space-y-4 text-sm">
                            <div className="space-y-2">
                                <p className="text-white/70">Email:</p>
                                <a href="mailto:support@ventiy.com" className="text-white hover:text-[#EDAA02] transition-colors">
                                    support@ventiy.com
                                </a>
                            </div>
                            <div className="space-y-2">
                                <p className="text-white/70">Crisis Support:</p>
                                <a href="tel:988" className="text-white hover:text-[#EDAA02] transition-colors">
                                    988 - Suicide & Crisis Lifeline
                                </a>
                            </div>
                            <div className="space-y-2">
                                <p className="text-white/70">Follow Us:</p>
                                <div className="flex gap-4">
                                    <Link href="#" className="text-white/70 hover:text-[#EDAA02] transition-colors">
                                        Twitter
                                    </Link>
                                    <Link href="#" className="text-white/70 hover:text-[#EDAA02] transition-colors">
                                        Instagram
                                    </Link>
                                    <Link href="#" className="text-white/70 hover:text-[#EDAA02] transition-colors">
                                        Facebook
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
