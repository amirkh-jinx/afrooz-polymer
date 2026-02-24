import React from "react";
import logo from "../assets/img/logo.png";
import NavigatioBar from "./NavbarComponents/NavigatioBar";
import IconBtn from "./IconBtn";

const Navbar = () => {
  return (
    <div className="flex justify-center sticky top-5">
      <div className="flex items-center justify-between p-5 bg-white shadow-md w-11/12 rounded-3xl">
        <div className="flex items-center gap-3">
          {" "}
          <img src={logo} alt="" className="w-16" />
          <p className=" font-bold text-2xl text-[#FF2E2E]">
            افروز پلیمر سولار
          </p>
        </div>
        <NavigatioBar />

        <div className="flex items-center gap-3.5">
          <IconBtn />
          <button className="flex bg-[#FF2E2E] gap-3 pt-3 pb-3 pr-6 pl-6 rounded-full text-[16px] font-medium text-white">
            شروع یاد گیری
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
