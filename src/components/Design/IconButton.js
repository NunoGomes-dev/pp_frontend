import { memo } from "react";
import { Spinner } from "../UI";

const BaseStyle = `bg-primary text-white py-4 px-8 rounded-md border-0`;

const getVariant = (variant) => {
  const variants = {
    solid: "bg-primary text-white",
    light: "bg-primaryLight text-primary",
    outline:
      "bg-primaryLight text-primary border-1 border-solid border-primary",
    outline2: "bg-white text-primary border-1 border-solid border-primary",
    unstyled: "bg-transparent text-primary",
  };

  return variants[variant] || "";
};

const IconButton = ({
  isLoading,
  icon,
  disabled,
  variant,
  className,
  ...rest
}) => {
  return (
    <button
      className={`cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${BaseStyle} ${getVariant(
        variant
      )} ${className}`}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? <Spinner /> : icon}
    </button>
  );
};

export default memo(IconButton);
