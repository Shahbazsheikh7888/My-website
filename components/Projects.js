import React from "react";

const Projects = () => {
  return (
    <>
      {/* <div name="projects" className="bg-white  mt-5 pt-5">
        <div className="items-center text-center pt-3">
          <h1 className="italic text-6xl text-[#8109f8] font-bold">Projects</h1>
        </div>
        <div className="max-w-[1240px] text-black pb-10 text-justify mx-auto pt-8 ">
          <p className="text-3xl mx-10 italic">
            <ul className="p-5">
              <li className="mt-3 text-3xl">
                1. My portfolio - <br /> 
              </li>
              <li className="mt-2 text-xl">Skills used - Next.js,
                Tailwind.CSS, Javascript, HTML.</li>
              <li className="mt-3 text-3xl">
                2. Skillwallah (Online coding platform) - <br />
              </li>
              <li className="mt-2 text-xl"> Skills used -
                React.js, Tailwind.CSS, Javascript, HTML.</li>
              <li className="mt-3 text-3xl">
                3. Event Website - <br /> 
              </li>
              <li className="mt-2 text-xl">Skills used - Next.js,
                Tailwind.CSS, Javascript, HTML.</li>
              <li className="mt-3 text-3xl">
                4. Coaching Website - <br /> 
              </li>
              <li  className="mt-2 text-xl" >Skills used - 
                Bootstrap, Javascript, HTML.</li>
            </ul>
          </p>
          
        </div>
      </div> */}
       <div name="projects" className="w-full mt-5 pt-5">
        <div className="max-w-[1240px] mx-auto pt-3">
          <div className="text-center">
            <h2 className="text-[#8109f8] italic text-6xl font-bold">
             Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 pl-2 mt-8 pt-8 pb-20 text-center">
            <div className="border py-8 rounded-xl  hover:scale-105 duration-300">
              <p className="text-black text-2xl font-bold mt-2">1. My portfolio </p>
              <p className="mt-20 px-2 italic text-xl">Skills used - Next.js,
                Tailwind.CSS, Javascript, HTML.</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="portfolio.png" alt="/" />
              
            </div>
            <div className="border py-8 rounded-xl hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">2. Skillwallah (Online coding platform)</p>
              <p className="mt-11 px-2 italic text-xl">Skills used -
                React.js, Tailwind.CSS, Javascript, HTML.</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="skillwallah.png" alt="/" />
            </div>
            <div className="border py-8 rounded-xl  hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">3. Event Website</p>
              <p className="mt-20 px-2 italic text-xl">Skills used - Next.js,
                Tailwind.CSS, Javascript, HTML.</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="event.png" alt="/" />
            </div>
            <div className="border py-8 rounded-xl  hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2"> 4. Coaching Website</p>
              <p className="mt-20 px-2 italic text-xl">Skills used - 
                Bootstrap, Javascript, HTML.</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="coaching.png" alt="/" />
            </div>
         
          
          </div>
        </div>
      </div>
      <hr className="h-1 mx-20 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  " />
    </>
  );
};

export default Projects;
