import React from "react";
import homeImage from "../../public/home.jpg";
import Hero from "@/components/hero";

export default function LandingPage() {
  return (
    <div>
      <Hero imgAlt="Landing" imgData={homeImage} title="This Is Home Page" />
    </div>
  );
}
