import React from "react";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>New Arrivals
          </div>
          <h1 className="text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">
            Fashion That Breaks Free<br />
            <span className="font-light">Salute & Slay</span>
          </h1>
          <a 
            href="https://nikhil37641-portfolio.netlify.app/" 
            className="self-start uppercase font-semibold border-b-2 border-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Contact Us!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
