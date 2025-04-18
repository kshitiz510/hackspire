import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import acmLogo from "../../assets/acm-logo.png";
import mlscLogo from "../../assets/mlsc-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false); // Track programmatic scrolling

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll) return; // Ignore programmatic scrolling

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isProgrammaticScroll]);

  const handleLinkClick = () => {
    setIsVisible(true); // Ensure the navbar is visible
    setLastScrollY(window.scrollY); // Reset the last scroll position
    setIsProgrammaticScroll(true); // Temporarily disable scroll listener

    // Re-enable scroll listener after a short delay
    setTimeout(() => {
      setIsProgrammaticScroll(false);
    }, 500); // Adjust delay based on scroll duration
  };

  const navItems = ["about", "timeline", "tracks", "sponsors", "faqs"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 mx-4 sm:mx-16 mt-8 rounded-[18px] p-[3px] bg-gradient-to-r from-[#B3A790] to-[#4a453e] backdrop-blur-md bg-opacity-20 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-black bg-opacity-80 backdrop-blur-md text-[#B3A790] rounded-[17px] font-courier">
        <div className="container mx-auto flex items-center justify-between py-2 pl-4 pr-2">
          {/* Logos */}
          <div className="flex items-center space-x-4">
            <img src={mlscLogo} alt="MLSC" className="h-11 w-auto" />
            <img src={acmLogo} alt="ACM" className="h-11 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-[21px]">
            {navItems.map((id) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={500}
                offset={id === "timeline" && isMobile ? -120 : -70}
                className="hover:text-white transition cursor-pointer"
                onClick={handleLinkClick} // Ensure navbar stays visible on link click
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

          {/* Mobile Menu Toggle */}
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

        {/* Mobile Menu */}
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
                  duration={500}
                  offset={id === "timeline" && isMobile ? -120 : -70}
                  className="block py-[6px] hover:text-white transition cursor-pointer"
                  onClick={() => {
                    handleLinkClick(); // Ensure navbar stays visible on link click
                    setIsMenuOpen(false); // Close the mobile menu
                  }}
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