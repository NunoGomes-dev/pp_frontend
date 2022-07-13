export default function tipography(props) {
  return `${
    props.fontWeight &&
    `font-weight: ${props.theme.fontWeights[props.fontWeight]};`
  }
    ${props.fontSize && `font-size: ${props.theme.fontSizes[props.fontSize]};`}
    ${
      props.lineHeight &&
      `line-height: ${props.theme.lineHeights[props.lineHeight]};`
    }
    ${
      props.letterSpacing &&
      `letter-spacing: ${props.theme.letterSpacings[props.letterSpacing]};`
    }`;
}
