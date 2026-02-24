import React from "react";
import { Link } from "react-router-dom";

const NavigatioBar = () => {
  return (
    <div className="flex gap-11">
      <Link to={"/ProductList"} className="text-xl font-bold text-[#272727]"> محصولات  </Link>
      <Link to={"/Certificates"} className="text-xl font-bold text-[#272727]"> گواهینامه ها </Link>
      <Link to={"/AboutUs"} className="text-xl font-bold text-[#272727]"> درباره ما </Link>
      <Link to={"/ContactUs"} className="text-xl font-bold text-[#272727]"> ارتباط با ما </Link>
    </div>
  );
};

export default NavigatioBar;
