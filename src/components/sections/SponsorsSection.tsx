import React from "react";

interface SponsorProps {
  id: string;
  name: string;
  logo: string;
  url: string;
}

const sponsors: SponsorProps[] = [
  {
    id: "1",
    name: "Sponsor 1",
    logo: "https://via.placeholder.com/150",
    url: "#",
  },
  {
    id: "2",
    name: "Sponsor 2",
    logo: "https://via.placeholder.com/150",
    url: "#",
  },
  {
    id: "3",
    name: "Sponsor 3",
    logo: "https://via.placeholder.com/150",
    url: "#",
  },
  {
    id: "4",
    name: "Sponsor 4",
    logo: "https://via.placeholder.com/150",
    url: "#",
  },
  {
    id: "5",
    name: "Sponsor 5",
    logo: "https://via.placeholder.com/150",
    url: "#",
  },
  {
    id: "6",
    name: "Sponsor 6",
    logo: "https://via.placeholder.com/150",
    url: "#",
  },
  {
    id: "7",
    name: "Sponsor 7",
    logo: "https://via.placeholder.com/150",
    url: "#",
  },
  {
    id: "8",
    name: "Sponsor 8",
    logo: "https://via.placeholder.com/150",
    url: "#",
  },
];

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
      <h2 className="text-5xl md:text-6xl mb-16 font-coalition text-[#ffeed7]">SPONSORS</h2>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {renderSponsorBoxes(8)}
      </div>
    </section>
  );
};

export default SponsorsSection;