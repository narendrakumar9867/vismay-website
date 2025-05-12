import Link from "next/link";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

const Footer = () => {
  
  return (
    <div className="bg-black flex flex-col px-4 md:px-10 xl:px-28">
      <hr className="border-[#808080] mb-12" />
      <div className="flex flex-col lg:flex-row gap-12 justify-between items-start">
        <div className="flex gap-6 lg:ml-auto"> {/* Added lg:ml-auto */}
          <SocialMediaIcon
            href="https://www.instagram.com/vismay_gmcmiraj/"
            Icon={InstagramLogoIcon}
          />
          <SocialMediaIcon
            href="https://wa.me/917506112522?text=Hello!%20I%27m%20interested%20in%20participating%20in%20the%20quiz%20competition%20at%20VISMAY%202025.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20register."
            Icon={FaWhatsapp}
          />
        </div>
      </div>
      <p
        className="text-white text-lg font-normal leading-normal 
          tracking-tight pt-12 mb-8"
        style={{ wordSpacing: "0.2em" }}
      >
        <span style={{ margin: "0.2em" }}>© 2025 Vismay, All rights reserved; Designed by</span> 
        <a 
          href="https://www.linkedin.com/in/rushabh-doshi-aba7b0241/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:underline"
        >
          Rushabh Doshi
        </a> 
        <span style={{ margin: "0.2em" }}>&</span>
        <a 
          href="https://www.linkedin.com/in/narendrakumar-kumawat-474647257/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:underline"
        >
          Narendrakumar Kumawat
        </a>
      </p>
    </div>
  );
};

export default Footer;
