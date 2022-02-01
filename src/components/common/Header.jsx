import React, { useRef, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../../redux/searchSlice';

// Date Range
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

// Logo and icons
import Logo from '../../assets/Logo';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { AccountCircle, Menu, People } from '@mui/icons-material';

const Header = () => {
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [isSearching, setIsSearching] = useState(false);

  const router = useRouter();

  const currentQuery = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    menuRef.current.classList.toggle('hidden');
    menuButtonRef.current.classList.toggle('shadow-md');
  };

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleSelect = (ranges) => {
    setDateRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
    });

    dispatch(
      setQuery({
        ...currentQuery,
        startDate: ranges.selection.startDate.toISOString(),
        endDate: ranges.selection.endDate.toISOString(),
      })
    );
  };

  const handleSearchClick = () => {
    setIsSearching((prev) => false);

    router.push({
      pathname: '/search',
      query: {
        location: currentQuery.location,
        startDate: currentQuery.startDate,
        endDate: currentQuery.endDate,
        numOfGuests: currentQuery.numOfGuests,
      },
    });
  };

  const handleSearchChange = (e) => {
    setIsSearching((prev) => true);

    dispatch(setQuery({ ...currentQuery, [e.target.name]: e.target.value }));
  };

  const selectionRange = {
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    key: 'selection',
  };

  return (
    <header className="w-screen sticky z-50 top-0 bg-white shadow-md p-3 px-5">
      <div className="flex justify-center xs:justify-between items-center lg:px-10">
        <div className="left h-10 hidden xs:inline-flex">
          <div className="logo">
            <Link href="/">
              <a>
                <Logo className="h-full" />
              </a>
            </Link>
          </div>
        </div>

        <div className="middle">
          <div className="input-container flex hover:shadow-md py-2 px-2 rounded-full border-2 justify-between">
            <input
              type="text"
              className="focus:outline-0 mx-2 lg:w-[250px]"
              placeholder={'Start your Search'}
              value={currentQuery.location}
              onChange={handleSearchChange}
              name="location"
            />
            <div className="search-icon bg-[#FF385C] rounded-full h-8 w-8 flex items-center justify-center">
              <SearchIcon className="text-white text-base" />
            </div>
          </div>
        </div>

        <div className="right relative hidden sm:inline-flex">
          <a
            href="#"
            className="hover:bg-gray-100 px-3 py-2 rounded-full whitespace-nowrap hidden md:inline-flex"
          >
            Become a Host
          </a>

          <a
            href="#"
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
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                Help
              </li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                Log out
              </li>
            </ul>
          </div>
        </div>
      </div>

      {currentQuery.location && isSearching && (
        <div className="w-screen h-full relative mx-auto flex justify-center">
          <div className="w-full max-w-fit absolute mx-auto text-center mt-3 md:flex md:justify-center gap-x-10 lg:mt-5 bg-white rounded-2xl top-1 py-5 shadow-xl p-5">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
              name="date"
            />

            <div className="flex h-full flex-col">
              <div className="border-b-2 border-b-gray-300 w-[330px] mx-auto">
                <div className="flex justify-between px-1 pb-3">
                  <p className="text-xl font-semibold">Number of Guests</p>

                  <div className="flex items-center">
                    <People />

                    <input
                      type="number"
                      className="w-12 pl-2 outline-none text-lg text-red-400 font-bold"
                      value={currentQuery.numOfGuests}
                      name="numOfGuests"
                      onChange={handleSearchChange}
                      min="1"
                      max="30"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-[330px] mx-auto gap-x-10 my-4 mt-5 justify-center">
                <a>
                  <button
                    onClick={handleSearchClick}
                    className=" text-white py-1 px-8 rounded-full bg-[#FD5B61] hover:scale-[1.03] shadow-sm"
                  >
                    Search
                  </button>
                </a>

                <button
                  onClick={() => setSearchInput('')}
                  className="px-8 text-white bg-black rounded-full shadow-sm hover:scale-[1.03]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
