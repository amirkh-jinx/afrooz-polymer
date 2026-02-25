import React from "react";
import img3 from "../../assets/img/productimg.jpg";
import logo from "../../assets/img/logo.png";

const Card = () => {
  return (
    <div className="w-[382px] h-[535] shadow-md bg-white overflow-hidden rounded-[40px]">
      <img src={img3} alt="" className="w-[382px] h-[215px]" />

      <div className="flex flex-col p-5 gap-5">
        <h3 className="text-2xl text-[#272727] font-bold">TPE الکتریکی</h3>
        <p className="text-[18px] text-[#272727]">
          ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
          و{" "}
        </p>
        <div className="border border-1 border-[#787878] rounded-b-full"></div>
        <div className="flex gap-3.5 items-center">
          <img src={logo} alt="" className="w-[66px]" />
          <div>
            <p className="text-[16px] font-medium">افروز پلیمر سولار</p>
            <p className="text-[16px] font-medium">13 تیر 1401</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
