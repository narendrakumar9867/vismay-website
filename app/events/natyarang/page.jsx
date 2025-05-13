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
    url: "https://vismaygmcmiraj.in/events/natyarang",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

const EventnatyarangPage = () => {

  return (
    <>
      <Navbar />
      <div
        className="relative min-h-screen px-6 py-12 text-white overflow-x-hidden"
        style={{
          backgroundImage: "url('/background_image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }} 
      >

        { /* Header */}
        <div className="pt-12 pb-8 text-center px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-blue-500">NATYARANG,</span> Drama Competition.
          </h1>
          <p className="text-black max-w-3xl mx-auto mt-4 text-lg font-semibold">
            Is your group full of drama kings and queens? Then why waste such a
            talent? The stage is open! Let the world hear your dramatic lines and see
            those faces full of expressions...
          </p>
        </div>
        
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-blue-500 mt-6">1. SOLO</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-400">• RULES:</h3>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>Time limit: 3 to 5 minutes</li>
            <li>Language: Hindi, Marathi, English</li>
            <li>Above time limit includes setting up and clearing of stage</li>
            <li>Any genre can be selected</li>
            <li>Indecency or use of foul language will lead to disqualification</li>
            <li>Pre-recorded music can be used</li>
            <li>Must arrange their own props and costumes</li>
            <li>
              Live animals, fire, fluid, sharp, heavy, or inflammable objects are prohibited
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mt-6">• JUDGING CRITERIA:</h3>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>Acting (facial and body expressions)</li>
            <li>Content originality</li>
            <li>Screenplay</li>
            <li>Audience response</li>
            <li>Overall impact</li>
          </ul>

          <p className="text-white font-semibold mt-4">
            • Winners will be awarded with trophies and attractive prizes.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-500 mt-6">2. DUET</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-400">• RULES:</h3>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>Time limit: 5 to 7 minutes</li>
            <li>Language: Hindi, Marathi, English</li>
            <li>Above time limit includes setting up and clearing of stage</li>
            <li>Any genre can be selected</li>
            <li>Indecency or use of foul language will lead to disqualification</li>
            <li>Pre-recorded music can be used</li>
            <li>Must arrange their own props and costumes</li>
            <li>
              Live animals, fire, fluid, sharp, heavy, or inflammable objects are prohibited
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mt-6">• JUDGING CRITERIA:</h3>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>Acting (facial and body expressions)</li>
            <li>Content originality</li>
            <li>Screenplay</li>
            <li>Audience response</li>
            <li>Overall impact</li>
          </ul>

          <p className="text-white font-semibold mt-4">
            • Winners will be awarded with trophies and attractive prizes.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-500 mt-6">3. GROUP</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-400">• RULES:</h3>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>Team size: Maximum 12 participants</li>
            <li>Time limit: 10 - 12 mins</li>
            <li>Language: Hindi, Marathi, English</li>
            <li>Above time limit includes setting up and clearing of stage</li>
            <li>Performers need to clear the stage once their act is complete. Only
                then their time would be stopped</li>
            <li>The team can select any genre</li>
            <li>Indecency or use of foul language will lead to disqualification</li>
            <li>Pre-recorded music can be used</li>
            <li>Participants must arrange their own props and costumes</li>
            <li>
              Live animals, fire, fluid, sharp, heavy, or inflammable objects are prohibited
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mt-6">• JUDGING CRITERIA:</h3>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>Acting (facial and body expressions)</li>
            <li>Content originality</li>
            <li>Screenplay</li>
            <li>Audience response</li>
            <li>Overall impact</li>
            <li>Decision of judges will be final and binding</li>
            <li>Exceeding the time limit will lead to negative points.</li>
            <li>Exceeding time limit by 10% will lead to disqualification.</li>
          </ul>

          <p className="text-white font-semibold mt-4">
            • Winners will be awarded with trophies and attractive prizes.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/events">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition">
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

export default EventnatyarangPage;


