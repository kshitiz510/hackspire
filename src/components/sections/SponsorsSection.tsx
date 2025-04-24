import React from "react";
import devfolio from "../../assets/sponsors/devfolio.png";
import polygon from "../../assets/sponsors/polygon.png";
import codingMinutes from "../../assets/sponsors/coding-minutes.jpeg";
import postman from "../../assets/sponsors/postman.webp";

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
    logo: polygon, // Imported logo
    url: "https://sponsor1.com", // Add the sponsor's URL
  },
  {
    id: "2",
    name: "Sponsor 2",
    logo: devfolio, // Imported logo
    url: "https://sponsor2.com", // Add the sponsor's URL
  },
  {
    id: "3",
    name: "Sponsor 3",
    logo: postman, // Imported logo
    url: "https://sponsor3.com", // Add the sponsor's URL
  },
  {
    id: "4",
    name: "Sponsor 4",
    logo: codingMinutes, // Imported logo
    url: "https://sponsor4.com", // Add the sponsor's URL
  },
];

const SponsorBox: React.FC<{ sponsor?: SponsorProps }> = ({ sponsor }) => {
  return (
    <div className="border-4 border-[#B3A790] rounded-2xl h-36 md:h-52 md:w-56 flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(179,167,144,0.5)] cursor-pointer">
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
            className="max-h-32 rounded-lg max-w-full object-contain"
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
    <section className="relative flex flex-col items-center justify-center py-16 px-6 text-white">
      {/* Title */}
      <h2 className="text-[44px] md:text-6xl mb-16 font-coalition text-[#ffeed7]">SPONSORS</h2>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {renderSponsorBoxes(4)} {/* Render only 4 sponsor boxes */}
      </div>
    </section>
  );
};

export default SponsorsSection;