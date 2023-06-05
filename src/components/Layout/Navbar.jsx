import { BsGear, BsSearch } from "react-icons/bs";
import {FcMenu} from "react-icons/fc"
const Navbar = () => {
  return (
    <>
      <div className=" flex w-full justify-between items-center gap-4 text-sm md:text-base  px-5 py-2  fixed top-0 z-10 bg-white">
        <div className="flex items-center justify-center gap-2 md:gap-5 my-5">
          <button className="menu text-2xl">
            <FcMenu/>
          </button>
          <div className="hidden md:flex">
            <img src="https://www.gstatic.com/images/branding/product/2x/contacts_2022_48dp.png" alt="" className=" w-[30px] h-[30px]" />
          </div>
          <p className=" text-xl font-semibold text-slate-500">Contacts</p>
        </div>
        <div className=" bg-slate-50 rounded active:shadow-lg flex items-center justify-center shadow-slate-700 px-4 py-1">
          <button className="text-slate-700">
            <BsSearch />
          </button>
          <input
            type="text"
            name="search"
            className=" outline-none px-3 py-1 md:w-[400px] text-slate-800 w-full bg-slate-50 "
            placeholder=" search"
          />
        </div>
        <div className="flex items-center justify-center md:gap-5">
          <button className=" hidden md:block ">
            <BsGear />
          </button>
          <button className=" border-2 border-blue-500 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="..."
              className=" w-[30px] h-[30px]"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
