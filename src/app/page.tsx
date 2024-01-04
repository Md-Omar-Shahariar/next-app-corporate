import Image from "next/image";
import Link from "next/link";
import React from "react";
import homeImage from "../../public/home.jpg";

export default function LandingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Landing Page</h1>
      <div className="absolute -z-10 inset-0">
        <Image src={homeImage} alt="Land" fill />
      </div>
    </div>
  );
}
