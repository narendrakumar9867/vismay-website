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
    url: "https://vismaygmcmiraj.in/events/antarnaad",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

const EventAntarnaadPage = () => {

  return (
    <>
      <Navbar />
      <div className="px-6 py-12 bg-black text-white">

        { /* Header */}
        <div className="pt-12 pb-8 text-center px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-yellow-500">ANTARNAAD,</span> Open mic competition.
          </h1>
          <p className="text-white max-w-3xl mx-auto mt-4 text-lg font-semibold">
            Are you talented? But not getting a platform, worry not. Be confident,
            hold the mic and showcase your talent in the open mic. Let the voice
            of your mind be heard...
          </p>
        </div>
        
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-500">• RULES:</h3>
          <ul className="list-disc list-inside text-white space-y-1 font-semibold">
            <li>Time limit: 1-2 minutes</li>
            <li>Language: Hindi, Marathi or English</li>
            <li>The participant can select any genre</li>
            <li>Indecency or use of any foul language will lead to disqualification</li>
            <li>No backing track allowed</li>
            <li>Decision of judges will be final and binding</li>
            <li>Participants must report to the venue at informed time</li>
            <li>Any breach of rules will lead to disqualification</li>
          </ul>
          <h3 className="text-xl font-semibold text-yellow-500 mt-6">Entry fees: ₹100/-</h3>
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

export default EventAntarnaadPage;
