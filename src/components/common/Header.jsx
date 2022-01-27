import React, { useRef } from 'react';

// Logo and icons
import Logo from '../../assets/Logo';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { AccountCircle, Menu } from '@mui/icons-material';

const Header = () => {
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('hidden');
    menuButtonRef.current.classList.toggle('shadow-md');
  };

  return (
    <header className="w-screen sticky z-50 top-0 bg-white shadow-md p-3 px-5 flex justify-center xs:justify-between items-center lg:px-10">
      <div className="left h-10 hidden xs:inline-flex">
        <div className="logo">
          <Logo className="h-full" />
        </div>
      </div>

      <div className="middle">
        <div className="input-container flex hover:shadow-md py-2 px-2 rounded-full border-2 justify-between">
          <input
            type="text"
            className="focus:outline-0 mx-2 lg:w-[250px]"
            placeholder="Start your search"
          />
          <div className="search-icon bg-[#FF385C] rounded-full h-8 w-8 flex items-center justify-center">
            <SearchIcon className="text-white text-base" />
          </div>
        </div>
      </div>

      <div className="right relative hidden sm:inline-flex">
        <a
          href=""
          className="hover:bg-gray-100 px-3 py-2 rounded-full whitespace-nowrap hidden md:inline-flex"
        >
          Become a Host
        </a>

        <a
          href=""
          className="hover:bg-gray-100 px-3 py-2 rounded-full hidden md:inline-flex"
        >
          <LanguageIcon />
        </a>

        <div
          onClick={toggleMenu}
          ref={menuButtonRef}
          className="flex border-2 py-1 px-3 hover:shadow-md rounded-full items-center ml-2 cursor-pointer space-x-1"
        >
          <Menu />
          <AccountCircle className="text-3xl" />
        </div>

        <div
          ref={menuRef}
          className="menu shadow-md absolute hidden border right-0 w-[230px] rounded-lg top-[120%] bg-white"
        >
          <ul className="font-semibold py-2 border-b">
            <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
              Messages
            </li>
            <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
              Notifications
            </li>
            <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
              Wishlists
            </li>
            <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
              Trips
            </li>
          </ul>
          <ul className="py-2 border-b">
            <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
              Host your home
            </li>
            <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
              Host your experience
            </li>
            <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
              Account
            </li>
          </ul>
          <ul className=" py-2">
            <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Help</li>
            <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
              Log out
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
