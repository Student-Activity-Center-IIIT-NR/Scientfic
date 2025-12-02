import React from "react";
// import { useState } from 'react'

export const ThemeCard = ({ theme, color }) => {
  // const [show, setShow] = useState(false)

  return (
    <div className="w-[17rem] flex flex-col ">
      <div className="w-full h-[14vw]">
        <img
          className="w-full h-full object-contain"
          alt="theme"
          src={theme.image}
        />
      </div>

      <div className="h-[3rem] flex w-full flex-row justify-between items-center mt-1">
        <div>{theme.name}</div>
        {/* <button className={`text-[30px] text-center text-[${color[0]}]`}
                    onClick={() => setShow(!show)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button> */}
      </div>
      <div
        className={`rounded-md h-[0.2rem] bg-gradient-to-r from-[${color[0]}] to-[${color[1]}]`}
      ></div>

      {/* <div className={`bg-orange-200 p-1 flex w-full flex-row justify-between ${show ? "scale-60 opacity-100" : "scale-0 opacity-0 translate-y-[-100%]"} transition-all duration-300`}>
                <div>{theme.description}</div>
            </div> */}
    </div>
  );
};
