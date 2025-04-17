import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TrackCard from "../common/TrackCard";

const TracksSection: React.FC = () => {
  const tracks = [
    {
      title: "Problem #1",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Problem #2",
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Problem #3",
      description:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Problem #4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Problem #5",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); 

  const handleScroll = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) =>
      direction === "left"
        ? (prevIndex - 1 + tracks.length) % tracks.length
        : (prevIndex + 1) % tracks.length
    );
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-16 text-white overflow-hidden">
      <h2 className="text-7xl font-coalition mb-24 text-[#ffeed7]">TRACKS</h2>

      {/* Carousel Container */}
      <div className="relative w-full flex items-center justify-center">
        {/* Scroll Buttons */}
        <button
          className="absolute left-12 bg-[#B3A790] text-black p-2 rounded-full z-20"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-12 bg-[#B3A790] text-black p-2 rounded-full z-20"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight size={24} />
        </button>

        {/* Cards */}
        <div className="relative flex items-center justify-center w-[800px] h-[400px]">
          {tracks.map((track, index) => {
            const relativeIndex = (currentIndex - index + tracks.length) % tracks.length;

            // Position cards with offset and scale
            let transform = "";
            let zIndex = 0;
            let opacity = 0;

            if (relativeIndex === 0) {
              // Center
              transform = "translateX(0) scale(1.2)";
              zIndex = 10;
              opacity = 1;
            } else if (relativeIndex === 1 || relativeIndex === tracks.length - 1) {
              // Adjacent
              const direction = relativeIndex === 1 ? -220 : 220;
              transform = `translateX(${direction}px) scale(1.1)`;
              zIndex = 5;
              opacity = 0.9;
            } else if (relativeIndex === 2 || relativeIndex === tracks.length - 2) {
              const direction = relativeIndex === 2 ? -440 : 440;
              transform = `translateX(${direction}px) scale(0.9)`;
              zIndex = 1;
              opacity = 0.6;
            } else {
              // Hidden ones
              transform = "scale(0)";
              zIndex = 0;
              opacity = 0;
            }

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <TrackCard title={track.title} description={track.description} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex space-x-2 mt-10">
        {tracks.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-[#B3A790]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TracksSection;
