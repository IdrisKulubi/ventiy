import Image from "next/image";

export function HeartOfVenting() {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">

                    {/* Left Column: Text Content */}
                    <div className="w-full lg:w-[35%] space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#EDAA02] leading-tight">
                            THE HEART OF VENTING,<br />
                            REIMAGINED
                        </h2>

                        <p className="text-[#022721] text-base lg:text-lg leading-relaxed">
                            Ventiy keeps things simple and safe. Wish short, focused posts and smart filters, you can express how you truly feel—without judgment, likes, or comments. No pressure, no performative energy—just you, your thoughts, and instant emotional clarity.
                        </p>
                    </div>

                    {/* Right Column: Phone Composition Image */}
                    <div className="w-full lg:w-[65%] flex items-center justify-center">
                        <div className="relative w-full h-[600px] lg:h-[700px]">
                            <Image
                                src="/images/heart/hert1.png"
                                alt="The Heart of Venting - App Preview"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
