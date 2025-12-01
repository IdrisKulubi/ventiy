"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "Ventiy's anonymous groups let me vent about work stress without fear—finally, a space where I feel truly heard. The micro-groups connected me with others facing the same hustle, and it's reduced my isolation like nothing else.",
        name: "Sophie Kim",
        location: "Nairobi, KE",
    },
    {
        id: 2,
        quote: "The AI mood tracking reads my chaos perfectly and suggests color-coded tips that actually stick—like unlocking blue shades after a tough day to journal my wins. It's turned my emotional mess into a manageable, even beautiful journey.",
        name: "James Bennett",
        location: "Toronto, Canada",
    },
    {
        id: 3,
        quote: "I was skeptical about online therapy, but Ventiy's therapist directory made it so easy to find someone who understood my cultural background. Now I have regular sessions and feel supported in ways I never thought possible.",
        name: "Amara Okafor",
        location: "Lagos, Nigeria",
    },
    {
        id: 4,
        quote: "The color-coded emotional journey is genius! Seeing my progress visually through unlocked colors keeps me motivated to check in with myself daily. It's like a game, but for my mental health.",
        name: "Michael Chen",
        location: "Singapore",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 2 < 0 ? testimonials.length - 2 : prev - 2));
    };

    const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + 2);

    return (
        <section className="w-full bg-[#03352C] py-20 lg:py-28">
            <div className="max-w-[1440px] mx-auto px-6">

                {/* Section Header */}
                <h2 className="text-4xl lg:text-5xl font-bold text-[#EDAA02] mb-16 text-center lg:text-left">
                    What They Say About Us
                </h2>

                <div className="relative">
                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {displayedTestimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-black rounded-3xl p-8 lg:p-10 space-y-6"
                            >
                                {/* Quote Mark */}
                                <div className="text-[#EDAA02] text-6xl font-serif leading-none">"</div>

                                {/* Testimonial Text */}
                                <p className="text-white text-base lg:text-lg leading-relaxed">
                                    {testimonial.quote}
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-4">
                                    <div className="w-12 h-12 bg-white rounded-full"></div>
                                    <div>
                                        <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                                        <p className="text-[#EDAA02] text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons - Bottom Center */}
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-[#EAEAEA] transition-colors"
                            aria-label="Previous testimonials"
                        >
                            <ChevronLeft className="w-6 h-6 text-[#03352C]" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-[#EAEAEA] transition-colors"
                            aria-label="Next testimonials"
                        >
                            <ChevronRight className="w-6 h-6 text-[#03352C]" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
