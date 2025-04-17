import React from "react";
import PaperParchment from "../common/PaperParchment";
import teamPhoto from "../../assets/team-photo.png";
import boardPinImage from "../../assets/board-pin.svg"; 

const AboutSection: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center px-10 py-16 text-white">
      {/* Left Side: Paper Parchment */}
      <div className="relative flex-shrink-0 w-full md:w-[60%]">
        <PaperParchment
          title="ABOUT US"
          titleMarginTop="64px"
          width="92%" 
          height="600px" 
          padding="14px" 
          marginTop="24px" 
          className="mx-auto" 
        >
          <p className="text-2xl leading-tight text-black ml-4 px-16 mt-16 font-courier">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nisi officia doloremque
            minus amet assumenda odio, porro dolor nihil aspernatur suscipit beatae veritatis totam
            placeat quas, rerum ex natus provident, id eligendi. Autem aspernatur eius blanditiis
            modi culpa, sint odio quasi iure nihil perferendis minima, deserunt qui, ea.
          </p>
        </PaperParchment>
      </div>

      {/* Right Side: Team Photo Frame with Tilt */}
      <div className="relative mt-[-100px] md:mt-[200px] md:ml-[-80px] flex flex-col items-center justify-center w-[280px] md:w-[420px] transform rotate-[10deg] bg-[#c8b59a] px-6 p-4 shadow-xl z-10">
        {/* Board Pin */}
        <img
          src={boardPinImage}
          alt="Board Pin"
          className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10"
        />

        {/* Team Photo */}
        <img
          src={teamPhoto}
          alt="ACM Thapar Student Chapter 2025"
          className="w-full h-auto object-cover"
        />

        {/* Caption */}
        <p className="mt-2 text-center px-4 pt-2 rounded-md text-md font-extrabold text-[#b84204]">
          ACM THAPAR STUDENT CHAPTER 2025
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
