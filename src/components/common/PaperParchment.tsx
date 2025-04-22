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
  showBoardPin?: boolean; // New prop to control board pin rendering
  boardPinPosition?: {
    mobile: { top: string; left: string }; // Position for mobile
    desktop: { top: string; left: string }; // Position for desktop
  };
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
  showBoardPin = true, // Default to showing the board pin
  boardPinPosition = {
    mobile: { top: "32%", left: "6%" }, // Default position for mobile
    desktop: { top: "100px", left: "14px" }, // Default position for desktop
  },
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
      {/* Conditionally Render Board Pin */}
      {showBoardPin && (
        <img
          src={boardPinImage}
          alt="Board Pin"
          className="absolute transform w-20 h-20 md:w-24 md:h-24"
          style={{
            top: window.innerWidth >= 768 ? boardPinPosition.desktop.top : boardPinPosition.mobile.top,
            left: window.innerWidth >= 768 ? boardPinPosition.desktop.left : boardPinPosition.mobile.left,
          }}
        />
      )}

      {/* Title */}
      <h2
        className="text-5xl md:text-6xl text-[#71221E] text-center font-coalition"
        style={{ marginTop: titleMarginTop }}
      >
        {title}
      </h2>

      {/* Children / Description */}
      <div className="flex flex-col justify-start items-center h-full pb-20 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default PaperParchment;