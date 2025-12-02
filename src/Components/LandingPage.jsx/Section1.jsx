import React from "react";
import "./Section1.css";
export const Section1 = () => {
  return (
    <div
      style={{ scrollMargin: "15vmin" }}
      className="lg:grid lg:grid-cols-2 place-content-center place-items-center Adjust_Box"
      id="About"
    >
      <div className="w-[699px] Adjust_image1">
        <img src="./assets/section1.png" className="scale-[0.85]" alt="" />
      </div>
      <div className="lg:flex lg:flex-col justify-center items-center space-y-6  Adjust_content1">
        <div className="text-5xl font-extrabold Scintific text-[#4776E6]">
          SCI<span id="eta">&#951;</span>
          <span id="prime">&#8242;</span>TFIC 2k26
        </div>
        <div className="lg:w-[600px] from-neutral-600 text-justify lg:text-[1.4rem] text-[0.87rem] FIX">
          It is a science and technology showcase and exhibition aimed at school
          students across the nation. It boosts the students’ enthusiasm to
          learn about the latest advancements and innovations in the modern
          world. It projects a positive image of technology in their minds by
          empowering them to develop strategic use cases to solve real-world
          problems.
        </div>
      </div>
    </div>
  );
};
