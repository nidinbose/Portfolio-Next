'use client'; // If using Next.js 13+ app directory

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { RiGeminiFill } from "react-icons/ri";

interface Service {
  service: string;
  img: string;
}

const arr: Service[] = [
  {
    service: "Website Development",
    img: "https://erepublic.brightspotcdn.com/dims4/default/d5f1ca5/2147483647/strip/false/crop/940x627+0+0/resize/940x627!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2Fe6%2F75%2Fd935c402851254764ef700039a55%2Fshutterstock-592315250.jpg"
  },
  {
    service: "Application Development",
    img: "https://cbx-prod.b-cdn.net/COLOURBOX38115547.jpg?width=800&height=800&quality=70"
  },
  {
    service: "UI/UX Designing",
    img: "https://miro.medium.com/v2/resize:fit:1400/0*0KTNLqYj4p8C_skP"
  },
  {
    service: "Graphic Designing",
    img: "https://cbx-prod.b-cdn.net/COLOURBOX30772913.jpg?width=800&height=800&quality=70"
  }
];

export default function Services(): JSX.Element {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const directions = ['fade-left', 'fade-right', 'fade-up', 'fade-down'];

  return (
    <div className="min-h-full flex flex-col items-center justify-start pt-16 px-4 md:px-8 lg:px-16">
      {/* Header Text */}
      <h1 data-aos="fade-down" className="text-5xl sm:text-7xl md:text-[80px] lg:text-[120px] xl:text-[150px] font-bold text-black text-center tracking-tight leading-none sea">
        SERVICES
      </h1>
      <h1 data-aos="fade-up" className="text-5xl sm:text-7xl md:text-[80px] lg:text-[120px] xl:text-[150px] font-bold text-[#b5ff6d] text-center tracking-tight mt-6 leading-none sea opacity-20">
        SERVICES
      </h1>

      {/* Services Card */}
      <div data-aos="fade-up" className="relative w-full bg-white/60 rounded-3xl p-6 sm:p-8 md:p-12 mt-[-6px] shadow-xl z-20 mt-10">
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {arr.map((service, index) => {
            const aosDir = directions[index % directions.length];

            return (
              <div
                key={index}
                data-aos={aosDir}
                data-aos-delay={index * 100}
                className="flex items-center justify-between px-4 py-4 border rounded-4xl bg-black text-white transition duration-300 h-96 relative"
              >
                <h1 className="text-2xl md:text-3xl font-bold text-[#b5ff6d] absolute top-4">
                  <RiGeminiFill />
                </h1>
                <h2 className="ml-3 flex-1 text-xs sm:text-sm md:text-base font-light tracking-wide absolute top-4 sea left-12">
                  {service.service}
                </h2>
                <img
                  src={service.img}
                  alt={`${service.service} image`}
                  className="bg-cover rounded-xl h-auto md:h-55 lg:h-65 w-auto mx-auto"
                />
                <button className="group rounded-full border p-2 sm:p-3 md:p-4 absolute bottom-2 right-4">
                  <HiOutlineArrowSmallRight className="text-[#b5ff6d] text-xl md:text-2xl rotate-[-14deg] group-hover:rotate-[1deg] transition-transform duration-300 ease-in-out" />
                </button>
              </div>
            );
          })}
        </div>

        <p data-aos="fade-up" className="text-center text-sm sm:text-base md:text-lg font-semibold text-gray-800 leading-relaxed mb-12 mt-12">
          Collaborate With Brands And Agencies <br className="hidden sm:block" />
          To Create Impactful Results
        </p>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {["Imagination", "Creativity", "Designe", "Development"].map((service, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 100}
              className="flex items-center justify-between px-4 py-3 sm:py-4 border rounded-full bg-black text-white transition duration-300"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#b5ff6d]">
                <RiGeminiFill />
              </h1>
              <h2 className="ml-3 flex-1 text-xs sm:text-sm md:text-base font-light tracking-wide text-center sea">
                {service}
              </h2>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#b5ff6d]">
                <RiGeminiFill />
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
