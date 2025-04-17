import React from "react";

interface TrackCardProps {
  title: string;
  description: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-gradient-to-br from-[#1e1e1e] to-[#111] border-[3px] border-[#B3A790]/90 rounded-2xl shadow-lg p-6 w-[260px] h-[360px] text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <h3 className="text-3xl font-bold text-[#B3A790] mb-6 tracking-wider uppercase">{title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed tracking-normal">{description}</p>
    </div>
  );
};

export default TrackCard;
