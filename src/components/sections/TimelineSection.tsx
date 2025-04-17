import React from "react";
import TimelineCard from "../common/TimelineCard";
import TimelineThread from "../common/TimelineThread";

const TimelineSection: React.FC = () => {
  const timelineData = [
    {
      date: (
        <>
          20<sup>th</sup> April 2025
        </>
      ),
      description: "Registration Begins",
      position: { top: "40px", left: "5%" },
    },
    {
      date: (
        <>
          25<sup>th</sup> April 2025
        </>
      ),
      description: "Team Formation Deadline",
      position: { top: "80px", left: "29%" },
    },
    {
      date: (
        <>
          26<sup>th</sup> April 2025
        </>
      ),
      description: "Hackathon Starts",
      position: { top: "70px", left: "53%" },
    },
    {
      date: (
        <>
          27<sup>th</sup> April 2025
        </>
      ),
      description: "Hackathon Ends",
      position: { top: "30px", left: "75%" },
    },
  ];

  return (
    <section className="relative py-20 px-4 text-white overflow-hidden">
      {/* Title */}
      <h2 className="text-6xl font-coalition text-[#ffeed7] text-center mb-12">TIMELINE</h2>

      {/* Timeline container */}
      <div className="relative w-full h-[320px]">
        {/* Background thread/rope SVG*/}
        <div
          style={{ position: "absolute", top: "40px", left: "0", width: "100%", height: "100%" }}
        >
          <TimelineThread />
        </div>

        {/* Timeline cards */}
        {timelineData.map((item, idx) => (
          <TimelineCard
            key={idx}
            date={item.date}
            description={item.description}
            style={{
              top: item.position.top,
              left: item.position.left,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
