import Hero from "@/components/hero";
import React from "react";
import reliabilityImage from "../../../public/reliability.jpg";

const Reliability = () => {
  return (
    <div>
      <Hero
        imgAlt="Landing"
        imgData={reliabilityImage}
        title="This Is Reliability Page"
      />
    </div>
  );
};

export default Reliability;
