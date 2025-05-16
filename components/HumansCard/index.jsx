"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import behanceLogo from "../../public/behanceLogo.svg";

// Reusable icon component
const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

// Main HumansCard component
const HumansCard = ({
  index,
  name,
  role,
  profilepic,
  instagram,
  whatsapp,
}) => {
  const defaultGradient =
    "radial-gradient(100% at center, #363636 100%, #1A1A1A 27%)";

  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50,
        y: index % 3 === 1 ? 20 : 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <div
        className="flex flex-col gap-3 w-[260px] shadow text-white"
        style={{ background: defaultGradient }}
      >
        <Image
          src={profilepic}
          className="w-full h-[400px] object-cover rounded-t-lg"
          placeholder="blur"
          alt={`Profile of ${name}`}
          width={260}
          height={320}
        />

        <div className="w-full flex flex-col gap-2 rounded-b-[8px] p-1">
          <p className="sm:text-2xl text-xl text-white">{name}</p>
          {role && (
            <p className="font-[Inter] text-[#D1CAC7] text-lg sm:text-xl leading-9">
              {role}
            </p>
          )}
          <div className="flex gap-6 py-2">
            {name === "Aditya Raj" && (
              <a
                href="https://www.behance.net/adi_ux"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={behanceLogo}
                  className="w-7 h-7"
                  alt="Behance Logo"
                />
              </a>
            )}
            {instagram && (
              <SocialMediaIcon href={instagram} Icon={InstagramLogoIcon} />
            )}
            {whatsapp && (
              <SocialMediaIcon href={whatsapp} Icon={FaWhatsapp} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HumansCard;
