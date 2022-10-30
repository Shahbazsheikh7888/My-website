import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { MenuIcon, XIcon } from "@heroicons/react/outline";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-gradient-to-r from-purple-100 via-purple-200 to bg-purple-100 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl ml-7 font-bold italic mr-10 sm:text-4xl">Welcome !</h1>
          <ul className="hidden text-black md:flex ml-40 pl-40   mx-10 text-xl p-5 md:space-x-8">
            <li>
              <Link to="home" smooth={true} duration={500} class="cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="aboutme" smooth={true} offset={-200} duration={500} class="cursor-pointer">
                About me
              </Link>
            </li>
            <li>
              <Link to="myskills" smooth={true} offset={-50} duration={500} class="cursor-pointer">
                My skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} offset={-100} duration={500} class="cursor-pointer">
                Projects
              </Link>
            </li>
            <li>
              <Link to="resume" smooth={true} offset={-50} duration={500} class="cursor-pointer">
                Resume
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <Link to="contact"><button  className="text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full mx-5 text-xl italic px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Contact Me
          </button></Link>
          
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute text-black bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500} class="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="aboutme"
            smooth={true}
            offset={-200}
            duration={500}
            class="cursor-pointer"
          >
            About me
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="myskills"
            smooth={true}
            offset={-50}
            duration={500}
            class="cursor-pointer"
          >
            My skills
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="projects"
            smooth={true}
            offset={-100}
            duration={500}
            class="cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="resume"
            smooth={true}
            offset={-50}
            duration={500}
            class="cursor-pointer"
          >
           Resume
          </Link>
        </li>
        

        <div className="flex flex-col my-4">
        <a href="https://marketplace.flexabledats.com/"><button className="bg-transparent text-black hover:text-purple-800 px-8 ">
            Contact Me
          </button></a>
          
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
