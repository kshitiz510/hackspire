import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import TrackCard from "../common/TrackCard";

const TracksSection: React.FC = () => {
  const tracks = [
    {
      title: "Machine Learning",
      description: "Build innovative solutions using artificial intelligence and machine learning to solve real-world problems.",
    },
    {
      title: "Blockchain & Web3",
      description: "Explore decentralized technologies and create applications leveraging blockchain and Web3 ecosystems.",
    },
    {
      title: "Healthcare & Wellness",
      description: "Develop solutions to improve healthcare systems, mental health, and overall wellness using technology.",
    },
    {
      title: "Cyber Security",
      description: "Design solutions to enhance digital security and protect systems from cyber threats and vulnerabilities.",
    },
    {
      title: "Open Innovation",
      description: "Bring your unique ideas to life with no restrictions—innovate in any domain you're passionate about.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width is less than 768px
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) =>
      direction === "left"
        ? (prevIndex - 1 + tracks.length) % tracks.length
        : (prevIndex + 1) % tracks.length
    );
  };

  // Swipe handlers for touch devices
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleScroll("right"),
    onSwipedRight: () => handleScroll("left"),
    preventScrollOnSwipe: true,
    trackMouse: true, // Allow swipe with mouse for testing
  });

  return (
    <section
      className="relative flex flex-col items-center justify-center py-16 text-white overflow-hidden"
      {...swipeHandlers} // Attach swipe handlers to the section
    >
      <h2 className="text-5xl md:text-6xl font-coalition mb-24 md:mb-16 text-[#ffeed7]">TRACKS</h2>

      {/* Carousel Container */}
      <div className="relative w-full flex items-center justify-center">
        {/* Scroll Buttons */}
        <button
          className="absolute left-4 md:left-12 bg-[#B3A790] text-black p-2 rounded-full z-20"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 md:right-12 bg-[#B3A790] text-black p-2 rounded-full z-20"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight size={24} />
        </button>

        {/* Cards */}
        <div className="relative flex items-center justify-center w-full md:w-[800px] h-[300px] md:h-[400px]">
          {tracks.map((track, index) => {
            const relativeIndex = (currentIndex - index + tracks.length) % tracks.length;

            // Position cards with offset and scale
            let transform = "";
            let zIndex = 0;
            let opacity = 0;

            if (relativeIndex === 0) {
              // Center
              transform = "translateX(0) scale(1.1)";
              zIndex = 10;
              opacity = 1;
            } else if (relativeIndex === 1 || relativeIndex === tracks.length - 1) {
              // Adjacent
              const direction = relativeIndex === 1 ? -200 : 200; // Adjusted for mobile
              transform = `translateX(${direction}px) scale(0.9)`;
              zIndex = 5;
              opacity = isMobile ? 0 : 0.9; // Set opacity to 0 for mobile
            } else if (relativeIndex === 2 || relativeIndex === tracks.length - 2) {
              const direction = relativeIndex === 2 ? -400 : 400; // Adjusted for mobile
              transform = `translateX(${direction}px) scale(0.7)`;
              zIndex = 1;
              opacity = isMobile ? 0 : 0.6; // Set opacity to 0 for mobile
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
      <div className="flex space-x-2 mt-20 md:mt-10">
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