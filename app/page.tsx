"use client"
import React,{useState,useEffect} from 'react';
import SplitText from './Components/Engine/SplitText';
import BlurText from './Components/Engine/BlurText';
import {motion} from 'framer-motion'
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { RiGeminiFill } from "react-icons/ri";
import Services from './Components/LandingUtilities/Services';

export default function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <div>
    <div className='relative h-full w-full'>
    <div className="w-full min-h-full bg-white text-black flex items-center justify-center px-4 sm:px-6 lg:px-8 max-w-full mx-auto overflow-hidden">

        <div className="absolute inset-0 z-5 opacity-30  w-full h-full hidden xl:inline">
        {/* <Spline scene="https://prod.spline.design/itEFfCSFLDr2cYgG/scene.splinecode" /> */}
      </div>

         <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 rotate-[-90deg] lg:flex items-center gap-4 text-sm text-black sea hidden ">
        <hr className="w-20 border-black" />
        <h1 className="tracking-widest uppercase sea">MERN Stack Developer</h1>
        <hr className="w-20 border-black" />
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between relative z-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">

          {/* Stats */}
          <div className="flex gap-10 text-center text-gray-700 sea">
            <div>
              <div className="text-3xl font-semibold">+200</div>
              <div className="text-sm">Project completed</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">+50</div>
              <div className="text-sm">Startup raised</div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="mt-12 text-start">
            <div className="mb-4 sm:mb-6">
              <SplitText text="A creative" className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-light text-black leading-tight " delay={150} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} easing="easeOutCubic" threshold={0.2} rootMargin="-50px" />
            </div>
            <div className="mb-4 sm:mb-6">
              <SplitText text="developer &" className="text-[2.5rem] sm:text-[4rem] md:text-[4rem] font-light text-[#b5ff6d] leading-tight " delay={150} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} easing="easeOutCubic" threshold={0.2} rootMargin="-50px" />
            </div>
            <div className='flex items-center justify-start'>
              <div>
                <SplitText text="digital" className="text-[2.5rem] sm:text-[4rem] md:text-[4rem] font-light text-black leading-tight " delay={150} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} easing="easeOutCubic" threshold={0.2} rootMargin="-50px" />
              </div>
              <div>
                <SplitText text="designer" className="text-[2.5rem] sm:text-[4rem] md:text-[4rem] font-light text-[#b5ff6d] leading-tight " delay={150} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} easing="easeOutCubic" threshold={0.2} rootMargin="-50px" />
              </div>
            </div>
            <BlurText text="— It’s NIDINBOSE A MERN STACK DEVELOPER" delay={150} animateBy="words" direction="top" className="text-gray-600 text-sm sm:text-base md:text-lg mt-4" />
          </div>

          {/* Button */}
          <div>
            <button className="relative bg-white text-black text-base font-bold px-6 py-3 rounded-lg overflow-hidden sea group">
              <span className="z-10 relative">Know me better</span>
              <span className="absolute w-16 h-16 bg-[#b5ff6d] rounded-full blur-lg right-2 top-1 z-0 transition-all duration-500 group-hover:right-10 group-hover:top-3"></span>
              <span className="absolute w-24 h-24 bg-[#b5ff6d] rounded-full blur-lg right-8 top-3 z-0 transition-all duration-500 group-hover:right-14"></span>
            </button>
          </div>

          {/* Scroll */}
          <div className="text-sm text-black mt-8 animate-bounce sea">Scroll down ↓</div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 xl:w-1/2 flex justify-center mt-10 lg:mt-0 mb-12">
      <motion.img
        src="./Images/port.png"
        alt="Profile"
        initial={{ opacity: 0, x: -100, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-h-[80vh] w-auto grayscale rounded-xl object-cover animate-bannerWave"
        
      />
    </div>
        {/* Year Marker */}
        <div className="absolute right-0 bottom-10 rotate-[-90deg] text-sm text-black sea hidden lg:block">
          2025
        </div>
      </div>
  
    </div>
    <div className="overflow-hidden whitespace-nowrap w-full bg-white py-4 sea">
      <div
        className={`flex ${animationStarted ? "animate-marquee" : ""} w-max`}
      >
        <div className="flex space-x-8">
        <h1 className="text-5xl font-bold text-[#b5ff6d]">  <RiGeminiFill /></h1>
        <h1 className="text-5xl font-bold">APPLICATION DEVELOPER</h1>
        <h1 className="text-5xl font-bold text-[#b5ff6d]">  <RiGeminiFill /></h1>
          <h1 className="text-5xl font-bold">WEBSITE DEVELOPER</h1>
          <h1 className="text-5xl font-bold text-[#b5ff6d]">  <RiGeminiFill /></h1>
          <h1 className="text-5xl font-bold">DESIGNER</h1>
          <h1 className="text-5xl font-bold text-[#b5ff6d]">  <RiGeminiFill /></h1>
          <h1 className="text-5xl font-bold">ANIMATOR</h1>
          <h1 className="text-5xl font-bold text-[#b5ff6d]">  <RiGeminiFill /></h1>
          <h1 className="text-5xl font-bold">COMMUNITY</h1>
        </div>

        {/* Duplicate block for infinite looping */}
        <div className="flex space-x-8 ml-16">
      
        <h1 className="text-5xl font-bold text-[#b5ff6d]">  <RiGeminiFill /></h1>
          <h1 className="text-5xl font-bold">WEBSITE DEVELOPER</h1>
          <h1 className="text-5xl font-bold text-[#b5ff6d]">  <RiGeminiFill /></h1>
          <h1 className="text-5xl font-bold">APPLICATION DEVELOPER</h1>
          <h1 className="text-5xl font-bold text-[#b5ff6d]">  <RiGeminiFill /></h1>
          <h1 className="text-5xl font-bold">DESIGNER</h1>
          <h1 className="text-5xl font-bold text-[#b5ff6d]">  <RiGeminiFill /></h1>
          <h1 className="text-5xl font-bold">ANIMATOR</h1>
          <h1 className="text-5xl font-bold text-[#b5ff6d]">  <RiGeminiFill /></h1>
          <h1 className="text-5xl font-bold">COMMUNITY</h1>
          
        </div>
      </div>
    </div>
  
    </div>
    <Services/>
    </div>
    
);}