import React from "react";

const Contactme = () => {
  return (
    <>
      <div name="contact" className="w-full mt-5 pt-5">
        <div className="max-w-[1240px] mx-auto pt-3">
          <div className="text-center">
            <h2 className="text-[#f19217] italic text-6xl font-bold">
              Contact Me
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 pl-2 mt-8 pt-8 pb-20 text-center">
            <div className="border py-8 rounded-xl hover:bg-orange-100 hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">LinkedIn</p>
              <a href="https://www.linkedin.com/in/shahbaz-sheikh-b1477b135/">
                <p className="mt-10 px-5 pr-5 hover:text-orange-500 italic text-xl">linkedin.com</p>
              </a>
              {/* <img
                className="w-60 mx-auto mt-10 bg-white"
                src="linkedin.jpg"
                alt="/"
              /> */}
            </div>
            <div className="border py-8 rounded-xl hover:bg-orange-100 hover:scale-105 duration-300">
              <p className="text-black text-2xl font-bold mt-2">Email </p>
              <p className="mt-10 px-2 italic text-xl">
                shahbazsheikh9175@gmail.com
              </p>
              {/* <img
                className="w-60 mx-auto mt-10 bg-white"
                src="email.jpg"
                alt="/"
              /> */}
            </div>

            <div className="border py-8 rounded-xl hover:bg-orange-100  hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">Github</p>
              <a href="https://github.com/"><p className="mt-10 px-2 italic text-xl hover:text-orange-500">
                Shahbazsheikh7888
              </p></a>
              {/* <img
                className="w-60 mx-auto mt-10 bg-white"
                src="github.webp"
                alt="/"
              /> */}
            </div>
            <div className="border py-8 rounded-xl hover:bg-orange-100 hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">Mobile Number</p>
              <a href="https://skshahbaz.netlify.app/"><p className="mt-10 px-2 hover:text-orange-500 italic text-xl">
             +91-7888183898
              </p></a>
              {/* <img
                className="w-60 mx-auto mt-10 bg-white"
                src="website.jpg"
                alt="/"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <hr className="h-1 mx-20 animate-pulse bg-gray-100 "/>
    </>
  );
};

export default Contactme;
