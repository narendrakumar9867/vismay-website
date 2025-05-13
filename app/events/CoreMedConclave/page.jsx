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
    url: "https://vismaygmcmiraj.in/events/CoreMedConclave",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

const EventCoremedconclavePage = () => {

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
            <span className="text-blue-500">CoreMedConclave,</span> Quiz competition.
          </h1>
          <p className="text-black max-w-3xl mx-auto mt-4 text-lg font-semibold">
            Do you have a mind full of facts and a heart that loves challenges? Step into the spotlight and put your knowledge to the test. Gather your team, trust your instincts, and let the quiz begin—because every answer brings you closer to victory!
          </p>
        </div>
        
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-400">• RULES:</h3>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>All UG students can participate in the quiz</li>
            <li>A team of 3 members is compulsory. Members from different batches can be present in a team</li>
            <li>
                The quiz will be based on all the preclinical subjects namely Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, and Microbiology
            </li>
            <li>
                Online screening round will be held and the top 5 teams will qualify for the main quiz
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-blue-400 mt-6">Format of the Main quiz</h3>
          <h2 className="text-xl font-semibold text-blue-400 mt-6">Round 1 - Mcqs</h2>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>Multiple choice questions - 2 questions per team</li>
            <li>+10 for correct answer and -5 for wrong answer</li>
            <li>Time per question: 20 seconds</li>
            <li>The question will be passed to the next team if a wrong answer is given</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-400 mt-6">Round 2 - Connect the dots</h2>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>Image based question - 2 questions per team</li>
            <li>2-3 images will be shown and 2 questions will be asked related to
            it</li>
            <li>+10 for correct answer. No negative marking in this round</li>
            <li>Time per question - 15 seconds.</li>
            <li>No passing</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-400 mt-6">Round 3 - Clinical case</h2>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>1 clinical case-based question will be asked per team</li>
            <li>+10 for correct answer, -5 for wrong answer</li>
            <li>Time per question: 1 minute</li>
            <li>The question will be passed to the next team if a wrong answer is given</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-400 mt-6">Round 4- Audiovisual round</h2>
          <ul className="list-disc list-inside text-black space-y-1 font-semibold">
            <li>A clip will be played on the screen as a hint and 2 questions will be
            asked related to it</li>
            <li>Time per question 30 seconds</li>
            <li>1 clip per team</li>
            <li>+10 for correct answer</li>
            <li>No negative marking</li>
            <li>No passing</li>
          </ul>
          <p className="text-white font-semibold mt-4">
            • In case of a tie a tie breaker round will decide the final winner. Winners will be awarded with trophies and attractive prizes.
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

export default EventCoremedconclavePage;

