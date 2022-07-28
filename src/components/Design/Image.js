import { memo } from "react";

const Image = ({ className, src, alt, ...p }) => {
  return (
    <img
      className={`object-contain pointer-events-none select-none ${className}`}
      src={src}
      alt={alt}
      {...p}
    />
  );
};

export default memo(Image);
