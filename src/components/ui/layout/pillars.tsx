import Image from "next/image";
import { Users, Heart, Bot, MessageCircle } from "lucide-react";

export function Pillars() {
    return (
        <section className="relative w-full py-24 bg-[#03352C] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/pillars/pillarbg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-30"
                />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6">

                {/* Section Header */}
                <div className="flex items-center gap-4 mb-20">
                    <div className="h-[2px] w-12 bg-[#EDAA02]"></div>
                    <h2 className="text-[#EDAA02] text-2xl font-bold tracking-wide">Our Pillars</h2>
                </div>

                {/* Pillar 1: Anonymous Venting Communities */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-[#EDAA02]" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#EDAA02]">
                                Anonymous Venting<br />Communities
                            </h3>
                        </div>

                        <p className="text-white/90 text-base leading-relaxed mb-6">
                            Ventiy fosters safe, moderated spaces where users can vent freely without fear of exposure. Rage in micro-communities? Sure. In mood-based micro groups create an authentic sense of belonging and reduce isolation—imagine sharing a toxic relationship story with 50 strangers in silent allies overnight.
                        </p>

                        <ul className="space-y-3 text-white/80 text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Judgment-free venting hubs for raw, real talk</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Tailored micro-groups (e.g., PTSD, relationships) for targeted connection</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Builds lasting resilience through everyday empathy</span>
                            </li>
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src="/images/pillars/anonymity.png"
                                alt="Anonymous Venting Communities"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Pillar 2: Therapy & Wellness Integration */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32">
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-square w-full max-w-[400px] mx-auto">
                            <Image
                                src="/images/pillars/therapy.png"
                                alt="Therapy & Wellness Integration"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <Heart className="w-6 h-6 text-[#EDAA02]" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#EDAA02]">
                                Therapy & Wellness<br />Integration
                            </h3>
                        </div>

                        <p className="text-white/90 text-base leading-relaxed mb-6">
                            Beyond venting, Ventiy channels users to professional therapists, guided meditations, and self-care content aligned with their current emotional state. Not just emotional release and structured support, so a quick vent can turn into a full healing plan.
                        </p>

                        <ul className="space-y-3 text-white/80 text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Seamless therapist matching based on needs and location</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>On-demand meditations and self-care tools for instant calm</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Affordable entry to pros in underserved regions</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Pillar 3: AI Personalized Mood Magic */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <Bot className="w-6 h-6 text-[#EDAA02]" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#EDAA02]">
                                AI Personalized<br />Mood Magic
                            </h3>
                        </div>

                        <p className="text-white/90 text-base leading-relaxed mb-6">
                            Our AI-powered sentiment analysis to capture and interpret users' emotions in real time. By analyzing text, tone, and usage patterns, the platform delivers tailored insights and wellness recommendations—making your emotional state feel "seen" and validated. It's like getting a gentle nudge from an algorithm that understands you.
                        </p>

                        <ul className="space-y-3 text-white/80 text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Real-time emotion decoding from your words</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Custom prompts (e.g., "Journal this trigger") for proactive care</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Tracks patterns over time for deeper self-growth</span>
                            </li>
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src="/images/pillars/ai.png"
                                alt="AI Personalized Mood Magic"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Pillar 4: Color-Based Emotions */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-square w-full max-w-[400px] mx-auto">
                            <Image
                                src="/images/pillars/emotions.png"
                                alt="Color-Based Emotions"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 text-[#EDAA02]" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#EDAA02]">
                                Color-Based<br />Emotions
                            </h3>
                        </div>

                        <p className="text-white/90 text-base leading-relaxed mb-6">
                            Ventiy transforms emotional expression into a visual journey. Each emotion is represented by a unique color palette, and as users engage, they unlock colors—signifying their emotional diversity. This design is more than aesthetics—it's a gamified emotional tracking system that makes mental health engaging and rewarding. Think Duolingo for feelings, but way less annoying and way more cathartic. A user who vents regularly collects colors that tell a vibrant story of their resilience and growth, creating a seamless, rewarding, and visually captivating experience that resonates with digital natives.
                        </p>

                        <ul className="space-y-3 text-white/80 text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Unique emotion-to-color mapping system</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Gamified emotional journeys</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Unlockable color palettes as progress markers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#EDAA02] mt-1">•</span>
                                <span>Visually engaging, user-friendly design</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
