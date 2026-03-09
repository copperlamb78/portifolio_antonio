import { List } from "phosphor-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className="w-full h-20 pr-5 pl-5 sm:pl-10 sm:pr-10 md:pl-20 md:pr-20 bg-[#C8A96A]">
      <div className="flex items-center justify-end w-full h-full  border-b border-[#3B2A2345]">
        <div className="relative">
          <button
            onClick={handleMenuToggle}
            className="transition-all duration-300 cursor-pointer px-4 py-2 text-sm font-medium text-white bg-[#5A1F1B] hover:bg-[#8C3A2B] rounded-md"
          >
            <List className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </button>
          {isMenuOpen && (
            <div className="bg-[#5A1F1B] p-2 w-max h-max absolute right-0 top-full mt-2 rounded-md shadow-lg">
              <ul className="flex flex-col items-center p-4 gap-2">
                <a
                  href="/"
                  className="w-full bg-gradient-to-r rounded-md hover:from-[#8C3A2B] hover:to-[#A05A2C] hover:animate-pulse "
                >
                  <li className="text-center border-b mb-2 text-sm lg:text-lg text-white font-sono">
                    Home
                  </li>
                </a>
                <a
                  href="/about"
                  className="w-full bg-gradient-to-r rounded-md hover:from-[#8C3A2B] hover:to-[#A05A2C] hover:animate-pulse "
                >
                  <li className="text-center border-b mb-2 text-sm lg:text-lg text-white font-sono">
                    About
                  </li>
                </a>
                <a
                  href="/skills"
                  className="w-full bg-gradient-to-r rounded-md hover:from-[#8C3A2B] hover:to-[#A05A2C] hover:animate-pulse "
                >
                  <li className="text-center border-b mb-2 text-sm lg:text-lg text-white font-sono">
                    Skills
                  </li>
                </a>
                <a
                  href="/projects"
                  className="w-full bg-gradient-to-r rounded-md hover:from-[#8C3A2B] hover:to-[#A05A2C] hover:animate-pulse "
                >
                  <li className="text-center border-b mb-2 text-sm lg:text-lg text-white font-sono">
                    Projects
                  </li>
                </a>
                <a
                  href="/career"
                  className="w-full bg-gradient-to-r rounded-md hover:from-[#8C3A2B] hover:to-[#A05A2C] hover:animate-pulse "
                >
                  <li className="text-center border-b mb-2 text-sm lg:text-lg text-white font-sono">
                    Career
                  </li>
                </a>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
