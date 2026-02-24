import React from "react";

const Button = ({text}) => {
  return (
    <div>
      {" "}
      <button className="flex bg-[#FF2E2E] gap-3 pt-3 pb-3 pr-6 pl-6 rounded-full text-[16px] font-medium text-white">
        {text}
      </button>
    </div>
  );
};

export default Button;
