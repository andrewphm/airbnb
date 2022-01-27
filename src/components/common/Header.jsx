import React from 'react';

// Logo and icons
import Logo from '../../assets/Logo';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <header className="w-screen sticky z-50 top-0 bg-white shadow-md p-3 px-5 flex justify-between items-center">
      <div className="left">
        <div className="logo h-10">
          <Logo className="h-full" />
        </div>
      </div>

      <div className="middle">
        <div className="input-container flex hover:shadow-md py-2 px-4 rounded-full border-2">
          <input
            type="text"
            className="focus:outline-0 mx-1"
            placeholder="Start your search"
          />
          <div className="search-icon bg-[#FF385C] rounded-full h-8 w-8 flex items-center justify-center">
            <SearchIcon className="text-white text-base" />
          </div>
        </div>
      </div>

      <div className="right"></div>
    </header>
  );
};

export default Header;
