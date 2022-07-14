export default function tipography({
  theme,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
}) {
  return `${fontWeight && `font-weight: ${theme.fontWeights[fontWeight]};`}
  ${fontSize && `font-size: ${theme.fontSizes[fontSize]};`}
  ${lineHeight && `line-height: ${theme.lineHeights[lineHeight]};`}
  ${
    letterSpacing && `letter-spacing: ${theme.letterSpacings[letterSpacing]};`
  }`;
}
