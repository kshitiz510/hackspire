import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import acmLogo from "../../assets/acm-logo.png";
import mlscLogo from "../../assets/mlsc-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
  
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = ["about", "timeline", "tracks", "sponsors", "faqs"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 mx-4 sm:mx-16 mt-8 rounded-[18px] p-[3px] bg-gradient-to-r from-[#B3A790] to-[#4a453e] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-black bg-opacity-80 backdrop-blur-md text-[#B3A790] rounded-[17px] font-courier">
        <div className="container mx-auto flex items-center justify-between py-1 md:py-2 pl-3 md:pl-5 pr-2">
          <div className="flex items-center space-x-2 md:space-x-3">
            {[acmLogo, mlscLogo].map((logo, index) => (
              <Link
                key={index}
                to="hero"
                smooth={true}
                duration={400}
                offset={-70}
                spy={true}
                className="cursor-pointer"
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="h-10 w-auto md:h-11"
                />
              </Link>
            ))}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-[21px]">
            {navItems.map((id) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                spy={true}
                duration={400}
                offset={id === "timeline" && isMobile ? -120 : -70}
                className="hover:text-white transition cursor-pointer"
              >
                {id === "faqs" ? "FAQs" : id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
            <a
              href="https://hackspire-1.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#71221E] px-4 py-1 rounded-[10px] hover:bg-[#8A2A25] transition"
            >
              Register
            </a>
          </div>

          {/* Hamburger */}
          <div
            className="md:hidden mr-4 flex flex-col justify-center items-center cursor-pointer space-y-1 relative w-8 h-8"
            onClick={toggleMenu}
          >
            <span
              className={`block w-8 h-[4px] bg-white rounded-lg transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[11px]" : "translate-y-0"
              }`}
            ></span>
            <span
              className={`block w-8 h-[4px] bg-white rounded-lg transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-8 h-[4px] bg-white rounded-lg transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[5px]" : "translate-y-0"
              }`}
            ></span>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden rounded-b-[18px] overflow-hidden transition-all duration-500 ease-in-out bg-[#252525] ${
            isMenuOpen ? "max-h-[500px] pb-2" : "max-h-0"
          }`}
        >
          <ul className="text-center text-xl space-y-2">
            {navItems.map((id, index) => (
              <li
                key={id}
                className={`border-b border-[#B3A790] ${
                  index === navItems.length - 1 ? "border-none" : ""
                }`}
              >
                <Link
                  to={id}
                  smooth={true}
                  spy={true}
                  duration={400}
                  offset={id === "timeline" && isMobile ? -120 : -70}
                  className="block py-[6px] hover:text-white transition cursor-pointer"
                  onClick={() => setTimeout(() => setIsMenuOpen(false), 300)}
                >
                  {id === "faqs" ? "FAQs" : id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://hackspire-1.devfolio.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-2 py-2 px-4 bg-[#71221E] text-[#B3A790] rounded-[12px] hover:bg-[#8A2A25] transition"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
