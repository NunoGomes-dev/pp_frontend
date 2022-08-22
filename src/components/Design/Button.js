import { memo } from "react";
import { Spinner } from "../UI";
import HStack from "./HStack";
import { twMerge } from "tailwind-merge";

const BaseStyle = `bg-primary text-white py-4 px-8 rounded-md border-0`;

const getVariant = (variant) => {
  const variants = {
    solid: "bg-primary text-white",
    light: "bg-primaryLight text-primary",
    outline: "bg-primaryLight text-primary border border-solid border-primary",
    outline2: "bg-white text-primary border border-solid border-primary",
    search: "bg-white text-gray-300 border border-solid border-gray-300",
    unstyled: "bg-transparent text-primary",
  };

  return variants[variant] || "";
};

const Button = ({
  children,
  isLoading,
  loadingText,
  loadingPlacement = "start",
  icon,
  iconGap,
  disabled,
  iconPlacement = "start",
  variant,
  type,
  className,
  textAlign,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        `disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-auto ${BaseStyle} ${getVariant(
          variant
        )} ${className}`
      )}
      disabled={disabled || isLoading}
      type={type || "button"}
      {...rest}
    >
      {isLoading ? (
        <HStack
          className={`justify-${textAlign} items-center ${
            iconGap ? `gap-[${iconGap}]` : "gap-4"
          }`}
        >
          {loadingPlacement === "start" ? <Spinner color="white" /> : null}
          {loadingText ? loadingText : children}
          {loadingPlacement === "end" ? <Spinner color="white" /> : null}
        </HStack>
      ) : (
        <HStack
          className={`justify-${textAlign} items-center ${
            iconGap ? `gap-[${iconGap}]` : "gap-4"
          }`}
        >
          {icon && iconPlacement === "start" ? icon : null}
          {children}
          {icon && iconPlacement === "end" ? icon : null}
        </HStack>
      )}
    </button>
  );
};

export default memo(Button);
