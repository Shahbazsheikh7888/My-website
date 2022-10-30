import React from "react";



const Aboutme = () => {
  return (
    <>
      <div name="aboutme" className="w-full bg-white py-10 px-2">
      <div className="max-w-[1540px] mx-auto p-5  grid md:grid-cols-2">
        <img className="w-[900px] rounded-r-3xl h-72 pr-10 mt-15 pt-2 mr-16" src="/about.jpg" alt="/" />
        <div className="flex flex-col justify-center">
          {/* <p className="text-[#00df9a] font-bold ">COURSES DASHBOARD</p> */}
          <h1 className="  italic text-6xl text-[#8109f8] font-bold">
            About Me !
          </h1>
          <p className="text-3xl font-monospace text-justify italic pt-10">
          I am Shahbaz Sheikh from Yavatmal, Maharashtra . I had completed my Bachelors in Mechanical Engineering in 2018 from Amravati University. Currently , I am working as Python trainer in Navgurukul organisation since last 6 months. Also, recently I have joined Lazarus Network company as a front end developer , where I work with technologies like React.js, Next.js, Tailwind CSS, Bootstrap, HTML, Javascript ,Figma and created many real world projects.
          </p>
          {/* <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
      <hr className="h-1 mx-20 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  " />
    </>
  );
};

export default Aboutme;
