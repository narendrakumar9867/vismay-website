import Navbar from "@/components/Navbar";
import Link from "next/link";

import Footer from "@/components/Footer";
import FooterAnimation from "@/components/FooterAnimation";

export const metadata = {
  title: "Events|Vismay",
  description:
    "Relive the magic of Vismay at IIITDMJ—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
  keywords:
    "Vismay, GMCMiraj, Cultural Fest, Dance, Drama, Music, Art, Celebration, Gallery, Photos, Videos, Past Events, Previous Editions",
  openGraph: {
    title: "Events|Vismay",
    description:
      "Relive the magic of Vismay at IIITDMJ—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
    url: "https://vismaygmcmiraj.in/events",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

const EventsPage = () => {
  const events = [
    {
      date: "08 NOV",
      title: "NATYARANG: Dance competition",
      description: "Solo, duet, and group dance competition.",
      image: "./public/eventsPage/dance_image.jpg",
      link1: "https://drive.google.com/file/d/1dJTOTweaLx-bT__RwUnBY_gPREFFZhQE/view?usp=drive_open", // Example link for 'Know More'
      link2: "https://wa.me/919867805822?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20dance%20competition%20at%20VISMAY%202025.%20Please%20let%20me%20know%20the%20details%20and%20registration%20process", // Example link for 'Register'
    },
    {
      date: "12 NOV",
      title: "SWARSANGRAM: Singing competition",
      description: "Solo and duet singing competition.",
      image: "/images/event2.jpg",
      link1: "https://drive.google.com/file/d/1X-dxGppkwuYUX64GjSdia-qL3iFvwLtl/view",
      link2: "https://wa.me/918691002183?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20singing%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      date: "15 NOV",
      title: "VADYAVISHWA: Music competition",
      description: "Battle of bands and Instruments competition.",
      image: "/images/event3.jpg",
      link1: "https://drive.google.com/file/d/1R952QgNHiNl4LL9lzoE1lQu0GTQgshR0/view",
      link2: "https://wa.me/917498135056?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20Music%20competition%20(Battle%20of%20Bands%20/%20Instrumental)%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      date: "15 NOV",
      title: "Core Med Conclave: Quiz competition",
      description: "All the UG students can participate in the quiz.",
      image: "/images/event3.jpg",
      link1: "https://drive.google.com/file/d/1-x1p-W0qg7Lb2kf8j9UeoBbcZ8cSWtdL/view",
      link2: "https://wa.me/919137268322?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      date: "15 NOV",
      title: "ANTARNAD: Open mic competition",
      description: "Let the voice of your mind be heard...",
      image: "/images/event3.jpg",
      link1: "https://drive.google.com/file/d/1Vj5OGAZRTiRBnTKdzsrVVOjLOeSZViB9/view",
      link2: "https://wa.me/918605552982?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20open%20mic%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      date: "15 NOV",
      title: "NATYAGANDHA: Drama competition",
      description: "Solo, duet, and group drama competition.",
      image: "/images/event3.jpg",
      link1: "https://drive.google.com/file/d/1dJTOTweaLx-bT__RwUnBY_gPREFFZhQE/view",
      link2: "https://wa.me/918657313950?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20drama%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      date: "15 NOV",
      title: "Runway Rendezvous: Fashion show",
      description: "Fashion show competition.",
      image: "/images/event3.jpg",
      link1: "https://drive.google.com/file/d/1B6CrJmraDPPIN0qxVLq91XwJnr7V00l5/view",
      link2: "https://wa.me/917887325745?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20fashion%20show%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      date: "15 NOV",
      title: "KALAVISHKAR: arts competition",
      description: "DRAWING COMPETITION, PHOTOGRAPHY COMPETITION",
      image: "/images/event3.jpg",
      link1: "https://drive.google.com/file/d/1ZZeq3KtjskSquHijAGCIvZ9aqOhVUg9H/view",
      link2: "https://wa.me/918149115213?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20Photography/Drawing%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#000000] text-white min-h-screen">
        {/* Header */}
        <div className="pt-32 pb-16 text-center px-4 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-pink-500">Browse</span> Events.
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4 text-lg">
            Event list celebrate over magna eget est lorem ipsum dolor sit amet consectetur...
          </p>
        </div>

        {/* Grid of Events */}
        <div className="grid gap-8 px-6 md:px-12 lg:px-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-20">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2e] rounded-xl p-4 shadow-lg text-white w-full max-w-sm mx-auto"
            >
              <img
                src={event.image}
                alt={event.title}
                className="rounded-md mb-4 h-40 w-full object-cover"
              />
              <div className="text-pink-500 font-bold text-sm">{event.date}</div>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-400 mb-1">By: {event.author}</p>
              <p className="text-sm mb-3">{event.description}</p>

              {/* Buttons Section */}
              <div className="flex justify-between mt-4">
                <Link href={event.link1}>
                  <button className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white text-sm px-6 py-3 rounded-md transform transition duration-300 hover:scale-105">
                    <span className="mr-2">🔍</span> Know More
                  </button>
                </Link>
                <Link href={event.link2}>
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black text-sm px-6 py-3 rounded-md transform transition duration-300 hover:scale-105">
                    <span className="mr-2">📝</span> Register
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="relative bg-black w-full h-screen flex flex-col justify-end pt-48 md:pt-52 lg:pt-72 px-6 md:px-12 xl:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-20 py-20">
            <p className="max-w-4xl text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold leading-tight text-center md:text-left tracking-tight">
              {["Myth", "Maya", "Mystery!"].map((word, i) => (
                <span
                  key={i}
                  className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                  style={{
                    backgroundImage: "url('/mmm background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(1.4)",
                    WebkitTextStroke: "1px #f5deb3",
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
            <FooterAnimation />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
