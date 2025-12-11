import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Fragment } from "react";
import "./Navbar.css";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {SubmitIdea} from "./SubmitIdea"
AOS.init();

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="flex flex-row justify-between items-center p-4 text-[#272727] Navbar bg-white shadow-md z-20 ">
        <div className="flex flex-row justify-start items-center space-x-2 cursor-pointer Logo">
          <div className="flex flex-row justify-start items-center space-x-2 cursor-pointer">
            <div>
              <img
                src="./assets/logo.png"
                className="h-[64px] w-[64px] NavbarLogo"
                alt=""
              />
            </div>
            <a
              href="#top"
              className="font-medium text-lg cursor-pointer Adjust hover:text-[#5172E7] duration-300"
            >
              <div className="flex flex-col uppercase justify-start items-start font-semibold text-xl tracking-wide -space-y-2.5 NavbarTitle ">
                <div>DR SPM IIIT</div>
                <div>NAYA RAIPUR</div>
              </div>
            </a>
          </div>
          <div className="Hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div
          className={
            "flex flex-row justify-center items-center space-x-8 NavbarDisplay NavbarAbout "
          }
        >
          <a
            href="#About"
            className="font-medium text-lg cursor-pointer Adjust hover:text-[#5172E7] duration-300"
          >
            About
          </a>
          <a
            href="#themes"
            className="font-medium text-lg cursor-pointer hover:text-[#5172E7] duration-300"
          >
            Themes
          </a>
          <a
            href="#timeline"
            className="font-medium text-lg cursor-pointer  hover:text-[#5172E7] duration-300"
          >
            Timeline
          </a>
          {/* <div className="font-medium text-lg cursor-pointer">Schedule</div> */}
          <a
            href="#participate"
            className="font-medium text-lg cursor-pointer hover:text-[#5172E7] duration-300"
          >
            How to participate
          </a>
          <a
            href="#contact"
            className="font-medium text-lg cursor-pointer hover:text-[#5172E7] duration-300"
          >
            Contact
          </a>
        </div>
        {!isOpen ? (
          <div className="NavbarDisplay NavbarAbout">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf4fsyPWqmiVY5thgJNao-a8xZRELwj7GjCSKjR2HYOmjh_kg/viewform"
              target="_blank"
              class="text-[#5172E7] w-[250px] h-[48px] rounded-full border drop-shadow-lg flex justify-center items-center bg-white font-semibold text-opacity-80 cursor-pointer transition-transform transform hover:scale-105 hover:drop-shadow-xl duration-300 ease-in-out "
              rel="noreferrer"
            >
              Submit Your Idea
            </a>
          </div>
          
        ) : (
          ""
        )}

        {isOpen ? (
          <>
            <div
              className={
                !isOpen
                  ? ""
                  : "NAV_ABOUT flex flex-row justify-center items-center NavbarDisplay "
              }
              data-aos="fade-up-down"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              <a
                href="#About"
                className="font-medium text-lg cursor-pointer AboutFix"
              >
                About
              </a>
              <a href="#themes" className="font-medium text-lg cursor-pointer ">
                Themes
              </a>
              <a
                href="#timeline"
                className="font-medium text-lg cursor-pointer "
              >
                Timeline
              </a>
              {/* <div className="font-medium text-lg cursor-pointer">Schedule</div> */}
              <a
                href="#participate"
                className="font-medium text-lg cursor-pointer"
              >
                How to participate
              </a>
              <a
                href="#contact1"
                smooth="true"
                duration="1000"
                className="font-medium text-lg cursor-pointer"
              >
                Contact
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf4fsyPWqmiVY5thgJNao-a8xZRELwj7GjCSKjR2HYOmjh_kg/viewform"
                target="_blank"
                className="text-[#5172E7] p-3 rounded-full border drop-shadow-lg  bg-white font-semibold text-opacity-80 cursor-pointer hover:drop-shadow-xl transition duration-100 SubmitIdea "
                rel="noreferrer"
              >
                Submit Your Idea
              </a>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};
