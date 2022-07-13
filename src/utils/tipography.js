export default function tipography(props) {
  return `font-weight: ${props.theme.fontWeights[props.fontWeight]};
    font-size: ${props.theme.fontSizes[props.fontSize]};
    line-height: ${props.theme.lineHeights[props.lineHeight]};
    letter-spacing: ${props.theme.letterSpacings[props.letterSpacing]};`;
}
