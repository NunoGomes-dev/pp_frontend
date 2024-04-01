import { memo } from "react";
import { twMerge } from "tailwind-merge";

const Image = ({ className, src, alt, ...p }) => {
  return (
    <img
      className={twMerge(
        `object-contain pointer-events-none select-none ${className}`
      )}
      src={src}
      alt={alt}
      {...p}
    />
  );
};

export default memo(Image);
