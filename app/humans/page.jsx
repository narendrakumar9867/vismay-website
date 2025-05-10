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

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "humans|Vismay",
  description:
    "Relive the magic of Vismay at IIITDMJ—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
  keywords:
    "Vismay, GMCMiraj, Cultural Fest, Dance, Drama, Music, Art, Celebration, Gallery, Photos, Videos, Past Events, Previous Editions",
  openGraph: {
    title: "humans|Vismay",
    description:
      "Relive the magic of Vismay at IIITDMJ—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
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
      whatsapp:"#"
    },
    {
      name: "Kshitij Dhandare",
      role: " Vice President",
      profilepic: manoj,
      instagram: "https://www.instagram.com/kshitij_dhandare/",
      whatsapp:"#"
    },
    {
      name: " Ananya Shaji",
      role: " Organizing Secretary ",
      profilepic: deepanshu,
      instagram: "https://www.instagram.com/ananyashaji25/",
      whatsapp:"#"
    },
    {
      name: " Himanshu Kumre",
      role: "Organizing Secretary",
      profilepic: sambhav,
      instagram: "https://www.instagram.com/himanshu_kumre750/",
      whatsapp:"#"
    },
    {
      name: " Vaibhavi Joshi",
      role: "Cultural Secretary",
      profilepic: samyak,
      instagram: "https://www.instagram.com/vabjo_0506/",
      whatsapp:"#"
    },
    {
      name: " Rushikesh Gaikwad",
      role: "Cultural Secretary",
      profilepic: bhavik,
      instagram: "https://www.instagram.com/rushi_gaikwad08/",
      whatsapp:"#"
    },
    {
      name: "Shraddha Nipurte",
      role: "Cultural Secretary",
      profilepic: SN,
      instagram: "https://www.instagram.com/heyitshelianthus/",
      whatsapp:"#"
    },
    {
      name: "Rohit Padwal",
      role: "Cultural Secretary",
      profilepic: RP,
      instagram: "https://www.instagram.com/rohittpadwal_04/",
      whatsapp:"#"
    },
    {
      name: "Pradnya Chondkar",
      role: "Cultural Secretary",
      profilepic: PC,
      instagram: "https://www.instagram.com/pradnya_dc/",
      whatsapp:"#"
    },
    {
      name: "Siddhant Jagtap",
      role: "Cultural Secretary",
      profilepic: SJ,
      instagram: "https://www.instagram.com/emperor.013/",
      whatsapp:"#"
    },
    {
      name: "Anushka Yadav",
      role: "Cultural Secretary",
      profilepic: AY,
      instagram: "https://www.instagram.com/anushka_lallantop/",
      whatsapp:"#"
    },
    {
      name: " Ninad Patil",
      role: "Treasurer",
      profilepic: aryan,
      instagram: "https://www.instagram.com/ninad_patil_4102/",
      whatsapp:"#"
    },
    {
      name: " Bhavana Choudhari",
      role: "Treasurer",
      profilepic: prajwal,
      instagram: "https://www.instagram.com/_.bhavana._1904/",
      whatsapp:"#"
    },
    {
      name: "Harish Madavi",
      role: "Treasurer",
      profilepic: HM,
      instagram: "https://www.instagram.com/harrystreoo0/",
      whatsapp:"#"
    },
    {
      name: "Pranjal Wadekar",
      role: "Treasurer",
      profilepic: PW,
      instagram: "https://www.instagram.com/pranjal_0809/",
      whatsapp:"#"
    },
    {
      name: " Rohan Sarode ",
      role: "Public Relation",
      profilepic: tushir,
      instagram: "https://www.instagram.com/ro.haha.nnn/",
      whatsapp:"#"
    },
    {
      name: "Vrushabh Naik",
      role: "Public Relation",
      profilepic: VN,
      instagram: "https://www.instagram.com/rush_hub_/",
      whatsapp:"#"
    },
    {
      name: " Chaitanya Pandey", 
      role: "Techinical Team",
      profilepic: aish,
      instagram: "https://www.instagram.com/god_s_blade/",
      whatsapp:"#"
    },
    {
      name: " Nihal Mujawar",
      role: "Technical Team",
      profilepic: prajjwal,
      instagram: "https://www.instagram.com/n.i.h.a.l_05/",
      whatsapp:"#"
    },
    {
      name: " Gaurish Talreja",
      role: " Academic Team ",
      profilepic: priyansh,
      instagram: "https://www.instagram.com/gaurish._24/",
      whatsapp:"#"
    },
    {
      name: "Avni Chopra",
      role: " Academic Team ",
      profilepic: AC,
      instagram: "#",
      whatsapp:"#"
    },
    {
      name: "Yukta Bhangale",
      role: " Academic Team ",
      profilepic: YB,
      instagram: "https://www.instagram.com/_yuktaa08_/",
      whatsapp:"#"
    },
    {
      name: "Manish Singh",
      role: " Academic Team ",
      profilepic: MS,
      instagram: "https://www.instagram.com/manish_singh4048/",
      whatsapp:"#"
    },
    {
      name: " Suraj Katewar",
      role: "Hospitality & Registration Team Head",
      profilepic: divyansh,
      instagram: "https://www.instagram.com/suraj_katewar_00400/",
      whatsapp:"#"
    },
    {
      name: "Veena Khot",
      role: "Hospitality & Registration Team",
      profilepic: vansh,
      instagram: "https://www.instagram.com/veena_khot1811/",
      whatsapp:"#"
    },
    {
      name: "Anjali Koshti",
      role: "Hospitality & Registration Team",
      profilepic: AK,
      instagram: "https://www.instagram.com/anjali.k.2509/",
      whatsapp:"#"
    },
    {
      name: "Karan Bangar",
      role: "Hospitality & Registration Team",
      profilepic: KB,
      instagram: "https://www.instagram.com/__karansb/",
      whatsapp:"#"
    },
    {
      name: " Mrunal Kumbhar",
      role: " Magazine Team",
      profilepic: aditya,
      instagram: "https://www.instagram.com/mrunalkumbhar76/",
      whatsapp:"#"
    },
    {
      name: " Om Dhake",
      role: "Magazine Team",
      profilepic: varun,
      instagram: "https://www.instagram.com/omdhake__1007/",
      whatsapp:"#"
    },
    {
      name: " Jamila Vora",
      role: " Magazine Team",
      profilepic: JV,
      instagram: "https://www.instagram.com/jamila_vora/",
      whatsapp:"#"
  },
  {
    name: "Harshwardhan Jadhav",
    role: " Magazine Team",
    profilepic: HJ,
    instagram: "https://www.instagram.com/hari_4688_/",
    whatsapp:"#"
},
  {
    name: "Muskan Murshad ",
    role: " Magazine Team",
    profilepic: Soham,
    instagram: "#",
    whatsapp:"#"
    },
    
  ];

  return (
    <>
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 xl:px-10 2xl:px-48 py-40"
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
              className="text-[#F5F0D8] text-center text-[2.5rem] font-normal 
                md:text-[4rem] xl:text-[5rem] md:leading-[4.5rem] xl:leading-[5.25rem]"
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
      <div className="relative bg-black w-full h-screen flex flex-col justify-end pt-48 md:pt-52 lg:pt-72">
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

          <FooterAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
}
