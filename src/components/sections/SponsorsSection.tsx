import React from "react";

interface SponsorProps {
  id: string;
  name: string;
  logo: string;
  url: string;
}

const sponsors: SponsorProps[] = [];

const SponsorBox: React.FC<{ sponsor?: SponsorProps }> = ({ sponsor }) => {
  return (
    <div className="border-4 border-[#B3A790] rounded-xl h-48 flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(179,167,144,0.5)] cursor-pointer">
      {sponsor ? (
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center p-4"
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="max-h-32 max-w-full object-contain"
          />
        </a>
      ) : (
        <span></span>
      )}
    </div>
  );
};

const SponsorsSection: React.FC = () => {
  const renderSponsorBoxes = (count: number) => {
    return Array(count)
      .fill(null)
      .map((_, index) => <SponsorBox key={index} sponsor={sponsors[index]} />);
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-16 px-4 text-white">
      {/* Title */}
      <h2 className="text-6xl md:text-7xl mb-16 font-coalition text-[#ffeed7]">SPONSORS</h2>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-7xl">
        {renderSponsorBoxes(8)}
      </div>
    </section>
  );
};

export default SponsorsSection;
