"use client";

import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    { id: 1, image: "/Instagram story - 1.png" },
    { id: 2, image: "/Instagram story - 2.png" },
    { id: 3, image: "/Instagram story - 3.png" },
    { id: 4, image: "/Instagram story - 4.png" },
    { id: 5, image: "/Instagram story - 8.png" },
    { id: 6, image: "/Instagram story - 9.png" },
  ];

  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          What our <span className="text-blue-400">Clients Say</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Nothing makes us happier than seeing our clients love their new spaces.
          Here’s what they have to say about their journey with us and how our
          designs made a difference.
        </p>
      </div>

      <div className="relative w-full max-w-7xl h-[650px] mx-auto">
        {testimonials.map((t, i) => {
          let style = "";
          let size = "";
          let z = "";
          let blur = false;

          switch (i) {
            case 0:
              style = "left-[3%]";
              size = "w-[260px] h-[400px] scale-90";
              z = "z-[4]";
              blur = true;
              break;
            case 1:
              style = "left-[15%]";
              size = "w-[300px] h-[460px] scale-95";
              z = "z-[10]";
              blur = true;
              break;
            case 2:
              style = "left-1/2 -translate-x-1/2";
              size = "w-[380px] h-[540px] scale-105";
              z = "z-[30]";
              break;
            case 3:
              style = "right-[15%]";
              size = "w-[300px] h-[460px] scale-95";
              z = "z-[10]";
              blur = true;
              break;
            case 4:
              style = "right-[3%]";
              size = "w-[260px] h-[400px] scale-90";
              z = "z-[4]";
              blur = true;
              break;
            case 5:
              style = "right-[10%]";
              size = "w-[240px] h-[380px] scale-90";
              z = "z-[2]";
              blur = true;
              break;
          }

          return (
            <div
              key={t.id}
              className={`absolute top-1/2 -translate-y-1/2 ${style} ${z} ${size} rounded-2xl overflow-hidden shadow-2xl transition-all duration-500`}
            >
              <Image
                src={t.image}
                alt={`testimonial-${t.id}`}
                fill
                className={`object-cover ${blur ? "opacity-90" : "opacity-100"}`}
              />
              {blur && (
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
