import React, { ReactNode } from "react";
import boardPinImage from "../../assets/board-pin.svg";
import parchmentImage from "../../assets/paper-parchment.png";

interface PaperParchmentProps {
  title: string;
  children: ReactNode;
  className?: string;
  titleMarginTop?: string;
  width?: string;
  height?: string;
  padding?: string;
  marginTop?: string;
  showBoardPin?: boolean;
}

const PaperParchment: React.FC<PaperParchmentProps> = ({
  title,
  children,
  className = "",
  titleMarginTop = "125px",
  width = "100%",
  height = "800px",
  padding = "16px",
  marginTop = "0",
  showBoardPin = true,
}) => {
  return (
    <div
      className={`relative bg-contain bg-no-repeat bg-center rounded-lg shadow-2xl ${className}`}
      style={{
        backgroundImage: `url(${parchmentImage})`,
        width,
        height,
        padding,
        marginTop,
      }}
    >
      {showBoardPin && (
        <img
          src={boardPinImage}
          alt="Board Pin"
          className="hidden md:block absolute top-[10%] left-[4%] w-24 h-24"
        />
      )}

      <h2
        className="text-5xl md:text-6xl text-[#71221E] text-center font-coalition"
        style={{ marginTop: titleMarginTop }}
      >
        {title}
      </h2>

      <div className="flex flex-col justify-start items-center h-full pb-20 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default PaperParchment;
