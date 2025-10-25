"use client";

import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Carolyn Millena",
      position: "Interior Designer",
      image: "/Instagram story - 1.png",
      rating: 5,
      text: "The furniture quality exceeded my expectations. Perfect for our modern home!",
      isCenter: false,
      size: "small",
      layer: 3,
    },
    {
      id: 2,
      name: "Simon Árpád",
      position: "Home Owner",
      image: "/Instagram story - 2.png",
      rating: 5,
      text: "Excellent craftsmanship and beautiful design. Highly recommended!",
      isCenter: false,
      size: "medium",
      layer: 2,
    },
    {
      id: 3,
      name: "Anthony Behringer",
      position: "Senior Research Manager",
      image: "/Instagram story - 3.png",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed.",
      isCenter: true,
      size: "large",
      layer: 1,
    },
    {
      id: 4,
      name: "Francis Towne",
      position: "Architect",
      image: "/Instagram story - 4.png",
      rating: 5,
      text: "Outstanding service and beautiful furniture. Made our space perfect!",
      isCenter: false,
      size: "medium",
      layer: 2,
    },
    {
      id: 5,
      name: "Gleason",
      position: "Designer",
      image: "/Instagram story - 8.png",
      rating: 5,
      text: "Amazing quality and design. Love every piece we purchased!",
      isCenter: false,
      size: "small",
      layer: 3,
    },
    {
      id: 6,
      name: "Stacey Prosacco",
      position: "Customer",
      image: "/Instagram story - 9.png",
      rating: 5,
      text: "Perfect furniture for our living room. Great experience!",
      isCenter: false,
      size: "small",
      layer: 4,
    },
    {
      id: 7,
      name: "Customer",
      position: "Happy Client",
      image: "/Instagram story - 10.png",
      rating: 5,
      text: "Beautiful furniture that transformed our home completely!",
      isCenter: false,
      size: "small",
      layer: 4,
    },
  ];

  const getCardStyles = (testimonial: any, index: number) => {
    const baseStyles = "absolute bg-white rounded-lg shadow-lg transition-all duration-300";
    const opacityStyles = {
      1: "opacity-100",
      2: "opacity-80",
      3: "opacity-60",
      4: "opacity-40"
    };

    if (testimonial.isCenter) {
      return `${baseStyles} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 z-10 ${opacityStyles[testimonial.layer]}`;
    }

    const positions = [
      { left: "left-0", top: "top-1/2 -translate-y-1/2", size: "w-48 h-64" }, // Left small
      { left: "left-8", top: "top-1/2 -translate-y-1/2", size: "w-56 h-72" }, // Left medium
      { left: "left-1/2 -translate-x-1/2", top: "top-1/2 -translate-y-1/2", size: "w-80 h-96" }, // Center
      { left: "right-8", top: "top-1/2 -translate-y-1/2", size: "w-56 h-72" }, // Right medium
      { left: "right-0", top: "top-1/2 -translate-y-1/2", size: "w-48 h-64" }, // Right small
      { left: "left-4", top: "top-1/2 -translate-y-1/2", size: "w-40 h-56", z: "z-0" }, // Far left
      { left: "right-4", top: "top-1/2 -translate-y-1/2", size: "w-40 h-56", z: "z-0" }, // Far right
    ];

    const position = positions[index] || positions[0];
    const zIndex = position.z || `z-${testimonial.layer}`;
    
    return `${baseStyles} ${position.left} ${position.top} ${position.size} ${zIndex} ${opacityStyles[testimonial.layer]}`;
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
            spaces. Here's what they have to say about their journey with us and
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
                  <div className='p-4 sm:p-6 h-full flex flex-col'>
                    {/* Testimonial badge for center card */}
                    {testimonial.isCenter && (
                      <div className='flex items-center gap-2 mb-4'>
                        <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                        <span className='text-xs text-gray-600 font-medium'>Testimonial</span>
                      </div>
                    )}

                    {/* Image */}
                    <div className='relative mb-4 flex-shrink-0'>
                      <div className={`${testimonial.isCenter ? 'w-24 h-24' : 'w-16 h-16'} mx-auto rounded-full overflow-hidden`}>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={testimonial.isCenter ? 96 : 64}
                          height={testimonial.isCenter ? 96 : 64}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className='flex justify-center gap-1 mb-3'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className={`${testimonial.isCenter ? 'w-4 h-4' : 'w-3 h-3'} text-blue-600 fill-current`}
                          viewBox='0 0 20 20'
                        >
                          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <div className={`flex-1 ${testimonial.isCenter ? 'bg-blue-600 text-white rounded-lg p-4' : ''}`}>
                      <p className={`${testimonial.isCenter ? 'text-sm' : 'text-xs'} leading-relaxed mb-3 ${testimonial.isCenter ? 'text-white' : 'text-gray-600'}`}>
                        {testimonial.text}
                      </p>
                    </div>

                    {/* Name and Position */}
                    <div className={`${testimonial.isCenter ? 'bg-blue-600 text-white rounded-lg p-4 -mt-2' : ''}`}>
                      <h4 className={`font-semibold ${testimonial.isCenter ? 'text-sm text-white' : 'text-xs text-gray-900'}`}>
                        {testimonial.name}
                      </h4>
                      <p className={`${testimonial.isCenter ? 'text-xs text-blue-100' : 'text-xs text-gray-500'}`}>
                        {testimonial.position}
                      </p>
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
