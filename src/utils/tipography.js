const tipography = ({
  theme,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
}) => {
  return `${
    fontWeight
      ? `font-weight: ${theme.fontWeights[fontWeight] || fontWeight};`
      : ""
  }
  ${fontSize ? `font-size: ${theme.fontSizes[fontSize] || fontSize};` : ""}
  ${
    lineHeight
      ? `line-height: ${theme.lineHeights[lineHeight] || lineHeight};`
      : ""
  }
  ${
    letterSpacing
      ? `letter-spacing: ${
          theme.letterSpacings[letterSpacing] || letterSpacing
        };`
      : ""
  }`;
};
export default tipography;
