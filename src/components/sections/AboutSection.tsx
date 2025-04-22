import React from "react";
import PaperParchment from "../common/PaperParchment";

const AboutSection: React.FC = () => {
  // Define board pin positions for mobile and desktop
  const mobileBoardPinPosition = { top: "26%", left: "-6%" }; // Adjusted for mobile
  const desktopBoardPinPosition = { top: "10%", left: "2%" }; // Adjusted for desktop

  // Combine both mobile and desktop positions into a single object
  const boardPinPosition = {
    mobile: mobileBoardPinPosition,
    desktop: desktopBoardPinPosition,
  };

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
          className="mx-auto flex justify-end items-center flex-col"
          showBoardPin={true} // Control whether the board pin is shown
          boardPinPosition={boardPinPosition} // Pass both mobile and desktop positions

        >
          <p className="text-sm md:text-2xl leading-tight text-black ml-6 px-2 py-6 md:px-16 mt-5 md:mt-16 font-courier">
          Hackspire is a 24-hour hackathon by ACM TIET and MLSC, bringing innovators together to solve real-world problems. With expert mentorship, hands-on experience, and vibrant competition, it's a platform where creativity meets tech—fueling future trailblazers and change-makers.
          </p>
        </PaperParchment>
      </div>
    </section>
  );
};

export default AboutSection;