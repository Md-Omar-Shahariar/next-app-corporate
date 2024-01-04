import Hero from "@/components/hero";
import React from "react";
import performanceImage from "../../../public/performance.jpg";

const Performance = () => {
  return (
    <div>
      <Hero
        imgAlt="Landing"
        imgData={performanceImage}
        title="This Is Performance Page"
      />
    </div>
  );
};

export default Performance;
