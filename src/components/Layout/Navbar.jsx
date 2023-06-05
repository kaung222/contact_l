import { useContactQuery } from "../../features/ContactApi"

const Navbar = () => {
  const token = localStorage.getItem("token")

  console.log(token)
  const {data} = useContactQuery({token})
  console.log(data)
  return (
    <>
      <div className=" bg-[#3559e6] flex w-full justify-between items-center gap-4 text-sm md:text-base text-white px-5 shadow-lg">
        <div className="flex items-center justify-center gap-2 md:gap-5 my-5">
          <div className="menu">Menu</div>
          <div className="hidden md:flex">Logo</div>
          <p>Name</p>
        </div>
        <div className=" bg-slate-50 rounded active:shadow-lg flex items-center justify-center shadow-slate-700 px-4 py-1">
          <button className="text-slate-700">Icon</button>
          <input
            type="text"
            name="search"
            className=" outline-none px-3 py-1 md:w-[400px] w-full bg-slate-50 "
            placeholder=" search"
          />
          
        </div>
        <div className="flex items-center justify-center md:gap-5">
          <button className=" hidden md:block ">setting icon</button>
          <button>
            <img src="" alt="..." className=" w-[30px] h-[30px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
