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
    url: "https://vismaygmcmiraj.in/events/swarsangam",
    images:
      "https://res.cloudinary.com/dk1jk0yxz/image/upload/v1747833267/vismay_wdssm1.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

const EventSwarsangamPage = () => {

  return (
    <>
      <Navbar />
      <div className="px-6 py-12 bg-black text-white" >

        { /* Header */}
        <div className="pt-12 pb-8 text-center px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#FDE9A3]">SWARSANGAM,</span> Singing Competition.
          </h1>
          <p className="text-white max-w-3xl mx-auto mt-4 text-lg font-semibold">
            🎤 Got a voice that can steal hearts or light up the stage?
            Then don't hold back — it's your time to shine! Whether it's high notes or heartfelt melodies, let the world hear your song. Step up to the mic and let your voice do the magic…
          </p>
        </div>
        
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-[#FDE9A3] mt-6">1. SOLO SINGING</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FDE9A3]">• RULES:</h3>
          <ul className="list-disc list-inside text-white space-y-1 font-semibold">
            <li>Time limit: 01:30 to 3 minutes</li>
            <li>Derogatory language is strictly prohibited</li>
            <li>Use of mobile or electronic devices for lyrics is strictly prohibited</li>
            <li>
              The performer can bring musical instrument with them, but no extra points will be allocated for it
            </li>
            <li>The organisers will not be responsible for handling of musical instruments</li>
            <li>
              The participants must submit their music or karaoke to the coordinators 70 minutes prior to the event
            </li>
            <li>
              The sequence number of performances given to you will be final; any excuse will not be accepted
            </li>
            <li>Orchestra will not be provided</li>
            <li>
              The decision by judges will be considered final under all circumstances
            </li>
            <li>Any breach of rules will lead to disqualification</li>
          </ul>
          <p className="text-white font-semibold mt-4">
            • Winners will be awarded with trophies and attractive prizes.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#FDE9A3] mt-6">2. DUET SINGING</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FDE9A3]">• RULES:</h3>
          <ul className="list-disc list-inside text-white space-y-1 font-semibold">
            <li>Time limit: 3 to 4 minutes</li>
            <li>Derogatory language is strictly prohibited</li>
            <li>Use of mobile or electronic devices for lyrics is strictly prohibited</li>
            <li>
              The performers can bring musical instrument with them, but no extra points will be allocated for it
            </li>
            <li>
              The participants must submit their music or karaoke to the coordinators 70 minutes prior to the event
            </li>
            <li>
              The sequence number of performances given to you will be final; any excuse will not be accepted
            </li>
            <li>Orchestra will not be provided</li>
            <li>
              The decision by judges will be considered final under all circumstances
            </li>
            <li>Any breach of rules will lead to disqualification</li>
            <li>
              The organisers will not be responsible for handling of musical instruments
            </li>
          </ul>
          <p className="text-white font-semibold mt-4">
            • Winners will be awarded with trophies and attractive prizes.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/events">
            <button className="flex items-center backdrop-blur-md bg-[#FDE9A3] hover:bg-[#FDE9A3] border border-white text-black text-sm px-8 py-3 rounded-xl shadow-transparent hover:shadow-[#FDE9A3] transition duration-300 ease-in-out transform hover:scale-105 font-semibold space-x-2">
              ← Back to Events
            </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default EventSwarsangamPage;


