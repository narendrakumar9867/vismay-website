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
    url: "https://vismaygmcmiraj.in/events/runwayrendezvous",
    images:
      "https://res.cloudinary.com/dk1jk0yxz/image/upload/v1747833267/vismay_wdssm1.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

const EventRunwayrendezvousPage = () => {

  return (
    <>
      <Navbar />
      <div className="px-6 py-12 bg-black text-white" >

        { /* Header */}
        <div className="pt-12 pb-8 text-center px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#FDE9A3]">RUNWAY RENDEZVOUS,</span> Fashion show.
          </h1>
          <p className="text-white max-w-3xl mx-auto mt-4 text-lg font-semibold">
            👠 Got the style, the swagger, and a story to tell?
            Then own the runway! Whether it’s bold themes or fierce attitude, let your confidence light up the stage. Step out, strike a pose, and let your fashion do the talking…
          </p>
        </div>
        
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-[#FDE9A3] mt-6">Fashion show</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FDE9A3]">• RULES:</h3>
          <ul className="list-disc list-inside text-white space-y-1 font-semibold">
            <li>There will be only one round</li>
            <li>The teams will perform according to their pre-decided choreography.</li>
            <li>The participants will be judged based on their walk, pose, confidence, attitude, and the presentation of the theme.</li>
            <li>Maximum number of members: 24 per team</li>
            <li>Participants must get their costumes and make arrangements for their hair and makeup by themselves.</li>
            <li>Teams must arrange their own music and slideshows and submit them a day before the show.</li>
            <li>Maximum time for each round is 20 minutes (including setup)</li>
            <li>Teams will be judged based on their coordination, choreography, confidence, attitude, stage presence, and costumes.</li>
            <li>Every team gets to select their own theme and will be judged based on their adherence to the theme.</li>
            <li>Use of inflammable and sharp props is strictly prohibited</li> 
            <li>Indecency, inappropriate acts would straightaway lead to disqualification.</li>
            <li>Best male and female runway walker will be chosen based on costume, posture, stage presence, attitude.</li>
            <li>Judging Criteria: will be judged based on their walking style, pose, confidence, attitude, and presentation of the theme.</li>
            <li>Fashion Show slots are limited.</li>
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

export default EventRunwayrendezvousPage;
