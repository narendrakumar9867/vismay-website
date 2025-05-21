import Navbar from "@/components/Navbar";
import Link from "next/link";

import Footer from "@/components/Footer";

export const metadata = {
  title: "Events|Vismay",
  description:
    "Relive the magic of Vismay at GMCMirag—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
  keywords:
    "Vismay, GMCMiraj, Cultural Fest, Dance, Drama, Music, Art, Celebration, Gallery, Photos, Videos, Past Events, Previous Editions",
  openGraph: {
    title: "Events|Vismay",
    description:
      "Relive the magic of Vismay at GMCMirag—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
    url: "https://vismaygmcmiraj.in/events",
    images:
      "https://res.cloudinary.com/dk1jk0yxz/image/upload/v1747833267/vismay_wdssm1.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

const EventsPage = () => {
  const events = [
    {
      title: "NRITYATARANG: Dance competition",
      description: "Solo, duet, and group dance competition.",
      image: "/eventsPage/dance_image.jpg",
      link1: "/events/nrityatarang",
      link2: "https://wa.me/919867805822?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20dance%20competition%20at%20VISMAY%202025.%20Please%20let%20me%20know%20the%20details%20and%20registration%20process",
    },
    {
      title: "SWARSANGAM: Singing competition",
      description: "Solo and duet singing competition.",
      image: "/eventsPage/singing_image.jpg",
      link1: "/events/swarsangam",
      link2: "https://wa.me/918691002183?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20singing%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      title: "VADYAVISHWA: Music competition",
      description: "Battle of bands and Instruments competition.",
      image: "/eventsPage/music_image.jpg",
      link1: "/events/vadyavishwa",
      link2: "https://wa.me/917498135056?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20Music%20competition%20(Battle%20of%20Bands%20/%20Instrumental)%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      title: "Core Med Conclave: Quiz competition",
      description: "All the UG students can participate in the quiz.",
      image: "/eventsPage/quiz_image.png",
      link1: "/events/CoreMedConclave",
      link2: "https://wa.me/919137268322?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      title: "ANTARNAAD: Open mic competition",
      description: "Let the voice of your mind be heard...",
      image: "/eventsPage/openmic_image.png",
      link1: "/events/antarnaad",
      link2: "https://wa.me/918605552982?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20open%20mic%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      title: "NATYAGANDH: Drama competition",
      description: "Solo, duet, and group drama competition.",
      image: "/eventsPage/drama_image.jpg",
      link1: "/events/natyagandh",
      link2: "https://wa.me/918657313950?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20drama%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      title: "Runway Rendezvous: Fashion show",
      description: "Fashion show competition.",
      image: "/eventsPage/fashion_image.jpg",
      link1: "/events/RunwayRendezvous",
      link2: "https://wa.me/917887325745?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20fashion%20show%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
    {
      title: "KALAVISHKAAR: arts competition",
      description: "DRAWING COMPETITION, PHOTOGRAPHY COMPETITION",
      image: "/eventsPage/art_image.jpg",
      link1: "/events/kalavishkar",
      link2: "https://wa.me/918149115213?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20Photography/Drawing%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#000000] text-white min-h-screen">
        {/* Header */}
        <div className="pt-12 pb-16 text-center px-4 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-[#FDE9A3]">Vismay</span> Events.
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4 text-lg">
            Relive the magic of Vismay at Goverment Medical College and Hospital, Miraj—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.
          </p>
        </div>

        {/* events brochure */}
        <div className="pt-8 pb-20 px-4 md:px-8 flex justify-center">
          <Link
            href="https://drive.google.com/uc?export=download&id=1gWFHpZ-DY-jAH8-wi4ydNooCXLK3woni"
            download="Events_Brochure.pdf"
          >
            <button className="text-white font-semibold text-base px-8 py-3 border border-white rounded-full bg-transparent hover:bg-[#FDE9A3] hover:text-black active:bg-[#FDE9A3] transition duration-300 ease-in-out">
              Download Brochure
            </button>
          </Link>
        </div>

        {/* Grid of Events */}
        <div className="grid gap-8 px-6 md:px-12 lg:px-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2e] rounded-xl p-4 shadow-lg text-white w-full max-w-sm mx-auto"
            >
              <img
                src={event.image}
                alt={event.title}
                className="rounded-md mb-4 h-43 w-full object-cover"
              />
              <div className="text-pink-500 font-bold text-sm">{event.date}</div>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-400 mb-1">By: {event.author}</p>
              <p className="text-sm mb-3">{event.description}</p>

              {/* Buttons Section */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
                <Link href={event.link1}>
                  <button className="w-full sm:w-auto flex items-center justify-center backdrop-blur-md bg-transparent hover:bg-[#FDE9A3] border border-white text-white text-sm px-8 py-3 rounded-xl hover:text-black transition duration-300 ease-in-out transform hover:scale-105 font-normal">
                    <span className="mr-2">🔍</span>
                    <strong>Know More</strong>
                  </button>
                </Link>

                <Link href={event.link2}>
                  <button className="w-full sm:w-auto flex items-center justify-center backdrop-blur-md bg-transparent hover:bg-[#FDE9A3] border border-white text-white text-sm px-8 py-3 rounded-xl hover:text-black transition duration-300 ease-in-out transform hover:scale-105 font-normal">
                    <span className="mr-2">🖊️</span>
                    <strong>Register</strong>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col bg-black md:flex-row justify-between items-center gap-16 md:gap-20 px-6 md:px-12 xl:px-24 py-20">
          <p className="max-w-4xl text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold leading-tight text-center md:text-left tracking-tight">
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
        </div>
      <Footer />
    </>
  );
};

export default EventsPage;
