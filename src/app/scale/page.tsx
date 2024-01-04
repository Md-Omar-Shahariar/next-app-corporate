import Hero from "@/components/hero";
import React from "react";
import scaleImage from "../../../public/scale.jpg";
const Scale = () => {
  return (
    <div>
      <Hero imgAlt="Landing" imgData={scaleImage} title="This Is Scale Page" />
    </div>
  );
};

export default Scale;
