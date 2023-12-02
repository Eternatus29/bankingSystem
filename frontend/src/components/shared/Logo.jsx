import React from "react";
import { FcLightAtTheEndOfTunnel } from "react-icons/fc";
import bank from "../../assets/icons/E-BANK-Logo.png";

export const Logo = ({ textSize = null, bg = true }) => {
  return (
    <div
      className={`${
        bg && "shadow rounded"
      } w-full flex justify-center items-center p-2  select-none`}
    >
      <img src={bank} alt={"text"} height={120} width={120}/>
    </div>
  );
};
