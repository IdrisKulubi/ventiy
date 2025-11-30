import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function About() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6">

                {/* Header */}
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-[2px] w-12 bg-[#03352C]"></div>
                    <h2 className="text-[#03352C] text-2xl font-bold tracking-wide">About Ventiy</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Column: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-[40px]">
                            <Image
                                src="/images/about/about.jpg"
                                alt="About Ventiy - Mental Wellness"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">

                        {/* Main Headline */}
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#03352C] leading-tight">
                            Release What You Feel. <br />
                            Heal Where You Are.
                        </h3>

                        {/* Description Paragraphs */}
                        <div className="space-y-6 text-[#022721]/80 text-base leading-relaxed">
                            <p>
                                <span className="text-[#03352C] font-semibold">Ventiy:</span> Where Emotions Find a Home Reimagine release in a judgment-free zone. AI insights, personalized tips, and supportive communities empower you to feel seen and strong—especially where therapy feels out of reach.
                            </p>
                            <p>
                                <span className="font-semibold">Trapped in Silence?</span> Mental health crises surge worldwide, but safe outlets? Rare. Therapy's too costly or absent; social media? Judgment city. Result: Millions bottle up pain, fueling isolation and burnout.
                            </p>
                            <p>
                                <span className="font-semibold">Unlock Your Peace with Ventiy</span> Anonymous venting + AI mood magic + color-coded emotional journeys. Connect in peer groups, bridge to therapists—turn release into real healing, one breath at a time.
                            </p>
                        </div>

                        {/* Accordion - FAQ Style */}
                        <div className="mt-8">
                            <Accordion type="single" collapsible className="w-full space-y-2">
                                <AccordionItem value="item-1" className="border-b border-[#EAEAEA] pb-4">
                                    <AccordionTrigger className="text-[#03352C] text-lg font-normal hover:text-[#03352C] hover:no-underline py-0 gap-4">
                                        AI driven Emotional Insights
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#022721]/70 text-base pt-4">
                                        Gain deeper understanding of your emotional patterns through advanced AI analysis that helps you recognize triggers and growth opportunities.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="border-b border-[#EAEAEA] pb-4">
                                    <AccordionTrigger className="text-[#03352C] text-lg font-normal hover:text-[#03352C] hover:no-underline py-0 gap-4">
                                        Personalized Wellness Recommendations
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#022721]/70 text-base pt-4">
                                        Receive tailored wellness tips, exercises, and resources based on your unique emotional state and personal journey.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="border-b border-[#EAEAEA] pb-4">
                                    <AccordionTrigger className="text-[#03352C] text-lg font-normal hover:text-[#03352C] hover:no-underline py-0 gap-4">
                                        Community Support Spaces
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#022721]/70 text-base pt-4">
                                        Connect with others who share similar experiences in safe, anonymous, and moderated community spaces.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4" className="border-b border-[#EAEAEA] pb-4">
                                    <AccordionTrigger className="text-[#03352C] text-lg font-normal hover:text-[#03352C] hover:no-underline py-0 gap-4">
                                        Connect With Therapists
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#022721]/70 text-base pt-4">
                                        Easily find and connect with licensed mental health professionals when you need additional support.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
