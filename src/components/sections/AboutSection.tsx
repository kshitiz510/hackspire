import React from "react";
import PaperParchment from "../common/PaperParchment";

const AboutSection: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center px-10 mt-[-40px] text-white">
      <div className="relative flex-shrink-0 w-full md:w-[55%]">
        <PaperParchment
          title="ABOUT US"
          titleMarginTop="110px"
          width="100%"
          height="700px"
          padding="10px"
          marginTop="0px"
          className="mx-auto flex justify-end items-center flex-col"
          showBoardPin={true}
        >
          <p
            className="text-black px-2 py-8 md:px-16 mt-7 md:mt-16 font-courier leading-tight"
            style={{
              fontSize: "clamp(0.7rem, 2.5vw, 1.4rem)",
              lineHeight: "1.5",
            }}
          >
            Hackspire is a 24-hour hackathon by ACM TIET and MLSC, bringing innovators together to solve real-world problems. With expert mentorship, hands-on experience, and vibrant competition, it's a platform where creativity meets tech—fueling future change-makers.
          </p>
        </PaperParchment>
      </div>
    </section>
  );
};

export default AboutSection;
