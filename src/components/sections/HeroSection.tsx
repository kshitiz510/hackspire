import CountdownTimer from "../common/CountdownTimer";
import heroImage from "../../assets/hero-right.svg";

const HeroSection = () => {
  const eventDate = new Date("2025-04-26T18:00:00").getTime();

  return (
    <section className="text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-[80px] md:pt-0">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-16 md:ml-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-[#B3A790] text-7xl md:text-8xl font-coalition tracking-wider leading-tight">
            <span className="block">HACK</span>
            <span className="block">SPIRE</span>
          </h1>

          <p className="text-xl md:text-3xl font-bold">26th – 27th April</p>

          <a
            href="https://hackspire-1.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#71221E] text-white text-lg md:text-xl font-semibold px-10 py-3 rounded-[12px] hover:bg-[#8A2A25] transition"
          >
            Register
          </a>

          <div className="mt-6">
            <p className="text-xl md:text-2xl mb-4 font-bold tracking-wide">LIVE IN</p>
            <CountdownTimer targetDate={eventDate} />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-16 md:-ml-6">
        <img
          src={heroImage}
          alt="Event Collage"
          className="rounded-lg shadow-lg w-[90%] md:w-full max-w-[500px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
