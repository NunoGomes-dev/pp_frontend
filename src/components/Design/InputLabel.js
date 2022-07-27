import { memo } from "react";
import styled from "styled-components";
import { allColors } from "../../theme/colors";
import { allFontSizes } from "../../theme/fontSizes";
import { allFontWeights } from "../../theme/fontWeights";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledLabel = styled.label`
  font-size: ${allFontSizes.md};
  font-weight: ${allFontWeights.medium};
  color: ${allColors.terciary};
  ${(p) => sizes(p)}
  ${(p) => spacings(p)}
  ${(p) => tipography(p)}
  ${(p) => colors(p)}
`;

const InputLabel = ({ children, required, ...others }) => {
  return (
    <StyledLabel {...others}>
      {children}
      {required ? (
        <span style={{ fontWeight: 300, color: "red" }}> *</span>
      ) : (
        ""
      )}
    </StyledLabel>
  );
};

export default memo(InputLabel);
