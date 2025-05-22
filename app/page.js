"use client";
import React from 'react'
import { useState, useEffect, useLayoutEffect  } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
// import  CustomizedButtons  from "@/components/register_button";
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Vismay } from "@/components/vismay_model";
import { OrbitControls, Environment } from '@react-three/drei';

const VismayModel = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, isMobile ? 14 : 10], fov: isMobile ? 12 : 25 }}>
          <ambientLight intensity={1} />
          <Environment files="/assets/hdri/studio_small_03_1k.hdr" />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Vismay scale={isMobile ? 0.38 : 0.6} position={isMobile ? [0, -0.38, -1] : [0, -0.6, 0]} />
        </Canvas>
      </div>
    </div>
  )
}



const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-06-06T00:00:00");

    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetDate.getTime() - currentTime.getTime();

      if (timeDifference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center text-[#FAF8ED]"
    >
      <p className="text-lg font-medium">Event starts in:</p>

      <div className="mt-4 px-2 sm:px-0 flex justify-center">
        <div className="flex flex-row gap-4 bg-transparent rounded-xl p-2 overflow-x-auto">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#FAF8ED] text-black px-3 py-2 rounded-md min-w-[50px] text-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className='text-2xl font-bold'>{Object.values(timeLeft)[index]}</div>
              <span className="block text-xs text-gray-700 mt-1 tracking-wide">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const aboutData = [
    {
      imgSrc: "/aboutPage/Screenshot_20250409_235837_ibisPaint X_1.png",
      title: "About Vismay 2025",
      description: `Vismay, the annual cultural event of GMC Miraj, is a highly anticipated celebration that showcases the talents of our students, faculty, and staff. This iconic event has been a legacy of our college, bringing together the entire college community in a spectacular display of creativity,passion and entertainment. What makes Vismay truly special is the fact that it's not just limited to our students. Our professors, UG,and PG students all are coming together to make this event a grand success. It's a celebration that brings together people from all walks of life, united by their love for art, music, and culture.
`,
    },
    {
      imgSrc: "/aboutPage/dean.png",
      title: "Dean's Message",
      description:` At our college, we believe that growth comes not just from academics, but also from shared experiences, challenges, and learning beyond the classroom. it is through these moments that we build confidence, character, and lasting friendships. our campus provides a space where students can explore their interests, take part in diverse activities, and enjoy a balanced college life. with that spirit, we are excited to welcome you to vismay 2025 — our annual cultural, sports, and literary fest. we hope these days offer you a chance to connect, compete, and create memories that will stay with you long after the fest is over.`,
    },
    {
      imgSrc: "/aboutPage/MS's.png",
      title: "MS's Message",
      description: `College life is more than just lectures and textbooks — its about finding balance, building connections, and growing into well-rounded individuals. As doctors in the making, it's important that we also take time to relax, express ourselves, and support each other. Vismay 2025 is a celebration of this very spirit. It brings together students through music, sports, art, and shared enthusiasm. It’s an opportunity to step away from routine, discover new talents, and strengthen the sense of community we all value. We look forward to seeing you participate, perform, and enjoy every moment. Let this fest be a refreshing and meaningful chapter in your journey.`
    },
  ];

  const [ expandedIndex, setExpandedIndex ] = useState(null);

  const getPreview = (text, length = 180) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + "...";
  };


  const BrochureViewer = dynamic(() => import('@/components/BrochureViewer'), {
  ssr: false, // Server Side Rendering disable karein
  });

  const eventPage = [
    {
      link:"/events"
    },
  ];

  return (
    <div
      className="overflow-x-hidden relative"
      style={{
        backgroundImage: "url('/aboutPage/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10">

        <Navbar />

        <div className="w-full flex flex-row items-center justify-between px-3 md:px-30 py-2 bg-transparent pl-14">
          <div className="text-white text-center flex-1">
            <h1 className="text-xs sm:text-xs md:text-xl font-serif font-extrabold leading-none tracking-wide">
              GOVERNMENT MEDICAL COLLEGE AND HOSPITAL,<br className="hidden sm:block" />
              MIRAJ AND PVPGH SANGLI
            </h1>
          </div>
          <div className="flex-shrink-0">
            <a
              id="GMC-Miraj"
              href="https://www.gmcmiraj.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/gmc miraj logo.png"
                alt="college logo"
                className="w-14 h-14 md:w-20 md:h-20"
              />
            </a>
          </div>
        </div>
        <div className="mt-0 h-0.5 w-full bg-white opacity-40"></div>

      <div className="flex flex-col pt-10 pb-0">
          <VismayModel />
        </div>  
        
        <div className="text-white text-center flex-1 pt-0 mt-[-1rem]">
  <h1 className="font-serif font-extrabold leading-none tracking-wide">
    <span className="block text-lg sm:text-2xl md:text-3xl font-normal mt-[-0.5rem]">
      More than just a story its a legacy
    </span>
  </h1>
</div>
        <div className="pt-14 md:pt-20 pb-2 px-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          {eventPage.map((event) => (
            <Link href={event.link}>
            <button className="w-full sm:w-auto backdrop-blur-md bg-gray-500/30 hover:bg-gray-500/50 border border-white text-white text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-white transition duration-300 ease-in-out transform hover:scale-105 font-medium flex items-center justify-center">
              <span className="mr-2">🎭</span>
              <strong>Explore Events</strong>
            </button>
          </Link>
          ))}

          <Link href="https://linktr.ee/VISMAY25">
            <button className="w-full sm:w-auto backdrop-blur-md bg-gray-500/30 hover:bg-gray-500/50 border border-[#FDE9A3] text-white text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-yellow-500/40 transition duration-300 ease-in-out transform hover:scale-105 font-medium flex items-center justify-center">
              <span className="mr-2">🚀</span>
              <strong>Register Now</strong>
            </button>
          </Link>
          <br className="hidden sm:block" />
          <h1 className="inline-block text-white text-xl sm:text-xl md:text-2xl font-semibold bg-white/10 backdrop-blur-md px-6 py-0 rounded-xl shadow-md border border-white/20">
              06/06 &mdash; 08/06
          </h1>
        </div>

        {/* <CustomizedButtons /> */}
        
        <div className="relative flex flex-col min-h-fit p-4 pt-5 md:pt-5 md:px-12 xl:px-20 md:py-4">
          {/* <div className="flex justify-center items-center w-full py-16">
            {modelAnimation()}
          </div> */}
          <div className="flex justify-center items-center w-full py-5 md:py-8">
            <Countdown />
          </div>
        </div>

        <div className="w-full flex flex-col bg-[#101010]/90">

          <BrochureViewer />

        </div>

        <div className="w-full flex flex-col bg-transparent">

          <div className="flex items-center justify-center px-6 md:px-12 xl:px-24 py-5">
            <p className="text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold leading-tight text-center tracking-wider">
              {["Myth", "Maya", "Mystery!"].map((word) => (
                <span
                  key={word}
                  className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                  style={{
                    backgroundImage: "url('/mmm background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(1.4)",
                    WebkitTextStroke: "1px #f5deb3",
                    letterSpacing: "0.05em", 
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col bg-[#101010]/90">
          
            <div className="flex flex-col items-center justify-center p-8 md:px-10 sm:px-16 py-10 md:py-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center text-center gap-10 border-2 rounded-2xl p-10 md:p-16"
                style={{
                  background: "radial-gradient(116.96% 115.94% at 9.81% 9.24%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)",
                  borderColor: "rgba(255, 255, 255, 0.6)",
                }}
              >
                {aboutData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center gap-8 w-full"
                  >
                    <motion.img
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      src={item.imgSrc}
                      alt={item.title}
                      className="rounded-lg w-full max-w-md"
                    />
                    <div className="text-[#FAF8ED]">
                      <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                      <p className="text-sm md:text-base whitespace-pre-line">
                        {expandedIndex === index
                          ? item.description
                          : getPreview(item.description)}
                        {item.description.length > 180 && (
                          <button
                            className="ml-2 text-[#FDE9A3] underline text-sm"
                            onClick={() =>
                              setExpandedIndex(expandedIndex === index ? null : index)
                            }
                          >
                            {expandedIndex === index ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
       
        <Footer />
      </div>
    </div>
  );
};
