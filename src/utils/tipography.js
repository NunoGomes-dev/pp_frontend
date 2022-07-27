import { allFontSizes } from "../theme/fontSizes";
import { allFontWeights } from "../theme/fontWeights";
import { allLetterSpacings } from "../theme/letterSpacings";
import { allLineHeights } from "../theme/lineHeights";

const tipography = ({ fontWeight, fontSize, lineHeight, letterSpacing }) => {
  return `${
    fontWeight
      ? `font-weight: ${allFontWeights[fontWeight] || fontWeight};`
      : ""
  }
  ${fontSize ? `font-size: ${allFontSizes[fontSize] || fontSize};` : ""}
  ${
    lineHeight
      ? `line-height: ${allLineHeights[lineHeight] || lineHeight};`
      : ""
  }
  ${
    letterSpacing
      ? `letter-spacing: ${allLetterSpacings[letterSpacing] || letterSpacing};`
      : ""
  }`;
};
export default tipography;
