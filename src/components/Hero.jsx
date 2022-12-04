import React from "react";
//import WI from "../assets/img/banner-woman2.webp";
const Hero = () => {
  return (
    <section
      id="home"
      className=" lg:h-[85vh] 
    flex items-center bg-primary lg:bg-cover lg:bg-center
     lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className=" text-lg text-accent mb-[22px]">
              Hey, I'm Syed Mubashir
            </p>
            <h1 className=" text-[44px] leading-normal md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              cupiditate, asperiores culpa laboriosam corrupti corporis delectus
              iusto at nobis exercitationem.
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">Work With Me</button>
          </div>
          {/* right side */}
          <div className="hidden lg:flex flex-1 justify-end items-start h-[70%]">
           {/*  <img src={WI} alt="/" />*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
