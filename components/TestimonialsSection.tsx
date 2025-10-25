"use client";

import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Carolyn Millena",
      position: "Interior Designer",
      image: "/Instagram story - 1.png",
      isCenter: false,
      size: "small",
      layer: 3,
    },
    {
      id: 2,
      name: "Simon Árpád",
      position: "Home Owner",
      image: "/Instagram story - 2.png",
      isCenter: false,
      size: "medium",
      layer: 2,
    },
    {
      id: 3,
      name: "Anthony Behringer",
      position: "Senior Research Manager",
      image: "/Instagram story - 3.png",
      isCenter: true,
      size: "large",
      layer: 1,
    },
    {
      id: 4,
      name: "Francis Towne",
      position: "Architect",
      image: "/Instagram story - 4.png",
      isCenter: false,
      size: "medium",
      layer: 2,
    },
    {
      id: 5,
      name: "Gleason",
      position: "Designer",
      image: "/Instagram story - 8.png",
      isCenter: false,
      size: "small",
      layer: 3,
    },
    {
      id: 6,
      name: "Stacey Prosacco",
      position: "Customer",
      image: "/Instagram story - 9.png",
      isCenter: false,
      size: "small",
      layer: 4,
    },
    {
      id: 7,
      name: "Customer",
      position: "Happy Client",
      image: "/Instagram story - 10.png",
      isCenter: false,
      size: "small",
      layer: 4,
    },
  ];

  const getCardStyles = (testimonial: any, index: number) => {
    const baseStyles = "absolute bg-white rounded-lg shadow-lg transition-all duration-300";
    const opacityStyles: { [key: number]: string } = {
      1: "opacity-100",
      2: "opacity-80", 
      3: "opacity-60",
      4: "opacity-40"
    };

    // Define positions for each card
    const positions = [
      { left: "left-0", top: "top-1/2 -translate-y-1/2", size: "w-32 h-40", z: "z-0" }, // Far left - Carolyn
      { left: "left-16", top: "top-1/2 -translate-y-1/2", size: "w-40 h-48", z: "z-10" }, // Left medium - Simon
      { left: "left-1/2 -translate-x-1/2", top: "top-1/2 -translate-y-1/2", size: "w-48 h-56", z: "z-20" }, // Center - Anthony
      { left: "right-16", top: "top-1/2 -translate-y-1/2", size: "w-40 h-48", z: "z-10" }, // Right medium - Francis
      { left: "right-0", top: "top-1/2 -translate-y-1/2", size: "w-32 h-40", z: "z-0" }, // Far right - Gleason
      { left: "left-8", top: "top-1/2 -translate-y-1/2", size: "w-28 h-36", z: "z-5" }, // Behind left medium - Stacey
      { left: "right-8", top: "top-1/2 -translate-y-1/2", size: "w-28 h-36", z: "z-5" }, // Behind right medium - Customer
    ];

    const position = positions[index] || positions[0];
    
    return `${baseStyles} ${position.left} ${position.top} ${position.size} ${position.z} ${opacityStyles[testimonial.layer] || "opacity-100"}`;
  };

  return (
    <section className='py-12 sm:py-16 lg:py-20 bg-gray-100 relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='text-center mb-10 sm:mb-12 lg:mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4'>
            What our <span className='text-blue-400'>Clients Say</span>
          </h2>
          <p className='text-sm sm:text-base text-gray-600 max-w-5xl mx-auto px-4'>
            Nothing makes us happier than seeing our clients love their new
            spaces. Here&apos;s what they have to say about their journey with us and
            how our designs made a difference.
          </p>
        </div>

        <div className='relative'>
          <div className='flex justify-center items-center'>
            <div className='relative w-full max-w-7xl h-[600px] sm:h-[700px]'>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={getCardStyles(testimonial, index)}
                >
                  <div className='p-2 h-full flex flex-col items-center justify-center'>
                    {/* Image */}
                    <div className='relative w-full h-full rounded-lg overflow-hidden'>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
