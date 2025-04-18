import React from "react";
import PaperParchment from "../common/PaperParchment";
// import teamPhoto from "../../assets/team-photo.png";
// import boardPinImage from "../../assets/board-pin.svg";

const AboutSection: React.FC = () => {

  // Define board pin positions for mobile and desktop
  const mobileBoardPinPosition = { top: "200px", left: "7%" };
  const desktopBoardPinPosition = { top: "80px", left: "7%" };

  // Use Tailwind's responsive utilities to determine the screen size
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center px-10 mt-[-40px] text-white">
      {/* Left Side: Paper Parchment */}
      <div className="relative flex-shrink-0 w-full md:w-[55%]">
        <PaperParchment
          title="ABOUT US"
          titleMarginTop="110px" // Adjusted for mobile
          width="100%" // Increased size for mobile
          height="700px" // Increased height for mobile
          padding="10px" // Adjusted padding
          marginTop="0px"
          className="mx-auto"
          showBoardPin={true} // Control whether the board pin is shown
          boardPinPosition={isDesktop ? desktopBoardPinPosition : mobileBoardPinPosition} // Dynamically set position
        >
          <p className="text-sm md:text-2xl leading-tight text-black ml-6 px-2 py-6 md:px-16 mt-5 md:mt-16 font-courier">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nisi officia doloremque
            minus amet assumenda odio, porro dolor nihil aspernatur suscipit beatae veritatis totam
            placeat quas, rerum ex natus provident, id eligendi. Autem aspernatur eius blanditiis
            modi culpa, sint odio quasi iure nihil perferendis.
          </p>
        </PaperParchment>
      </div>

      {/* Right Side: Team Photo Frame with Tilt */}
      {/* Commented out as per the request */}
      {/* <div className="relative mt-[-100px] md:mt-[200px] md:ml-[-80px] flex flex-col items-center justify-center w-[280px] md:w-[420px] transform rotate-[10deg] bg-[#c8b59a] px-6 p-4 shadow-xl z-10">
        <img
          src={boardPinImage}
          alt="Board Pin"
          className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10"
        />
        <img
          src={teamPhoto}
          alt="ACM Thapar Student Chapter 2025"
          className="w-full h-auto object-cover"
        />
        <p className="mt-2 text-center px-4 pt-2 rounded-md text-md font-extrabold text-[#b84204]">
          ACM THAPAR STUDENT CHAPTER 2025
        </p>
      </div> */}
    </section>
  );
};

export default AboutSection;