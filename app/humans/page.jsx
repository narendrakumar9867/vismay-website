import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";

// Organizers
import aman from "@/public/humansPage/President.png";
import priyansh from "@/public/humansPage/AT1.png";
import bhavik from "@/public/humansPage/CS2.png";
import samyak from "@/public/humansPage/CS1.png";
import divyansh from "@/public/humansPage/Hospitality.png";
import vansh from "@/public/humansPage/Hospitality2.png";
import aditya from "@/public/humansPage/Magzine1.png";
import varun from "@/public/humansPage/Magzine2.png";
import deepanshu from "@/public/humansPage/OS.png";
import sambhav from "@/public/humansPage/OS2.png";
import tushir from "@/public/humansPage/PR1.png";
import aish from "@/public/humansPage/Technical.png";
import prajjwal from "@/public/humansPage/Technical2.png";
import aryan from "@/public/humansPage/Treasurer1.png";
import prajwal from "@/public/humansPage/Treasurer2.png";
import manoj from "@/public/humansPage/VicePresident.png";
import Soham from "@/public/humansPage/Magzine5.png";
import SN from "@/public/humansPage/CS3.png";
import RP from "@/public/humansPage/CS4.png";
import PC from "@/public/humansPage/CS5.png";
import SJ from "@/public/humansPage/CS6.png";
import AY from "@/public/humansPage/CS7.png";
import HM from "@/public/humansPage/T3.png";
import PW from "@/public/humansPage/T4.png";
import VN from "@/public/humansPage/PR2.png";
import AC from "@/public/humansPage/AT2.png";
import YB from "@/public/humansPage/AT3.png";
import MS from "@/public/humansPage/AT4.png";
import AK from "@/public/humansPage/Hospitality3.png";
import KB from "@/public/humansPage/Hospitality4.png";
import JV from "@/public/humansPage/Magzine4.png";
import HJ from "@/public/humansPage/Magzine3.png";

import Footer from "@/components/Footer";

