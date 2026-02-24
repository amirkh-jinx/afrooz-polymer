import React from "react";
import {
  FlashlightFreeIcons,
  HugeiconsFreeIcons,
  Moon02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const IconBtn = () => {
  return (
    <button className="w-[40px] h-[40px] border border-[#B5B5B5] dark:border-[#555555]  rounded-full flex justify-center items-center cursor-pointer">
      <HugeiconsIcon
        icon={Moon02Icon}
        size={24}
        color="#272727"
        strokeWidth={1.5}
      />
    </button>
  );
};

export default IconBtn;
