import { memo } from "react";
import styled from "styled-components";
import { allColors } from "../../theme/colors";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";
import { Spinner } from "../UI";

const BaseStyle = () => `
  background-color: ${allColors.primary};
  color: ${allColors.white};
  padding: 1rem 2rem;
  border-radius: 8px;
  border: none;
`;

const getVariant = ({ variant }) => {
  const variants = {
    solid: {
      "background-color": `${allColors.primary}`,
      color: `${allColors.white}`,
      padding: "1rem 2rem",
      "border-radius": "8px",
      border: "none",
    },
    light: {
      "background-color": `${allColors.primaryLight}`,
      color: `${allColors.primary}`,
      padding: "1rem 2rem",
      "border-radius": "8px",
      border: "none",
    },
    outline: {
      "background-color": `${allColors.primaryLight}`,
      color: `${allColors.primary}`,
      padding: "1rem 2rem",
      "border-radius": "8px",
      border: `1px solid ${allColors.primary}`,
    },
    outline2: {
      "background-color": `${allColors.white}`,
      color: `${allColors.primary}`,
      padding: "1rem 2rem",
      "border-radius": "8px",
      border: `1px solid ${allColors.primary}`,
    },
    unstyled: {
      "background-color": "transparent",
      color: `${allColors.white}`,
      padding: "0",
      "border-radius": "none",
      border: "none",
    },
  };

  return variants[variant];
};

const StyledButton = styled.button`
  cursor: pointer;
  ${BaseStyle()};
  ${({ variant }) => getVariant({ variant }) || ``};
  ${(p) => p};
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

const IconButton = ({ isLoading, icon, disabled, ...rest }) => {
  return (
    <StyledButton {...rest} disabled={disabled || isLoading}>
      {isLoading ? <Spinner /> : icon}
    </StyledButton>
  );
};

export default memo(IconButton);
