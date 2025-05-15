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
    url: "https://vismaygmcmiraj.in/events/kalavishkar",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

const EventKalavishkarPage = () => {

  return (
    <>
      <Navbar />
      <div className="px-6 py-12 bg-black text-white" >

        { /* Header */}
        <div className="pt-12 pb-8 text-center px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#FDE9A3]">KALAVISHKAAR,</span> DRAWING COMPETITION.
          </h1>
          <p className="text-white max-w-3xl mx-auto mt-4 text-lg font-semibold">
            🎨 Got a vision that speaks louder than words?
            Then let your colors flow! Whether it's bold strokes or fine lines, bring your imagination to life and let your artwork tell a story. The canvas is waiting — make it unforgettable…
          </p>
        </div>
        
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-[#FDE9A3] mt-6">1. DRAWING COMPETITION</h2>

        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#FDE9A3]">• Details:</h3>
            <ul className="list-disc list-inside text-white space-y-1 font-semibold">
                <li>Open for all UGs, Interns, and PGs</li>
                <li>Participant is free to use any medium of drawing (acrylics, watercolours, poster colours, crayons, etc.)</li>
                <li>Sketches are also welcomed</li>
                <li>Theme: <strong>‘Myth, Maya, Mystery’</strong></li>
            </ul>

            <h3 className="text-xl font-semibold text-[#FDE9A3]">• Rules:</h3>
            <ul className="list-disc list-inside text-white space-y-1 font-semibold">
                <li>Participants should send a minimum of 2 photos of the drawing in PDF or JPEG format</li>
                <li>All photos should be mailed to: vismaydrawing@gmail.com</li>
                <li>A special caption is required: Why is your drawing theme appropriate?</li>
                <li>Use of AI-generated images and piracy will lead to disqualification</li>
                <li>Last date of submission: 15 May</li>
            </ul>

          <h3 className="text-xl font-semibold text-[#FDE9A3]">• Judging criteria:</h3>
          <ul className="list-disc list-inside text-white space-y-1 font-semibold">
            <li>Interpretation and the clarity of the theme to the viewer</li>
            <li>Creativity and originality of the depicted theme</li>
            <li>Quality of artistic composition and overall design based on the theme</li>
            <li>
                Overall impression through the art. The winner will not be decided on the basis of likes and comments; it will be based on the above criteria
            </li>
          </ul>
          <p className="text-white font-semibold mt-4">
            • Winners will be awarded with trophies and attractive prizes.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#FDE9A3] mt-6">2. PHOTOGRAPHY</h2>

        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#FDE9A3]">• Details:</h3>
            <ul className="list-disc list-inside text-white space-y-1 font-semibold">
                <li>Open for all UGs, INTERNS, and PGs</li>
                <li>Type/Genre of pictures (street, wildlife, etc.) is the complete choice of the participant</li>
                <li>Special caption required: Why did you decide to capture the said image?</li>
                <li>Last date of submission: <strong>15th May</strong></li>
            </ul>

            <p className="text-white font-semibold mt-4">
                NOTE: Al generation of images and piracy will Lead to
                Disqualification.
            </p>

            <h3 className="text-xl font-semibold text-[#FDE9A3]">• Rules:</h3>
            <ul className="list-disc list-inside text-white space-y-1 font-semibold">
                <li>Minimum 2 photos of the category participants are participating in</li>
                <li>All photos should be sent to the given email address in PDF or JPEG format. Email id: <strong>gmcmvismay@gmail.com</strong></li>
                <li>Judge's decision will be final</li>
            </ul>

          <h3 className="text-xl font-semibold text-[#FDE9A3]">• Judging criteria:</h3>
          <ul className="list-disc list-inside text-white space-y-1 font-semibold">
            <li>Its impact</li>
            <li>The lighting</li>
            <li>The story it tells</li>
            <li>Technical quality</li>
            <li>Creativity</li>
            <li>Composition</li>
            <li>Points of interest</li>
            <li>Use of colour - style</li>
            <li>Presentation</li>
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

export default EventKalavishkarPage;
