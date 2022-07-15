import styled from "styled-components";
import colors from "../../utils/colors";
import others from "../../utils/others";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";
import { Spinner } from "../UI";
import HStack from "./HStack";

const StyledButton = styled.button`
  cursor: pointer;
  ${({ theme }) => theme.components.button.baseStyle || ``};
  ${({ variant, theme }) => theme.components.button.variants[variant] || ``};
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

export default Button;
