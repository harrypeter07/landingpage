"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export function InteriorDesignSection() {
  const features = [
    "Modern, Elegant Furniture Designs",
    "Tailored to Your Space",
    "Crafted for Comfort & Style",
    "Premium Quality, Lasting Durability",
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-visible pt-[5vw] pb-[3vw] md:pt-[4vw] md:pb-[2vw]">
      {/* dotted background */}
      <div className="absolute top-[0.5vw] left-[0.5vw] w-[35vw] h-[35vw] md:w-[10vw] md:h-[10vw] opacity-100">
        <Image
          src="/gridsection/Dot.png"
          alt="Dotted Pattern"
          fill
          className="object-contain pointer-events-none select-none"
        />
      </div>

      <div className="w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4vw] items-center">
        {/* Left image grid */}
        <div className="relative order-2 lg:order-1 w-full flex justify-center md:justify-start">
          <div className="grid grid-cols-2 gap-[2vw] lg:gap-[4vw] relative">
            {/* First image */}
            <div className="space-y-[1vw] translate-y-[2vw] sm:translate-y-[3vw]">
              <div className="relative aspect-[4/6] rounded-l-[1vw] overflow-hidden scale-[1.05] w-[26vw] sm:w-[40vw] md:w-[32vw] mx-auto">
                <Image
                  src="/gridsection/img-grid-1 1.png"
                  alt="Interior 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Second + third stacked images */}
            <div className="space-y-[1vw] pt-[2vw] relative">
              {/* Second grid image */}
              <div className="relative aspect-square rounded-xl overflow-hidden w-[10vw] sm:w-[22vw] md:w-[16vw] lg:w-[14vw] mx-auto lg:mr-[-5vw]">
                <Image
                  src="/gridsection/img-grid-2 1.png"
                  alt="Interior 2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third grid image */}
              <div
                className="
                  absolute 
                  right-[-1vw] 
                  bottom-[-5vw] 
                  sm:right-[-2vw] 
                  sm:bottom-[-6vw] 
                  md:right-[3vw] 
                  md:bottom-[3vw] 
                  lg:right-[-1vw] 
                  lg:bottom-[-5vw]
                  aspect-[3/4] 
                  rounded-[0.6vw] 
                  overflow-hidden 
                  w-[18vw] sm:w-[28vw] md:w-[20vw] lg:w-[22vw]
                  z-[100]
                "
              >
                <Image
                  src="/gridsection/img-grid-3 1.png"
                  alt="Interior 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right text and sofa */}
        <div className="relative order-1 lg:order-2 w-full pl-[5vw] sm:pl-[8vw] md:pl-[6vw]">
          <h2 className="text-[3vw] md:text-[2vw] font-semibold text-gray-900 leading-tight mb-[2vw]">
            We help you make
            <br />
            <span className="text-gray-900">Modern Interior Design</span>
          </h2>

          <p className="text-[1.2vw] md:text-[0.9vw] text-gray-600 mb-[3vw] leading-relaxed max-w-[38vw] sm:max-w-[70vw]">
            Transform your space into a reflection of your style. Our modern interior
            design approach brings harmony, texture, and creativity together to make
            every corner feel fresh, inviting, and uniquely yours.
          </p>

          <div className="grid grid-cols-2 gap-y-[1.5vw] gap-x-[1vw] mb-[3vw]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-[0.6vw]">
                <div className="bg-gray-900 flex items-center justify-center rounded-full w-[1.3vw] h-[1.3vw] flex-shrink-0">
                  <Check className="text-white w-[0.6vw] h-[0.6vw]" />
                </div>
                <span className="text-gray-700 text-[1vw] md:text-[0.8vw] leading-[1.3]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Button className="bg-gray-900 hover:bg-gray-800 text-white text-[1vw] md:text-[0.85vw] px-[2vw] py-[1vw] rounded-full">
            Explore
          </Button>

          {/* Sofa image */}
          <div className="absolute bottom-[-10vw] right-[-5vw] w-[25vw] h-[25vw] z-[100]">
            <Image
              src="/gridsection/sofa 1.png"
              alt="Sofa"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
