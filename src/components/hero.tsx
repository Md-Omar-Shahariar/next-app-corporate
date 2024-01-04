import React from "react";
import Image, { type StaticImageData } from "next/image";
interface HeroProps {
  imgAlt: string;
  imgData: StaticImageData;
  title: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image src={props.imgData} alt={props.imgAlt} fill />
        <div className="absolute inset-0 bg-gradient-to-b  from-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t  from-slate-900"></div>
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
