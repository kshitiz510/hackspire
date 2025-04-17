import CountdownTimer from "../common/CountdownTimer";
import heroImage from "../../assets/hero-right.svg";

const HeroSection = () => {
  const eventDate = new Date("2025-04-26T18:00:00").getTime();

  return (
    <section className="text-white min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-[120px] md:ml-[100px]">
        <div className="flex flex-col items-center text-center space-y-6 px-6">
          <h1 className="text-[#B3A790] text-7xl md:text-[118px] font-coalition tracking-wider">
            <span className="block">HACK</span>
            <span className="block">SPIRE</span>
          </h1>

          <p className="text-4xl font-bold">26th – 27th April</p>

          <a
            href="https://hackspire-1.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#71221E] text-white text-2xl font-semibold px-12 py-3 rounded-[12px] hover:bg-[#8A2A25] transition"
          >
            Register
          </a>

          <div className="mt-6">
            <p className="text-3xl mb-4 font-bold tracking-wide">LIVE IN</p>
            <CountdownTimer targetDate={eventDate} />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-[90px] md:-ml-12">
        <img
          src={heroImage}
          alt="Event Collage"
          className="rounded-lg shadow-lg max-w-[90%] md:max-w-[600px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
