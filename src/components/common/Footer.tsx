import React from "react";
import rightImage from "../../assets/footer-image.png";
import acmLogo from "../../assets/acm-logo.png";
import mlscLogo from "../../assets/mlsc-logo.png";
import paperBg from "../../assets/paper-bg.png";

const Footer: React.FC = () => {
  return (
    <div
      className="relative w-full rounded-t-3xl md:rounded-t-[52px] overflow-x-hidden z-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${paperBg})`,
      }}
    >
      {/* Left Image */}
      <div className="absolute bottom-0 left-0 z-20 hidden md:block">
        <img
          src={rightImage}
          alt="Left Silhouette"
          className="w-[200px] md:w-[300px] h-auto transform -scale-x-100"
        />
      </div>

      {/* Right Image */}
      <div className="absolute bottom-0 right-0 z-20 hidden md:block">
        <img src={rightImage} alt="Right Silhouette" className="w-[200px] md:w-[300px] h-auto" />
      </div>

      {/* Center Content */}
      <div className="relative z-30 flex flex-col justify-between items-center min-h-[200px] md:min-h-[400px] py-10 md:pt-36 text-black">
        {/* Logos */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <img
            src={acmLogo}
            alt="ACM Logo"
            className="w-[75px] md:w-[110px]"
          />
          <img
            src={mlscLogo}
            alt="MLSC Logo"
            className="w-[70px] md:w-[105px]"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 md:gap-8 text-3xl md:text-4xl mb-6">
          <a href="https://www.instagram.com/acmthapar/" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/thapar-acm-student-chapter/" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="Phone">
            <i className="fas fa-phone"></i>
          </a>
          <a href="#" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Footer Text */}
        {/* <p className="text-sm md:text-md font-semibold text-center mt-auto">
          Made with ❤️ by ACM
          <br />
          Hackspire 1.0 ALL Rights Reserved
        </p> */}
      </div>
    </div>
  );
};

export default Footer;