import React from "react";
import SectionComponent from "./SectionComponent";

export default function Goodbye() {
  return (
    <SectionComponent className="flex flex-col items-center justify-center text-center">
      <h2 className="font-bold text-3xl md:text-5xl text-white uppercase leading-8">
        #Onlinevsreality just got{" "}
        <span className="bg-clip-text bg-gradient-to-r from-[#ff0050] from-40% via-[#00f2ea] via-80% to-[#000000] t0-10%">
          cancelled
        </span>{" "}
      </h2>
      <p className="mt-8 text-white/80 leading-8 md:text-xl text-xl">
        Discover high quality videos with accurate and detailed product
        descriptions.Basically, what you see is what you get.
      </p>
    </SectionComponent>
  );
}
