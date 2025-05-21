import Image from "next/image";

import img1 from "@/public/galleryPage/img1.webp";
import img2 from "@/public/galleryPage/img2.webp"; 
import img3 from "@/public/galleryPage/img3.webp";
import img4 from "@/public/galleryPage/img4.webp";
import img5 from "@/public/galleryPage/img5.webp";
import img6 from "@/public/galleryPage/img6.webp";
import img7 from "@/public/galleryPage/img7.webp";
import img8 from "@/public/galleryPage/img8.webp";
import img9 from "@/public/galleryPage/img9.webp";
import img10 from "@/public/galleryPage/img10.jpg";
import img11 from "@/public/galleryPage/img11.jpg";
import img12 from "@/public/galleryPage/img12.jpg";
import img13 from "@/public/galleryPage/img13.jpg";
import img14 from "@/public/galleryPage/img14.jpg";
import img15 from "@/public/galleryPage/img15.jpg";

const GridImage = () => {
  const images = [
    img6, img7, img4, img8, img3, img5,
    img1, img2, img9, img10, img11, img12,
    img13, img14, img15
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full rounded-xl object-cover"
              placeholder="blur"
              priority={index < 6}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const BannerImage = ({ imgsrc }) => {
  return (
    <Image
      src={imgsrc}
      alt="Banner"
      className="xl:w-[1080px] xl:h-[470px] lg:w-[880px] lg:h-[380px] md:w-[672px] md:h-[288px] w-[290px] h-[125px] rounded-xl object-cover"
      placeholder="blur"
      quality={100}
    />
  );
};

export { GridImage, BannerImage };