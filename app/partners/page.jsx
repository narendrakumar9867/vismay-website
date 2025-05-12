import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TitleSponsorCard from "@/components/TitleSponsorCard";
import SponsorCard from "@/components/ui/cards";

import mlh from "@/public/partnersPage/mlh.webp";
import github from "@/public/partnersPage/github.jpg";
import postman from "@/public/partnersPage/postman.jpg";
import bobble from "@/public/partnersPage/bobble.webp";
import godspeed from "@/public/partnersPage/godSpeed.jpg";
import devfolio from "@/public/partnersPage/devfolio.webp";
import virtualProtocol from "@/public/partnersPage/virtualProtocol.jpg";
import nextgen from "@/public/partnersPage/nextgen.jpg";
import auth0 from "@/public/partnersPage/auth0.webp";
import taipy from "@/public/partnersPage/taipy.jpg";
import godaddy from "@/public/partnersPage/godaddy.webp";

import balsamiq from "@/public/partnersPage/balsamiq.webp";
import edubard from "@/public/partnersPage/edubard.webp";
import wolfram from "@/public/partnersPage/wolfram.webp";
import mongodb from "@/public/partnersPage/mongodb.webp";
import finlatics from "@/public/partnersPage/finlatics.webp";
import jdoodle from "@/public/partnersPage/jdoodle.png";
import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "partners|Vismay",
  description:
    "Relive the magic of Vismay at GMCMirag—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
  keywords:
    "Vismay, GMCMiraj, Cultural Fest, Dance, Drama, Music, Art, Celebration, Gallery, Photos, Videos, Past Events, Previous Editions",
  openGraph: {
    title: "partners|Vismay",
    description:
      "Relive the magic of Vismay at GMCMirag—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
    url: "https://vismaygmcmiraj.in/partners",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

const normalSponsorsData = [
  {
    sponsor: "MLH",
    category: "Platform Partner",
    sponsorimgsrc: mlh,
    site: "https://mlh.io",
  },
  {
    sponsor: "GitHub",
    category: "Gold Sponsor",
    sponsorimgsrc: github,
    site: "https://gh.io/hackbyte2",
  },
  {
    sponsor: "Postman",
    category: "Gold Sponsor",
    sponsorimgsrc: postman,
    site: "https://community.postman.com",
  },
  {
    sponsor: "Bobble Fan Store",
    category: "Merch Partner",
    sponsorimgsrc: bobble,
    site: "https://fanstore.bobble.ai",
  },
  {
    sponsor: "Godspeed Systems",
    category: "Silver Sponsor",
    sponsorimgsrc: godspeed,
    site: "https://godspeed.systems",
  },
  {
    sponsor: "Devfolio",
    category: "Platform Partner",
    sponsorimgsrc: devfolio,
    site: "https://devfolio.co",
  },
  {
    sponsor: "Virtual Protocol",
    category: "Bronze Sponsor",
    sponsorimgsrc: virtualProtocol,
    site: "https://www.virtuals.io/",
  },
  {
    sponsor: "NextGen",
    category: "Bronze Sponsor",
    sponsorimgsrc: nextgen,
    site: "https://nextgenglobalhub.github.io/opensourcecohort/",
  },
  {
    sponsor: "Auth0",
    category: "Track Sponsor",
    sponsorimgsrc: auth0,
    site: "http://hackp.ac/auth0",
  },
  {
    sponsor: "Taipy",
    category: "Track Sponsor",
    sponsorimgsrc: taipy,
    site: "https://hackp.ac/taipy-gettingstarted",
  },
  {
    sponsor: "Go Daddy Registry",
    category: "Track Sponsor",
    sponsorimgsrc: godaddy,
    site: "http://hackp.ac/godaddyregistry",
  },
];

const inKindSponsorsData = [
  {
    sponsor: "Balsamiq",
    category: "Community Sponsor",
    sponsorimgsrc: balsamiq,
    site: "https://balsamiq.com",
  },
  {
    sponsor: "Edubard",
    category: "Media Partner",
    sponsorimgsrc: edubard,
    site: "https://edubard.in",
  },
  {
    sponsor: "Wolfram",
    category: "Community Sponsor",
    sponsorimgsrc: wolfram,
    site: "https://www.wolfram.com/wolfram-one/",
  },
  {
    sponsor: "MongoDB",
    category: "Community Sponsor",
    sponsorimgsrc: mongodb,
    site: "https://www.mongodb.com/",
  },
  {
    sponsor: "Finlatics",
    category: "Community Sponsor",
    sponsorimgsrc: finlatics,
    site: "https://www.finlatics.com/",
  },
  {
    sponsor: "JDoodle",
    category: "Community Sponsor",
    sponsorimgsrc: jdoodle,
    site: "https://www.jdoodle.com/?utm_source=Event+Website&utm_medium=Event+Sponsorship&utm_campaign=HackByte+Sponsorship+2024&utm_id=HackByte+2.0",
  },
];

const Partners = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col items-center min-h-screen 
          px-6 md:px-16 lg:px-20 2xl:px-32 py-40"
      >
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-[#F5F0D8] text-[2rem] font-normal md:text-[5rem]">
            Partners
          </p>
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <p
              className="w-full lg:max-w-[80%] text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
             We are proud to collaborate with visionary organizations that
share our passion for creativity and excellence. These esteemed
partners play a pivotal role in making Vismay a grand success
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="Sponsors"
          className="flex flex-col justify-center items-center text-white"
        >
          <TabsList className="mb-16 w-[19rem] min-w-[321px]:w-80 sm:w-[488px]">
            <TabsTrigger
              value="Sponsors"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl 
                text-xl leading-7"
            >
              Sponsors
            </TabsTrigger>
            <TabsTrigger
              value="InKind Sponsors"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl 
                text-xl leading-7"
            >
              In Kind Sponsors
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Sponsors">
            <div className="w-full flex flex-col items-center gap-8 xl:gap-12">
              <TitleSponsorCard />

              <div
                className="w-full xl:max-w-[95%] 2xl:max-w-[90%] grid grid-cols-1 
                  md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12"
              >
                {normalSponsorsData.map((sponsor, index) => {
                  return <SponsorCard key={index} index={index} {...sponsor} />;
                })}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="InKind Sponsors">
            <div
              className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                gap-8 xl:gap-12"
            >
              {inKindSponsorsData.map((sponsor, index) => {
                return <SponsorCard key={index} index={index} {...sponsor} />;
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

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
      <Footer />
    </div>
  );
};

export default Partners;
