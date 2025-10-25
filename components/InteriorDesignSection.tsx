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
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-visible pt-[2vw] pb-[2vw]">
      {/* dotted background image */}
      <div className="absolute top-0 left-0 w-[3vw] h-[3vw] opacity-20 z-10">
        <Image
          src="/gridsection/Dot.png"
          alt="Dotted Pattern"
          fill
          className="object-contain"
        />
      </div>

      <div className="w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[2vw] items-center">
        {/* Left image section */}
        <div className="relative order-2 lg:order-1 w-full">
          <div className="grid grid-cols-2 gap-[0.6vw]">
            <div className="space-y-[0.6vw] translate-y-[3vw]"> {/* moved further down */}
              <div className="relative aspect-[4/6] rounded-l-[0.8vw] overflow-hidden scale-[1.1]"> {/* bigger and taller with left corners rounded */}
                <Image
                  src="/gridsection/img-grid-1 1.png"
                  alt="Interior 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-[0.6vw] pt-[1vw]">
              <div className="relative aspect-[3/4] rounded-[0.6vw] overflow-hidden">
                <Image
                  src="/gridsection/img-grid-2 1.png"
                  alt="Interior 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-[0.6vw] overflow-hidden">
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

        {/* Right text & sofa section */}
        <div className="relative order-1 lg:order-2 w-full">
          <h2 className="text-[1.8vw] font-semibold text-gray-900 leading-tight">
            We help you make
            <br />
            <span className="text-gray-900">Modern Interior Design</span>
          </h2>

          <p className="text-[0.8vw] text-gray-600 my-[1.2vw] leading-relaxed max-w-[30vw]">
            Transform your space into a reflection of your style. Our modern interior
            design approach brings harmony, texture, and creativity together to make
            every corner feel fresh, inviting, and uniquely yours.
          </p>

          <div className="grid grid-cols-2 gap-[0.5vw] mb-[1.5vw]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-[0.3vw]">
                <div className="bg-gray-900 flex items-center justify-center rounded-full w-[1vw] h-[1vw] mt-[0.1vw] flex-shrink-0">
                  <Check className="text-white w-[0.5vw] h-[0.5vw]" />
                </div>
                <span className="text-gray-700 text-[0.75vw]">{feature}</span>
              </div>
            ))}
          </div>

          <Button className="bg-gray-900 hover:bg-gray-800 text-white text-[0.8vw] px-[1.2vw] py-[0.6vw] rounded-full">
            Explore
          </Button>

          {/* Sofa — repositioned for compact section */}
          <div className="absolute bottom-[-20vw] right-[-2vw] w-[25vw] h-[25vw] z-10"> 
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
