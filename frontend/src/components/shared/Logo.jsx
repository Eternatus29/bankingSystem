import React from "react";
import logo from "../../assets/icons/logo.png";

export const Logo = ({ textSize = null, bg = true }) => {
  return (
    <div
      className={`${
        bg && "shadow rounded"
      } w-full flex justify-center items-center p-2  select-none`}
    >
      <img src={logo} alt={"text"} height={120} width={120}/>
    </div>
  );
};
