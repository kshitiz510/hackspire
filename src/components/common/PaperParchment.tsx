import React, { ReactNode } from "react";
import boardPinImage from "../../assets/board-pin.svg"; 
import parchmentImage from "../../assets/paper-parchment.png";

interface PaperParchmentProps {
  title: string;
  children: ReactNode;
  className?: string; // Optional className for additional styling
  titleMarginTop?: string; // Optional margin-top for the title
  width?: string; // Optional width of the parchment
  height?: string; // Optional height of the parchment
  padding?: string; // Optional padding inside the parchment
  marginTop?: string; // Optional margin for top position
}

const PaperParchment: React.FC<PaperParchmentProps> = ({
  title,
  children,
  className = "",
  titleMarginTop = "125px",
  width = "100%", // Default width
  height = "800px", // Default height
  padding = "16px", // Default padding
  marginTop = "0", // Default marginTop
}) => {
  return (
    <div
      className={`relative bg-contain bg-no-repeat bg-center rounded-lg shadow-2xl ${className}`}
      style={{
        backgroundImage: `url(${parchmentImage})`,
        width: width,
        height: height,
        padding: padding,
        marginTop: marginTop,
      }}
    >
      {/* Board Pin */}
      <img
        src={boardPinImage}
        alt="Board Pin"
        className="absolute top-[40px] left-14 transform -translate-x-1/2 w-16 h-16" 
      />

      {/* Title */}
      <h2
        className="text-5xl md:text-6xl text-[#71221E] text-center font-coalition"
        style={{ marginTop: titleMarginTop }}
      >
        {title}
      </h2>

      {/* Children / Description */}
      {children}
    </div>
  );
};

export default PaperParchment;
