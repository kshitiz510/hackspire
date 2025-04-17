import React from "react";

const TimelineThread: React.FC = () => {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full z-0"
      viewBox="0 0 1000 400"
      preserveAspectRatio="none"
    >
      <path
        d="
          M 60 60
          Q 180 100, 300 120
          T 500 140
          T 700 110
          T 920 80
        "
        stroke="#7f1d1d"
        strokeWidth="7"
        fill="none"
      />
    </svg>
  );
};

export default TimelineThread;
