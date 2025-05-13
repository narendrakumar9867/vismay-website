"use client";
import React from 'react'
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
// import FooterAnimation from "@/components/FooterAnimation";
// import { Environment, OrbitControls } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import { Boxs } from "@/components/Box";
import  CustomizedButtons  from "@/components/register_button";

<div className="CollegeName text-center text-white mt-8">
  <h3 className="text-xl font-semibold">
    GOVERNMENT MEDICAL COLLEGE AND HOSPITAL, MIRAJ AND PVPGH SANGLI
  </h3>
</div>

// const modelAnimation = () => {
//   return (
//     <div className="h-[500px] w-[600px] max-h-[500px] max-w-[600px]">
//       <Canvas>
//         <Environment
//           // files="/assets/hdri/studio_small_03_1k.hdr" // Use the local file path
//           preset="city" // Ensure preset is null when using custom HDRI
//         />
//         <OrbitControls />
//         <Boxs />
//       </Canvas>
//     </div>
//   );
// };

// Countdown Component


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
      <div className="flex flex-wrap justify-center gap-4 mt-4 px-2 sm:px-0">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#FAF8ED] text-black px-4 py-2 rounded-lg min-w-[70px] text-center"
          >
            {Object.values(timeLeft)[index]} <span className="block text-sm">{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Home() {
  const aboutData = [
    {
      imgSrc: "/aboutPage/Screenshot_20250409_235837_ibisPaint X_1.png",
      title: "About Vismay 2025",
      description: `Vismay, the annual cultural event of GMC Miraj, is ahighly anticipated celebration that showcases the talents of our students, faculty, and staff. This iconic event has been a legacy of our college, bringing together the entire college community in a spectacular display of creativity,passion, and entertainment.What makes Vismay truly special is the fact that it's not just limited to our students. Our professors, UG,and PG students all come together to make this eventa grand success. It's a celebration that brings together people from all walks of life, united by their love for art, music, and culture.
`,
    },
    {
      imgSrc: "/aboutPage/dean.png",
      title: "Dean's Message",
      description: `At our college, we believe that growth comes not just from academics, but also from shared experiences, challenges, and learning beyond the classroom. it is through these moments that we build confidence, character, and lasting friendships. our campus provides a space where students can explore their interests, take part in diverse activities, and enjoy a balanced college life. with that spirit, we are excited to welcome you to vismay 2025 — our annual cultural, sports, and literary fest. we hope these days offer you a chance to connect, compete, and create memories that will stay with you long after the fest is over.`,
    },
    {
      imgSrc: "/aboutPage/MS's.png",
      title: "MS's Message",
      description: `MS'S MESSAGE

College life is more than just lectures and textbooks — it's about finding balance, building connections, and growing into well-rounded individuals. As doctors in the making, it's important that we also take time to relax, express ourselves, and support each other. Vismay 2025 is a celebration of this very spirit. It brings together students through music, sports, art, and shared enthusiasm. It’s an opportunity to step away from routine, discover new talents, and strengthen the sense of community we all value. We look forward to seeing you participate, perform, and enjoy every moment. Let this fest be a refreshing and meaningful chapter in your journey.`
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

        <div className="w-full flex justify-between items-center px-6 md:px-12 py-4 bg-[#101010]/70 z-10 relative pl-14">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#FAF8ED] tracking-wide text-center flex-1">
            GOVERNMENT MEDICAL COLLEGE AND HOSPITAL,
            <br className="hidden md:block" />
            MIRAJ AND PVPGH SANGLI
          </h3>

          <a
            id="GMC-Miraj"
            href="https://www.gmcmiraj.edu.in/"
            target="_blank"
          >
          <img
              src="/gmc miraj logo.png"
              alt="college logo"
              className="w-16 h-16 md:w-20 md:h-20 ml-4"
          />
          </a>
        </div>


        <CustomizedButtons />
        
        <div className="relative flex flex-col min-h-fit p-4 pt-20 md:pt-32 md:px-12 xl:px-20 md:py-4">
          {/* <div className="flex justify-center items-center w-full py-16">
            {modelAnimation()}
          </div> */}
          <div className="flex justify-center items-center w-full py-16 md:py-32">
            <Countdown />
          </div>
        </div>

        <div className="w-full flex flex-col bg-[#101010]/90">
          <div className="flex flex-col items-center justify-center p-8 md:px-16 xl:px-32 py-20 md:py-32">
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
                    <p className="text-sm md:text-base whitespace-pre-line">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-20 px-6 md:px-12 xl:px-24 py-20">

            <p className="max-w-4xl text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold leading-tight text-center md:text-left tracking-tight">
              <span
                className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                style={{
                  backgroundImage: "url('/mmm background.jpg')", // parchment image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(1.4)", // Make parchment brighter
                  WebkitTextStroke: "1px #f5deb3", // Light wheat-colored stroke
                }}
              >
                Myth
              </span>
              <span
                className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                style={{
                  backgroundImage: "url('/mmm background.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(1.4)",
                  WebkitTextStroke: "1px #f5deb3",
                }}
              >
                Maya
              </span>
              <span
                className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                style={{
                  backgroundImage: "url('/mmm background.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(1.4)",
                  WebkitTextStroke: "1px #f5deb3",
                }}
              >
                Mystery!
              </span>
            </p>

          </div>
        <Footer />
      </div>
    </div>

  );
};
