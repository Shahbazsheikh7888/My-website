import React from "react";

const Resume = () => {
  return (
    <>
      <div name="resume" className="bg-white  mt-5 pt-5">
        <div className="items-center text-center pt-3">
          <h1 className="italic text-6xl text-[#8109f8] font-bold">Resume</h1>
          
        </div>
        <div className="max-w-[1240px] text-[#8109f8] pb-10 text-justify mx-auto pt-8 ">
        
          {/* <p className="text-3xl mx-10 italic">
            Download resume 
            <br />
            
          </p> */}
          <div className="flex justify-center mt-5"> <a href="https://drive.google.com/file/d/1o54rtKsTBqtj1u-6Q_Kd5mphFuhnEs4F/view?usp=share_link"><button className=' text-2xl border rounded-full  bg-purple-600 hover:bg-purple-800 shadow-lg p-2 text-white w-120 px-5  mt-2'>Download Resume</button></a></div>
        </div>
      </div>
      <hr className="h-1 mx-20 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  " />
    </>
  );
};

export default Resume;
