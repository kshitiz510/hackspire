import React from "react";

interface TrackCardProps {
  title: string;
  description: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-gradient-to-br from-[#1e1e1e] to-[#111] border-[3px] border-[#B3A790]/90 rounded-2xl shadow-lg px-4 py-6 w-[260px] h-[320px] text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <h3 className="text-3xl font-courier font-medium text-[#B3A790] mb-0 tracking-wider">{title}</h3>
      <hr className="w-3/4 mb-2 border-0 h-[2px] bg-gradient-to-r from-transparent via-[#B3A790] to-transparent" />
      <p className="px-2 font-courier text-sm text-gray-300 leading-relaxed tracking-normal">{description}</p>
    </div>
  );
};

export default TrackCard;