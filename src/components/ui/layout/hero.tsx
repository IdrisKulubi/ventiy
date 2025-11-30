import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#03352C]">
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

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-[1440px] mx-auto px-6 pt-24 lg:pt-32 pb-24 h-full">

                {/* Left Column: Text Content */}
                <div className="w-full lg:w-[45%] flex flex-col gap-10 text-center lg:text-left z-20">
                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight">
                            <span className="text-[#EDAA02] block">Stay Anonymous.</span>
                            <span className="text-[#EDAA02] block">Stay Secure.</span>
                        </h1>

                        <p className="text-lg lg:text-2xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                            <span className="text-[#EDAA02] font-semibold">Ventiy</span> is a mental wellness platform that reimagines how people release and process emotions. We provide a safe, anonymous space for individuals to express themselves freely, without fear or judgment.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-start pt-4">
                        <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105">
                            {/* CTA Button Image */}
                            <Image
                                src="/images/hero/cta.png"
                                alt="Unlock Your Peace with Ventiy!"
                                width={420}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Hero Images (Phones) */}
                <div className="w-full lg:w-[55%] flex justify-center lg:justify-end mt-12 lg:mt-0 relative z-10">
                    {/* Adjusted positioning to ensure phones are not cut off */}
                    <div className="relative w-[350px] h-[600px] lg:w-[750px] lg:h-[950px] lg:-mt-10 lg:mr-0">
                        <Image
                            src="/images/hero/phones.png"
                            alt="Ventiy App Interface"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
