import React from "react";
import { Link } from "react-scroll";



const Home1 = () => {
  return (
    <>
    <div name ="home">
      <div className="w-full bg-cover  bg-white py-20 pb-10 pt-20 mt-15 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-black text-4xl pt-10  ">
              Hii,
            </p>
            <h1 className="md:text-5xl text-[#f19217] italic sm:text-3xl text-2xl font-bold py-2">
              I am Shahbaz Sheikh
            </h1>
            <p className="text-2xl">A Front end developer and Python trainer</p>
            <Link to="footer" ><button className="text-white bg-[#f19217] hover:bg-black shadow-orange-600 w-[200px] text-2xl italic rounded-full  my-6  py-2">
              Hire Me 
            </button>
            
            </Link>

          </div>
          <img
            className="w-[300px]  mx-auto my-4 rounded-full mt-10 pt-5"
            src="/newmy.png"
            alt="/"
          />
        </div>
      </div>
    </div>
    <hr className="h-1 mx-20 animate-pulse bg-gray-100 "/>
    </>
  );
};

export default Home1;
