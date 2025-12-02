import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="mx-4">
        <div
          className="hidden sm:grid grid-cols-2 place-content-center place-items-start w-full my-2"
          id="contact"
        >
          <div className="flex flex-col justify-start items-start space-y-20 px-6 lg:px-10 xl:px-24">
            <div className="flex flex-col justify-start items-start text-4xl lg:text-5xl xl:text-6xl font-extrabold -space-y-1">
              <div className="drop-shadow-xl shadow-[#5172E7]">
                Get in TOUCH
              </div>
              <div className="drop-shadow-xl shadow-[#5172E7]">with US.</div>
            </div>
            <div className="text-[1.7rem]  text-transparent bg-clip-text bg-gradient-to-r from-[#B24592] to-[#F15F79] font-semibold ">Email : scintfic_iiitnr@iiitnr.ac.in</div>
        
            <div className="flex flex-col justify-start items-start text-sm lg:text-base  space-y-2">
              <div>
                <img
                  src="./assets/logo.png"
                  className="h-12 lg:w-16 w-12 lg:h-16"
                  alt=""
                />
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Dr SPM International Institute of Information Technology, Naya
                Raipur
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Plot No-07, Sector-24, Near Purkhoti Muktangan, Nava Raipur,
                Atal Nagar, Chattisgarh-493661
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Ph: 0771-2474040
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start px-6 lg:px-10">
            <div className="flex flex-col justify-between items-start space-y-4">
              <div className="flex flex-col justify-start items-start space-y-2">
                <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                  Faculty Co-ordinators
                </div>
                <div className="text-sm lg:text-base">
                  Dr. Chandra Shekhar Nishad
                </div>
                <div className="text-sm lg:text-base">
                  Dr. Kavita Jaiswal
                 
                </div>
              </div>
              {/* <div className="flex flex-col justify-start items-start space-y-2">
                <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                  Student Co-ordinators
                </div>
                <div className="flex flex-col justify-start items-start space-y-0.5">
                  <div className="text-sm lg:text-base">
                  Anushka Ekka - 7828707144

                  </div>
                  <div className="text-sm lg:text-base">
                  Shreyansh Kushwaha- 9827302564

                  </div>
                  <div className="text-sm lg:text-base">
                  Vaishnavi Shrivastava- 7972247523
                  </div>
                </div>
              </div> */}
              {/* <div className="flex flex-col justify-start items-start space-y-2">
                <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                  Website team members
                </div>
                <div className="grid grid-cols-2 place-content-center place-items-start">
                  <div className="text-sm lg:text-base">Yash Joshi</div><br></br>
                  <div className="text-sm lg:text-base">Chiman Esda</div>
                  <div className="text-sm lg:text-base">Yog Verma</div>
                </div>
              </div> */}
              <div className="flex flex-col justify-start items-start space-y-2">
                <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                  Social Media Accounts
                </div>
                <div className="grid grid-cols-3 gap-x-4 place-content-center place-items-start">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/scintfic_iiitnr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ width: "5vmin" }}
                      src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                      alt="Instagram logo"
                    />
                  </a>
                  {/* Linkedin */}
                  <a
                    href="https://in.linkedin.com/company/scintfic-iiit-naya-raipur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ width: "5vmin" }}
                      src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
                      alt="Linkedin logo"
                    />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://twitter.com/SCInTFICiiitnr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ width: "4.7vmin", marginTop: "0.4vmin" }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1200px-X_logo_2023.svg.png"
                      alt="Twitter logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center space-y-6 sm:hidden px-2"
          id="contact1"
        >
          <div className="flex flex-col justify-center items-center text-3xl">
            <div className="drop-shadow-xl shadow-[#5172E7] uppercase font-bold">
              Get in TOUCH WITH US.
            </div>
          </div>
          <div className="text-[1.7rem]  text-transparent bg-clip-text bg-gradient-to-r from-[#B24592] to-[#F15F79] font-semibold ">Email : scintfic_iiitnr@iiitnr.ac.in</div>
          <div className="flex flex-col justify-center items-start space-y-3">
            <div className="flex flex-col justify-start items-start space-y-1">
              <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                Faculty Co-ordinators
              </div>
              <div className="text-sm lg:text-base">
                Dr. Kavita Jaiswal: +917000041643
              </div>
              <div className="text-sm lg:text-base">
                Dr. Chandra Shekhar Nishad 
              </div>
            </div>
            {/* <div className="flex flex-col justify-start items-start space-y-1">
              <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                Student Co-ordinators
              </div>
              <div className="flex flex-col justify-start items-start space-y-0.5">
                <div className="text-sm lg:text-base">
                Anushka Ekka - 7828707144
                </div>
                <div className="text-sm lg:text-base">
                Shreyansh Kushwaha- 9827302564
                </div>
                <div className="text-sm lg:text-base">
                Vaishnavi Shrivastava- 7972247523
                </div>
              </div>
            </div> */}
            {/* <div className="flex flex-col justify-start items-start space-y-2">
              <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base">
                Organizing Student team members
              </div>
              <div className="grid grid-cols-2 place-content-center place-items-start">
                <div className="text-sm lg:text-base">Yash Joshi</div>
                <div className="text-sm lg:text-base">Chiman</div>
                <div className="text-sm lg:text-base">Yog Kumar</div>


                <div className="text-sm lg:text-base"></div>
              </div>
            </div> */}
            <div className="flex flex-col justify-start items-start space-y-2">
              <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                Social Media Accounts
              </div>
              <div className="grid grid-cols-3 gap-x-4 place-content-center place-items-start">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/scintfic_iiitnr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ width: "5vmin" }}
                    src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                    alt="Instagram logo"
                  />
                </a>
                {/* Linkedin */}
                <a
                  href="https://in.linkedin.com/company/scintfic-iiit-naya-raipur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ width: "5vmin" }}
                    src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
                    alt="Linkedin logo"
                  />
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com/SCInTFICiiitnr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ width: "4.7vmin", marginTop: "0.4vmin" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1200px-X_logo_2023.svg.png"
                    alt="Twitter logo"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start text-sm lg:text-base  space-y-2">
              <div>
                <img
                  src="./assets/logo.png"
                  className="h-12 lg:w-16 w-12 lg:h-16"
                  alt=""
                />
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Dr SPM International Institute of Information Technology, Naya
                Raipur
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Plot No-07, Sector-24, Near Purkhoti Muktangan, Nava Raipur,
                Atal Nagar, Chattisgarh-493661
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Ph: 0771-2474040
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
