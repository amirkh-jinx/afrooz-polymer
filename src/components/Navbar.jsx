import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import NavigatioBar from "./NavbarComponents/NavigatioBar";
import IconBtn from "./IconBtn";
import Button from "./button";
import { Moon02Icon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}   // شروع از بالا
      animate={{ opacity: 1, y: 0 }}     // جای اصلی
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center relative top-5 z-50 px-4"
    >
      <div className="flex items-center justify-between p-5 bg-white shadow-md w-full md:w-11/12 rounded-3xl absolute">

        {/* لوگو */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="w-12 md:w-16" />
          <p className="font-bold text-lg md:text-2xl text-[#FF2E2E]">
            افروز پلیمر سولار
          </p>
        </div>

        {/* منوی دسکتاپ */}
        <div className="hidden md:block">
          <NavigatioBar />
        </div>

        {/* بخش راست دسکتاپ */}
        <div className="hidden md:flex items-center gap-3.5">
          <IconBtn iconame={Moon02Icon} />
          <Button text={"در ارتباط باشید"} />
        </div>

        {/* آیکن همبرگر موبایل */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <IconBtn iconame={isOpen ? Cancel01Icon : Menu01Icon} />
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute top-24 w-11/12 bg-white shadow-xl rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-5 text-base font-medium [&>*]:w-full [&>*]:text-center">
                <NavigatioBar />
              </div>

              <IconBtn iconame={Moon02Icon} />

              <div className="w-full">
                <Button text={"در ارتباط باشید"} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;