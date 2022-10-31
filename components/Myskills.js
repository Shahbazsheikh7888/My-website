import React from "react";

const Howitworks = () => {
  return (
    <>
      <div name="myskills" className="w-full mt-5 pt-5">
        <div className="max-w-[1240px] mx-auto pt-3">
          <div className="text-center">
            <h2 className="text-[#f19217] italic text-6xl font-bold">
             My skills
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 pl-2 mt-8 pt-8 pb-20 text-center">
            <div className="border py-8 rounded-xl bg-orange-100 hover:bg-orange-300  hover:scale-105 duration-300">
              <p className="text-black text-2xl font-bold mt-2">React.js</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="React Cover.jpg" alt="/" />
              
            </div>
            <div className="border py-8 rounded-xl bg-orange-100 hover:bg-orange-300 hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">Javascript</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="javascript.png" alt="/" />
            </div>
            <div className="border py-8 rounded-xl bg-orange-100 hover:bg-orange-300 hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">Tailwind CSS</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="tailwind.png" alt="/" />
            </div>
            <div className="border py-8 rounded-xl bg-orange-100 hover:bg-orange-300  hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">Next.js</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="next.js.png" alt="/" />
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4 pl-2 mt-2 pb-20 text-center">
            <div className="border py-8 rounded-xl bg-orange-100 hover:bg-orange-300  hover:scale-105 duration-300">
              <p className="text-black text-2xl font-bold  mt-2">Bootstrap</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="bootstrap-1.jpg" alt="/" />
              
            </div>
            <div className="border py-8 rounded-xl bg-orange-100 hover:bg-orange-300 hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">HTML</p>
              <img className=' h-36 mx-auto mt-10 bg-white' src="html.1.png" alt="/" />
            </div>
            <div className="border py-8 rounded-xl bg-orange-100 hover:bg-orange-300 hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">Figma</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="figma.png" alt="/" />
            </div>
            <div className="border py-8 rounded-xl bg-orange-100 hover:bg-orange-300  hover:scale-105 duration-300">
              <p className="text-black  text-2xl font-bold mt-2">Python</p>
              <img className='w-60 mx-auto mt-10 bg-white' src="python.jpeg" alt="/" />
            </div>
          </div>
        </div>
      </div>
      <hr className="h-1 mx-20 animate-pulse bg-gray-100 "/>
    </>
  );
};

export default Howitworks;
