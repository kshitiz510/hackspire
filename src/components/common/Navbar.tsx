import { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo from "../../assets/acm-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["about", "timeline", "tracks", "sponsors", "faqs"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-4 sm:mx-16 mt-8 rounded-[18px] p-[3px] bg-gradient-to-r from-[#B3A790] to-[#4a453e] backdrop-blur-md bg-opacity-20">
      <div className="bg-black bg-opacity-80 backdrop-blur-md text-[#B3A790] rounded-[17px] font-urbanist">
        <div className="container mx-auto flex items-center justify-between py-2 pl-4 pr-2">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Thapar Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-[21px]">
            {navItems.map((id) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={500} // Smooth scrolling duration
                offset={-70} // Offset for fixed navbar
                className="hover:text-white transition cursor-pointer"
              >
                {id === "faqs" ? "FAQs" : id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
            <a
              href="https://hackspire-1.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#71221E] px-6 py-2 rounded-[10px] hover:bg-[#8A2A25] transition"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex flex-col space-y-1 cursor-pointer" onClick={toggleMenu}>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden text-center py-4 text-lg space-y-2">
            {navItems.map((id) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block py-2 hover:text-white transition cursor-pointer"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
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
                className="block py-2 bg-[#71221E] text-[#B3A790] rounded-[12px] hover:bg-[#8A2A25] transition"
              >
                Register
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