export const metadata = {
  title: "humans|Vismay",
  description:
    "Relive the magic of Vismay at GMCMirag—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
  keywords:
    "Vismay, GMCMiraj, Cultural Fest, Dance, Drama, Music, Art, Celebration, Gallery, Photos, Videos, Past Events, Previous Editions",
  openGraph: {
    title: "humans|Vismay",
    description:
      "Relive the magic of Vismay at GMCMirag—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
    url: "https://vismaygmcmiraj.in/humans",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

export default function Team() {
  const organizerData = [
    {
      name: " Yash Vinkare",
      role: "President",
      profilepic: aman,
      instagram: "https://www.instagram.com/yashvinkare/",
      whatsapp:"https://wa.me/8010459236?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Kshitij Dhandare",
      role: " Vice President",
      profilepic: manoj,
      instagram: "https://www.instagram.com/kshitij_dhandare/",
      whatsapp:"https://wa.me/7387933972?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Ananya Shaji",
      role: " Organizing Secretary ",
      profilepic: deepanshu,
      instagram: "https://www.instagram.com/ananyashaji25/",
      whatsapp:"https://wa.me/8999284279?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Himanshu Kumre",
      role: "Organizing Secretary",
      profilepic: sambhav,
      instagram: "https://www.instagram.com/himanshu_kumre750/",
      whatsapp:"https://wa.me/9021637161?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Vaibhavi Joshi",
      role: "Cultural Secretary",
      profilepic: samyak,
      instagram: "https://www.instagram.com/vabjo_0506/",
      whatsapp:"https://wa.me/7887325745?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Rushikesh Gaikwad",
      role: "Cultural Secretary",
      profilepic: bhavik,
      instagram: "https://www.instagram.com/rushi_gaikwad08/",
      whatsapp:"https://wa.me/9867805822?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Shraddha Nipurte",
      role: "Cultural Secretary",
      profilepic: SN,
      instagram: "https://www.instagram.com/heyitshelianthus/",
      whatsapp:"https://wa.me/8149115213?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Rohit Padwal",
      role: "Cultural Secretary",
      profilepic: RP,
      instagram: "https://www.instagram.com/rohittpadwal_04/",
      whatsapp:"https://wa.me/8691002183?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Pradnya Chondkar",
      role: "Cultural Secretary",
      profilepic: PC,
      instagram: "https://www.instagram.com/pradnya_dc/",
      whatsapp:"https://wa.me/7498135056?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Siddhant Jagtap",
      role: "Cultural Secretary",
      profilepic: SJ,
      instagram: "https://www.instagram.com/emperor.013/",
      whatsapp:"https://wa.me/8605552982?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Anushka Yadav",
      role: "Cultural Secretary",
      profilepic: AY,
      instagram: "https://www.instagram.com/anushka_lallantop/",
      whatsapp:"https://wa.me/8657313950?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Ninad Patil",
      role: "Treasurer",
      profilepic: aryan,
      instagram: "https://www.instagram.com/ninad_patil_4102/",
      whatsapp:"https://wa.me/9975664897?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Bhavana Choudhari",
      role: "Treasurer",
      profilepic: prajwal,
      instagram: "https://www.instagram.com/_.bhavana._1904/",
      whatsapp:"https://wa.me/8482825503?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Harish Madavi",
      role: "Treasurer",
      profilepic: HM,
      instagram: "https://www.instagram.com/harrystreoo0/",
      whatsapp:"https://wa.me/7507049585?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Pranjal Wadekar",
      role: "Treasurer",
      profilepic: PW,
      instagram: "https://www.instagram.com/pranjal_0809/",
      whatsapp:"https://wa.me/9325684286?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Rohan Sarode ",
      role: "Public Relation",
      profilepic: tushir,
      instagram: "https://www.instagram.com/ro.haha.nnn/",
      whatsapp:"https://wa.me/7744924437?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Vrushabh Naik",
      role: "Public Relation",
      profilepic: VN,
      instagram: "https://www.instagram.com/rush_hub_/",
      whatsapp:"https://wa.me/9860849715?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Chaitanya Pandey", 
      role: "Techinical Team",
      profilepic: aish,
      instagram: "https://www.instagram.com/god_s_blade/",
      whatsapp:"https://wa.me/9326610337?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Nihal Mujawar",
      role: "Technical Team",
      profilepic: prajjwal,
      instagram: "https://www.instagram.com/n.i.h.a.l_05/",
      whatsapp:"https://wa.me/8999193562?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Gaurish Talreja",
      role: " Academic Team ",
      profilepic: priyansh,
      instagram: "https://www.instagram.com/gaurish._24/",
      whatsapp:"https://wa.me/9137268322?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Avni Chopra",
      role: " Academic Team ",
      profilepic: AC,
      instagram: "#",
      whatsapp:"https://wa.me/7506112522?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Yukta Bhangale",
      role: " Academic Team ",
      profilepic: YB,
      instagram: "https://www.instagram.com/_yuktaa08_/",
      whatsapp:"https://wa.me/9321543539?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Manish Singh",
      role: " Academic Team ",
      profilepic: MS,
      instagram: "https://www.instagram.com/manish_singh4048/",
      whatsapp:"https://wa.me/9359865443?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Suraj Katewar",
      role: "Hospitality & Registration Team Head",
      profilepic: divyansh,
      instagram: "https://www.instagram.com/suraj_katewar_00400/",
      whatsapp:"https://wa.me/7499645510?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Veena Khot",
      role: "Hospitality & Registration Team",
      profilepic: vansh,
      instagram: "https://www.instagram.com/veena_khot1811/",
      whatsapp:"https://wa.me/9309338911?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Anjali Koshti",
      role: "Hospitality & Registration Team",
      profilepic: AK,
      instagram: "https://www.instagram.com/anjali.k.2509/",
      whatsapp:"https://wa.me/9403698583?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: "Karan Bangar",
      role: "Hospitality & Registration Team",
      profilepic: KB,
      instagram: "https://www.instagram.com/__karansb/",
      whatsapp:"https://wa.me/9022658065?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Mrunal Kumbhar",
      role: " Magazine Team",
      profilepic: aditya,
      instagram: "https://www.instagram.com/mrunalkumbhar76/",
      whatsapp:"https://wa.me/8379072359?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Om Dhake",
      role: "Magazine Team",
      profilepic: varun,
      instagram: "https://www.instagram.com/omdhake__1007/",
      whatsapp:"https://wa.me/7741912446?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    {
      name: " Jamila Vora",
      role: " Magazine Team",
      profilepic: JV,
      instagram: "https://www.instagram.com/jamila_vora/",
      whatsapp:"https://wa.me/7498422772?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
  },
  {
    name: "Harshwardhan Jadhav",
    role: " Magazine Team",
    profilepic: HJ,
    instagram: "https://www.instagram.com/hari_4688_/",
    whatsapp:"https://wa.me/9022236355?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
},
  {
    name: "Muskan Murshad ",
    role: " Magazine Team",
    profilepic: Soham,
    instagram: "#",
    whatsapp:"https://wa.me/8623076811?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
    },
    
  ];

  return (
    <>
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 xl:px-10 2xl:px-48 py-12"
      >
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <div
              className="w-fit rounded-full 
                border border-[#D1CAC7] px-4 py-1 mb-3"
            >
              <p
                className="w-full text-[#C3C3C3] font-[Inter] 
                  text-center font-normal text-[1.25rem] tracking-[0.0625rem]"
              >
                THE TEAM
              </p>
            </div>
            <p
              className="text-[#FDE9A3] text-center text-[2.5rem] font-normal 
                md:text-[3rem] xl:text-[4rem] md:leading-[4.5rem] xl:leading-[5.25rem]"
            >
              Meet the humans of
              <br /> Vismay
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="Organizers" // Set default to Organizers
          className="flex flex-col justify-center items-center text-white mt-4 md:mt-12"
        >
          <TabsList className="mb-8 md:mb-16 w-[19rem] min-w-[321px]:w-80 sm:w-[488px]">
            <TabsTrigger
              value="Organizers"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl 
                text-xl leading-7"
            >
              Organizers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Mentors">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
            </div>
          </TabsContent>
          <TabsContent value="Organizers">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {organizerData.map((human, index) => (
                <HumansCard key={index} {...human} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

        <div className="flex flex-col bg-black md:flex-row justify-between items-center gap-16 md:gap-20 px-6 md:px-12 xl:px-24 py-20">
          
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

          {/* <FooterAnimation /> */}
        </div>
      <Footer />
    </>
  );
}
