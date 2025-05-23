"use client";

import { useState, useEffect } from "react";
import styles from "./index.module.css";

const images = [
  "/footer/image1.svg",
  "/footer/image2.svg",
  "/footer/image3.svg",
  "/footer/image4.svg",
];

export default function FooterAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 0.5 * 1000);

    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <div className="flex items-start">
      <div className={`${styles.rotatingContainer}`}>
        <img
          src={images[currentIndex]}
          alt="Footer Image"
          className="w-44 lg:w-52 xl:w-72"
        />
      </div>
    </div>
  );
}
