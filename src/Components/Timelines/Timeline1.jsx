import React from 'react'

export const Timeline1 = () => {

    return (

        <div className="flex flex-row-reverse md:flex-col justify-center items-center space-y-2 w-[240px]">
            <div className="h-[57px] md:h-[187px] w-1 rounded-t rounded-b bg-gradient-to-b from-[#B24592] to-[#F15F79] relative">
                <div className="absolute  md:top-0 left-3 flex flex-col justify-center items-start md:justify-start md:items-start w-[200px] space-y-0.5">
                    <div className="text-transparent text-xl font-extrabold bg-clip-text bg-gradient-to-r from-[#B24592] to-[#F15F79] ">
                        Submission Starts
                    </div>
                    <div className=" text-transparent text-base font-bold bg-clip-text bg-gradient-to-r from-[#606C88] to-[#3F4C6B]">
                        December 1, 2025
                    </div>
                    <div className="text-black font-medium text-sm">
                        Submit your idea, objective and outcome
                    </div>
                </div>
            </div>
            <div>
                <div className="hex3 w-[117px] sm:w-[147px] h-[117px] sm:h-[147px] rotate-90 bg-gradient-to-t from-[#B24592] to-[#F15F79] relative">
                    <div className="absolute h-fit px-7 sm:px-10 top-[20%] sm:top-[25%] left-1 -rotate-90 flex flex-col justify-center items-end text-white">
                        <div className="text-5xl">
                        1
                        </div>
                        <div className="text-xl">
                        Dec
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
