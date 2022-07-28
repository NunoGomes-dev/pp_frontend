import React, { memo } from "react";

const Spinner = ({ size = "20px", color = "#ccc", className, ...others }) => {
  return (
    <div
      className={`relative before:content-["_"] before:absolute before:top-1/2 before:left-1/2 before:w-[20px] before:h-[20px] before:rounded-full before:border-2 before:border-solid before:border-white before:box-border before:mt-[-10px] before:ml-[-10px] before:border-t-transparent animate-spinner`}
      {...others}
    />
  );
};

export default memo(Spinner);
