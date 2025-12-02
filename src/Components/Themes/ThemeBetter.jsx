import React from "react";
import { ThemeCard } from "./ThemeCard";
import { ThemeCard1 } from "./ThemeCard1";
import { ThemeCard2 } from "./ThemeCard2";

export const ThemeBetter = () => {
  const themes = {
    "C3-5": [
      {
        name: "Make in India",
        image: "./assets/themes/1.PNG",
        description:
          "",
      },
      {
        name: "Waste management and Garbage disposal",
        image: "./assets/themes/2.PNG",
        description:
          "",
      },
      {
        name: "Renewable vs. Non-Renewable Energy Sources",
        image: "./assets/themes/3.PNG",
        description:
          "",
      },
    ],
    "C5-8": [
      {
        name: "Climate Change & Its Effects",
        image: "./assets/themes/4.PNG",
        description:
          "",
        },
      {
        name: "Forest Ecosystems",
        image: "./assets/themes/5.PNG",
        description:
          "",
        },
      {
        name: "Science Behind Traditional Indian Practices",
        image: "./assets/themes/6.PNG",
        description:
          "",
        },
    ],
    "C9-12": [
      {
        name: "Cybersecurity & Digital Safety",
        image: "./assets/themes/7.PNG",
        description:
          "",
        },
      {
        name: "Green Energy Innovations",
        image: "./assets/themes/8.PNG",
        description:
          "",
        },
      {
        name: "Nanotechnology in Modern World",
        image: "./assets/themes/9.PNG",
        description:
          "",
        },
      
    ],
  };

  return (
    <div
      style={{ scrollMargin: "20vmin" }}
      className="w-full flex flex-col items-center font-extrabold space-y-8"
      id="themes"
    >
      <div className="uppercase text-4xl font-extrabold pb-10">Themes</div>

      <div className="w-full flex flex-col sm:flex-row px-10  justify-center items-center sm:justify-between">
        <div className="basis-1/3 flex-col  bg-gradient-to-r from-[#FF8008] to-[#FFC837] inline-block text-transparent bg-clip-text text-center pt-10 ">
          <div className="text-[20px]">Class</div>
          <div className="text-[60px]">3-5</div>
        </div>
        <div className="basis-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-5">
          {themes["C3-5"].map((theme, index) => {
            return (
              <ThemeCard
                color={["#FF8008", "#FFC837"]}
                theme={theme}
                key={index}
                
              />
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row  px-10 justify-center items-center sm:justify-between">
        <div className="basis-1/3 flex-col  bg-gradient-to-r from-[#0052D4] to-[#6FB1FC] inline-block text-transparent bg-clip-text text-center pt-10 ">
          <div className="text-[20px]">Class</div>
          <div className="text-[60px]">6-8</div>
        </div>
        <div className="basis-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7">
          {themes["C5-8"].map((theme, index) => {
            return (
              <ThemeCard1
                color={["#0052D4", "#6FB1FC"]}
                theme={theme}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row px-10  justify-center items-center sm:justify-between">
        <div className="basis-1/3 flex-col  bg-gradient-to-r from-[#4CB8C4] to-[#3CD3AD] inline-block text-transparent bg-clip-text text-center pt-10 ">
          <div className="text-[20px]">Class</div>
          <div className="text-[60px]">9-12</div>
        </div>
        <div className="basis-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-3">
          {themes["C9-12"].map((theme, index) => {
            return (
              <ThemeCard2
                color={["#4CB8C4", "#3CD3AD"]}
                theme={theme}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
