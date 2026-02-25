import React from "react";
import { Link } from "react-router-dom";

const NavigatioBar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-11">
      
      <Link
        to={"/ProductList"}
        className="text-base md:text-xl font-bold text-[#272727] w-full md:w-auto text-center md:text-right"
      >
        محصولات
      </Link>

      <Link
        to={"/Certificates"}
        className="text-base md:text-xl font-bold text-[#272727] w-full md:w-auto text-center md:text-right"
      >
        گواهینامه ها
      </Link>

      <Link
        to={"/AboutUs"}
        className="text-base md:text-xl font-bold text-[#272727] w-full md:w-auto text-center md:text-right"
      >
        درباره ما
      </Link>

      <Link
        to={"/ContactUs"}
        className="text-base md:text-xl font-bold text-[#272727] w-full md:w-auto text-center md:text-right"
      >
        ارتباط با ما
      </Link>

    </div>
  );
};

export default NavigatioBar;