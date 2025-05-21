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
    url: "https://vismaygmcmiraj.in/events/vadyavishwa",
    images:
      "https://res.cloudinary.com/dk1jk0yxz/image/upload/v1747833267/vismay_wdssm1.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

const EventVadyavishwaPage = () => {

  return (
    <>
      <Navbar />
      <div className="px-6 py-12 bg-black text-white">

        { /* Header */}
        <div className="pt-12 pb-8 text-center px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#FDE9A3]">VADYAVISHWA,</span> Music competition.
          </h1>
          <p className="text-white max-w-3xl mx-auto mt-4 text-lg font-semibold">
            🎶 Feel the rhythm? Got music running through your veins?
            Then let the strings sing, the drums roar, and the keys dance! Whether you're a band, a solo artist, or an instrumentalist, the stage is yours to create magic. Show us the power of your sound and let your music speak louder than words...
          </p>
        </div>
        
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-[#FDE9A3] mt-6">1. BATTLE OF BANDS</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FDE9A3]">• RULES:</h3>
          <ul className="list-disc list-inside text-white space-y-1 font-semibold">
            <li>Time limit: 25 to 30 minutes.</li>
            <li>Derogatory language is strictly prohibited.</li>
            <li>Only one entry is allowed per band.</li>
            <li>Participants to bring their own musical instruments. Any damage to the musical instruments won't be the responsibility of the Organisers.</li>
            <li>Multiple bands from the same college can register, but members must not overlap (one person can't play for more than one band). They will be processed as separate entries.</li>
            <li>No on-spot registration will be entertained.</li>
            <li>Pre-recorded tracks and use of MIDI instruments is not allowed. Using it would lead to disqualification of the band.</li>
            <li>The participants should report at the venue 70 minutes prior to the start of the event.</li>
            <li>The sequence number of performances given to you will be final. Any excuse will not be accepted.</li>
            <li>The decision by judges will be considered final under all circumstances.</li>
            <li>Any breach of rules will lead to disqualification.</li>
          </ul>
          <p className="text-white font-semibold mt-4">
            • Winners will be awarded with trophies and attractive prizes.
          </p>

          <h2 className="text-2xl font-semibold text-[#FDE9A3] mt-6">2. INSTRUMENTALS</h2>

          <h3 className="text-xl font-semibold text-[#FDE9A3]">• RULES:</h3>
          <ul className="list-disc list-inside text-white space-y-1 font-semibold">
            <li>Time limit: 4 to 5 minutes (including instruments checking and set up)</li>
            <li>Max no. of participants: 3</li>
            <li>Participants to bring their own instruments.</li>
            <li>EDMs and Rhythm pads are not allowed.</li>
            <li>No backing tracks.</li>
            <li>An acoustic guitar or keyboard allowed, must be notified beforehand. Damage to the musical instruments won’t be the responsibility of the organisers.</li>
            <li>Participants to report 70 minutes prior to the start of the event at the venue.</li>
            <li>The sequence number of performances given to you will be final. Any excuse will not be accepted.</li>
            <li>The decision by judges will be considered final under all circumstances.</li>
            <li>Any breach of rules will lead to disqualification.</li>
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

export default EventVadyavishwaPage;
