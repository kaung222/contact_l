import { useState } from "react";
import { BsGear, BsSearch } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  console.log(showProfile);
  return (
    <>
      <div className=" px-2 flex w-full justify-between items-center gap-4 text-sm md:text-base  md:px-5 shadow-lg">
        <div className="flex items-center justify-center gap-2 md:gap-5 my-3 md:my-5">
          <button
            className="menu text-md md:text-2xl dark:bg-slate-500"
            onClick={() => document.documentElement.classList.add('dark')}
          >
            <FcMenu />
          </button>
          <div className="hidden md:flex">
            <img
              src="https://www.gstatic.com/images/branding/product/2x/contacts_2022_48dp.png"
              alt=""
              className=" w-[30px] h-[30px]"
            />
          </div>
          <p className=" hidden md:block text-xl font-semibold text-slate-500">
            Contacts
          </p>
        </div>
        <div className=" bg-slate-50 rounded active:shadow-lg flex items-center justify-center shadow-slate-700 md:px-3 px-2 py-1">
          <button className="text-slate-700 text-md md:text-2xl">
            <BsSearch />
          </button>
          <input
            type="text"
            name="search"
            className=" outline-none px-1 md:px-3 md:py-1 py-0 md:w-[400px] text-slate-800 w-full bg-slate-50 "
            placeholder=" search"
          />
        </div>
        <div className="flex items-center justify-center md:gap-5">
          <button className=" hidden md:block ">
            <BsGear />
          </button>
          <button
            className=" border-2 border-blue-500 rounded-full"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="..."
              className=" md:w-[30px]  md:h-[30px] w-[20px]  h-[20px]"
            />
          </button>
          {showProfile && (
            <div className=" p-3 absolute items-start w-52 top-[40px] md:top-[50px] rounded-xl flex flex-col shadow-2xl shadow-black right-0 bg-slate-50">
              <Link className="p-2">Profile</Link>
              <Link className="p-2">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
