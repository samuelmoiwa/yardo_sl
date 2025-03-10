import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/yardo_logo_white.png";

// Define types for navigation items
interface NavItem {
  name: string;
  href: string;
  current: boolean;
  subLinks?: SubLink[];
}

interface SubLink {
  name: string;
  href: string;
}


const navigation: NavItem[] = [
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
    name: "Our Programs",
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
  { name: "Get Involved", href: "/recent-projects", current: false },
  {
    name: "Success Stories",
    href: "/document",
    current: false,
    subLinks: [
      { name: "Seeds Act", href: "/document/seeds-act" },
      { name: "Policies", href: "/document/policies" },
      { name: "⁠⁠Regulatory and Compliance", href: "/services/regulatory-compliance" },
    ],
  },
  { name: "Public Notices", href: "/public-notices", current: false },
  { name: "Youth Opportunities", href: "/legal", current: false },
  { name: "Contact Us", href: "/contact-us", current: false },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>("/");

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleNavClick = (href: string) => {
    localStorage.setItem("currentNav", href);
    setActiveNav(href);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedNav = localStorage.getItem("currentNav");
    const currentPath = location.pathname;
    setActiveNav(savedNav && savedNav === currentPath ? savedNav : currentPath);
  }, [location]);

  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Apply theme on initial load
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };


  const renderSubLinks = (subLinks: SubLink[] | undefined) => {
    if (!subLinks) return null;
    return (
      <div className="ml-4 space-y-1">
        {subLinks.map((subItem) => (
          <NavLink
            key={subItem.name}
            to={subItem.href}
            className={`
              block px-3 py-2 text-sm text-white
              hover:underline hover:decoration-blue-500
              transition duration-150 ease-in-out font-Poppins font-semibold
            `}
            onClick={() => handleNavClick(subItem.href)}
          >
            {subItem.name}
          </NavLink>
        ))}
      </div>
    );
  };


  return (
    <nav
      className="bg-blue-950 dark:bg-gray-950 shadow top-0 w-full max-w-[150rem] fixed z-50"
      aria-label="Top"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex w-[90%] justify-between items-center h-16">
          <div className="flex items-center lg:ml-20 justify-start">
            <NavLink
              to="/"
              className="text-xl flex flex-row justify-center items-center font-bold font-Poppins text-white"
            >
              <img className="block h-8 w-auto lg:hidden" src={logo} alt="SLeSCA" />
              <img className="hidden h-[3rem] w-auto lg:block" src={logo} alt="SLeSCA" />
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

          <div className="w-full hidden lg:flex lg:items-center justify-center">
            <div className="hidden lg:flex lg:items-center justify-center lg:ml-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <NavLink
                    to={item.href}
                    className={`
                      px-3 py-2 text-sm text-white
                      hover:underline hover:decoration-blue-500 hover:decoration-2
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
                  {item.subLinks && (
                    <div className="absolute hidden group-hover:block bg-gray-800 shadow-lg p-2 mt-2 rounded">
                      {renderSubLinks(item.subLinks)}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="#"
                className="text-white text-sm font-bold bg-yellow-500 hover:bg-yellow-400 px-3 py-1 rounded ml-[5rem]"
              >
                Make a Donation
              </Link>
            </div>
          </div>

          <button onClick={toggleTheme} className="text-white text-xl">
            {theme === "dark" ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>

            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              className="size-6 text-white">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            </svg>

            }
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
