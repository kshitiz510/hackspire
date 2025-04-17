import React from "react";
import rightImage from "../../assets/footer-image.png";
import eclipseLogo from "../../assets/eclipse-logo.svg";
import acmLogo from "../../assets/acm-logo.png";
import paperBg from "../../assets/paper-bg.png";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full overflow-x-hidden z-10">
      <div
        className="w-full bg-no-repeat bg-cover bg-center rounded-t-[50px] overflow-hidden"
        style={{
          backgroundImage: `url(${paperBg})`,
          minHeight: "400px",
        }}
      >
        {/* Left Image */}
        <div className="absolute bottom-0 left-0 z-20">
          <img
            src={rightImage}
            alt="Left Silhouette"
            className="w-[300px] h-auto transform -scale-x-100"
          />
        </div>

        {/* Right Image */}
        <div className="absolute bottom-0 right-0 z-20">
          <img src={rightImage} alt="Right Silhouette" className="w-[300px] h-auto" />
        </div>

        {/* Center Content */}
        <div className="relative z-30 flex flex-col items-center justify-end h-full py-14 text-black">
          <div className="space-y-2 mb-4">
            <img src={eclipseLogo} alt="Eclipse Logo" className="mx-auto w-[300px]" />
            <img src={acmLogo} alt="ACM Logo" className="mx-auto w-[175px]" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-9 text-4xl mb-4">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Phone">
              <i className="fas fa-phone"></i>
            </a>
            <a href="#" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <p className="text-md font-semibold text-center mt-8">
            Made with ❤️ by ACM
            <br />
            Eclipse 5.0 ALL Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
