import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../asset/Coat_of_arms.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "About Us",
    href: "/about",
    current: false,
    subLinks: [
      { name: "Our Team", href: "/team" },
      { name: "SLeSCA Structure", href: "/about/structure" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    current: false,
    subLinks: [
      { name: "Seed Quality Certification", href: "/services/quality-certification" },
      { name: "Training and Workshops", href: "/services/training-workshops" },
      { name: "Seed License Procedures", href: "/about/license-procedures" },
      { name: "Renewal of Seed License", href: "/about/renewal-license" },
      { name: "Farmer Training and Capacity Building", href: "/farmer-training" },
      { name: "Advocacy and Collaboration", href: "/advocacy-collaboration" },
    ],
  },
  { name: "Projects", href: "/recent-projects", current: false },
  {
    name: "Documents", href: "/document", current: false,
    subLinks: [
      { name: "Seeds Act", href: "/document/seeds-act" },
      { name: "Policies", href: "/document/policies" },
      { name: "⁠⁠Regulatory and Compliance", href: "/services/regulatory-compliance" },
    ],
  },
  { name: "Public Notices", href: "/public-notices", current: false },
  { name: "Legal", href: "/legal", current: false },
  { name: "Contact Us", href: "/contact-us", current: false },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("/");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href) => {
    localStorage.setItem("currentNav", href);
    setActiveNav(href);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedNav = localStorage.getItem("currentNav");
    const currentPath = location.pathname;
    setActiveNav(savedNav && savedNav === currentPath ? savedNav : currentPath);
  }, [location]);

  const renderSubLinks = (subLinks) => (
    <div className="ml-4 space-y-1">
      {subLinks.map((subItem) => (
        <NavLink
          key={subItem.name}
          exact
          to={subItem.href}
          className={`
            block px-3 py-2 text-sm text-white
            hover:underline hover:decoration-green-500
            transition duration-150 ease-in-out font-Poppins font-semibold
          `}
          onClick={() => handleNavClick(subItem.href)}
        >
          {subItem.name}
        </NavLink>
      ))}
    </div>
  );

  return (
    <nav className="bg-green-950 shadow top-0 w-full max-w-[150rem] fixed z-50" aria-label="Top">

      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex w-[90%] justify-between items-center h-16">
          <div className="flex items-center lg:ml-20 justify-start">
            <NavLink to="/" className="text-xl flex flex-row justify-center items-center font-bold font-Poppins text-white">

              <img className="block h-8 w-auto lg:hidden" src={logo} alt="SLeSCA" />
              <img className="hidden h-8 w-auto lg:block" src={logo} alt="SLeSCA" />
              <p className="text-pretty md:ml-2 md:mt-2">SLeSCA</p>
            </NavLink>
          </div>

          <div className="flex items-center -mr-2 lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white
              hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out
              font-Poppins font-bold"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>


        <div className="w-full hidden lg:flex lg:items-center justify-center ">
          <div className="hidden lg:flex lg:items-center justify-center lg:ml-6 ">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <NavLink
                  exact
                  to={item.href}
                  className={`
                    px-3 py-2 text-sm text-white
                    hover:underline hover:decoration-green-500 hover:decoration-2
                    transition duration-150 ease-in-out font-Poppins font-semibold
                    ${
                      activeNav === item.href
                        ? "underline decoration-green-500 decoration-2"
                        : ""
                    }
                  `}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </NavLink>
                {item.subLinks && (
                  <div className="absolute hidden group-hover:block bg-gray-800 shadow-lg p-2 mt-2 rounded">
                    {renderSubLinks(item.subLinks)}
                  </div>
                )}
              </div>
            ))}
            <Link
              to='#'
              className="text-white text-sm font-bold bg-yellow-500 hover:bg-yellow-400 px-3 py-1 rounded ml-[5rem]"
            >
              Get License
            </Link>
          </div>
        </div>



        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="pt-2 pb-3 flex flex-col justify-center items-center">
            {navigation.map((item) => (
              <div key={item.name}>
                <NavLink
                  exact
                  to={item.href}
                  className={`
                    block px-3 py-2 text-sm text-white
                    hover:underline hover:decoration-blue-500
                    transition duration-150 ease-in-out font-Poppins font-semibold
                    ${
                      activeNav === item.href
                        ? "underline decoration-blue-500 decoration-2"
                        : ""
                    }
                  `}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </NavLink>
                {item.subLinks && renderSubLinks(item.subLinks)}
              </div>
            ))}
          </div>
        </div>
      )}

    </nav>
  );
}

export default NavBar;
