import React from "react";
import boardPinImage from "../../assets/board-pin.svg";
import parchmentImage from "../../assets/paper-parchment.png";

interface TimelineCardProps {
  date: React.ReactNode;
  description: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  date,
  description,
  style = {},
  width = "300px",
  height = "200px",
}) => {
  return (
    <div className="absolute" style={{ ...style }}>
      {/* Card with parchment background */}
      <div
        className="relative bg-center bg-cover text-black rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${parchmentImage})`,
          width,
          height,
          padding: "24px",
        }}
      >
        {/* Centered Board Pin */}
        <img
          src={boardPinImage}
          alt="Pin"
          className="absolute top-[-28px] left-6 transform -translate-x-1/2 w-14 h-14 z-10"
        />

        {/* Card Content */}
        <div className="flex flex-col items-center justify-center h-full text-center py-2">
          <p className="text-2xl font-semibold font-courier">{date}</p>
          <p className="mt-5 text-xl font-normal font-courier">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
