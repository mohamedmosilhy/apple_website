import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

export const Navbar = () => {
  return (
    <header className=" w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className=" flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={18} height={18} />
        <div className=" flex justify-center flex-1 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className=" px-5 text-sm text-gray hover:text-white transition-all cursor-pointer"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline max-sm:justify-end gap-7 max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
