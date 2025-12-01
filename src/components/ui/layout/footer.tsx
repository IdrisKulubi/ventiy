import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full">
            {/* Newsletter Section */}
            <div className="w-full bg-[#F5F5DC] py-16 lg:py-20">
                <div className="max-w-[1440px] mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#022721] mb-6">
                        Subscribe to Our Newsletter for Insights
                    </h2>
                    <p className="text-[#022721]/70 text-base lg:text-lg max-w-3xl mx-auto mb-8">
                        Join our weekly newsletter for anonymous vents from the community, AI-powered mood hacks, and gentle reminders that you're not alone. It's more than news—it's belonging, delivered with care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 rounded-lg bg-white border-none outline-none text-[#022721] placeholder:text-[#022721]/50"
                        />
                        <button className="px-8 py-4 bg-[#03352C] text-white rounded-lg font-semibold hover:bg-[#022721] transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full bg-[#EDAA02] py-16 lg:py-20 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/footer/footer.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Left Column: Branding */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/ventylogo.png"
                                    alt="Ventiy Logo"
                                    width={60}
                                    height={60}
                                    className="w-15 h-15"
                                />
                                <span className="text-3xl font-bold text-white">VENTIY</span>
                            </div>

                            <div className="space-y-4 max-w-md">
                                <p className="text-white text-lg leading-relaxed">
                                    Your Premier Haven for Anonymous Emotional Release. Where Feelings Find Freedom and Community Awaits.
                                </p>
                                <p className="text-white text-base">
                                    Empower Your Emotions, One Safe Vent at a Time.
                                </p>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex gap-4">
                                <Link href="#" className="w-10 h-10 bg-[#03352C] rounded-lg flex items-center justify-center hover:bg-[#022721] transition-colors">
                                    <Facebook className="w-5 h-5 text-white" />
                                </Link>
                                <Link href="#" className="w-10 h-10 bg-[#03352C] rounded-lg flex items-center justify-center hover:bg-[#022721] transition-colors">
                                    <Twitter className="w-5 h-5 text-white" />
                                </Link>
                                <Link href="#" className="w-10 h-10 bg-[#03352C] rounded-lg flex items-center justify-center hover:bg-[#022721] transition-colors">
                                    <Instagram className="w-5 h-5 text-white" />
                                </Link>
                                <Link href="#" className="w-10 h-10 bg-[#03352C] rounded-lg flex items-center justify-center hover:bg-[#022721] transition-colors">
                                    <Linkedin className="w-5 h-5 text-white" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="space-y-6">
                            <h3 className="text-3xl lg:text-4xl font-bold text-white">
                                Ready to Vent & Grow Together?
                            </h3>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-3 rounded-lg bg-white border-none outline-none text-[#022721] placeholder:text-[#022721]/50"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 rounded-lg bg-white border-none outline-none text-[#022721] placeholder:text-[#022721]/50"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full px-4 py-3 rounded-lg bg-white border-none outline-none text-[#022721] placeholder:text-[#022721]/50"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-white border-none outline-none text-[#022721] placeholder:text-[#022721]/50 resize-none"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-[#03352C] text-white rounded-lg font-semibold hover:bg-[#022721] transition-colors"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="w-full bg-black py-12">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
                            <nav className="flex flex-col space-y-2">
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    About Us
                                </Link>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    FAQ
                                </Link>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </nav>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
                            <nav className="flex flex-col space-y-2">
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </nav>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
                            <div className="flex flex-col space-y-2 text-white/70">
                                <a href="https://www.ventiy.org" className="hover:text-white transition-colors">
                                    www.ventiy.org
                                </a>
                                <a href="mailto:info@ventiy.org" className="hover:text-white transition-colors">
                                    info@ventiy.org
                                </a>
                                <a href="tel:+254702208093" className="hover:text-white transition-colors">
                                    +254 702-208-093
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
                        &copy; {new Date().getFullYear()} Ventiy. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
