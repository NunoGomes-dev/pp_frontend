import { memo } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import others from "../../utils/others";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";
import { Spinner } from "../UI";
import HStack from "./HStack";

const BaseStyle = ({ theme }) => `
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 8px;
  border: none;
`;

const getVariant = ({ variant, theme }) => {
  const variants = {
    solid: {
      "background-color": `${theme.colors.primary}`,
      color: `${theme.colors.white}`,
      padding: "1rem 2rem",
      "border-radius": "8px",
      border: "none",
    },
    light: {
      "background-color": `${theme.colors.primaryLight}`,
      color: `${theme.colors.primary}`,
      padding: "1rem 2rem",
      "border-radius": "8px",
      border: "none",
    },
    outline: {
      "background-color": `${theme.colors.primaryLight}`,
      color: `${theme.colors.primary}`,
      padding: "1rem 2rem",
      "border-radius": "8px",
      border: `1px solid ${theme.colors.primary}`,
    },
    outline2: {
      "background-color": `${theme.colors.white}`,
      color: `${theme.colors.primary}`,
      padding: "1rem 2rem",
      "border-radius": "8px",
      border: `1px solid ${theme.colors.primary}`,
    },
    unstyled: {
      "background-color": "transparent",
      color: `${theme.colors.white}`,
      padding: "0",
      "border-radius": "none",
      border: "none",
    },
  };

  return variants[variant];
};

const StyledButton = styled.button`
  cursor: pointer;
  ${(p) => BaseStyle(p)};
  ${({ variant, theme }) => getVariant({ variant, theme }) || ``};
  ${(p) => others(p)};
  ${(p) => sizes(p)}
  ${(p) => spacings(p)}
  ${(p) => tipography(p)}
  ${(p) => colors(p)}
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const Button = ({
  children,
  isLoading,
  loadingText,
  loadingPlacement = "start",
  icon,
  iconGap,
  disabled,
  iconPlacement = "start",
  ...rest
}) => {
  return (
    <StyledButton {...rest} disabled={disabled || isLoading}>
      {isLoading ? (
        <HStack justify="center" align="center" gap={iconGap || "4"}>
          {loadingPlacement === "start" ? <Spinner color="white" /> : null}
          {loadingText ? loadingText : children}
          {loadingPlacement === "end" ? <Spinner color="white" /> : null}
        </HStack>
      ) : (
        <HStack justify="center" align="center" gap={iconGap || "4"}>
          {icon && iconPlacement === "start" ? icon : null}
          {children}
          {icon && iconPlacement === "end" ? icon : null}
        </HStack>
      )}
    </StyledButton>
  );
};

export default memo(Button);
