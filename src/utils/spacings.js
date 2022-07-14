export default function spacings(props) {
  return `${props.margin ? `margin: ${props.theme.space[props.margin]};` : ""}
  ${props.marginTop ? `margin-top: ${props.theme.space[props.marginTop]};` : ""}
  ${
    props.marginBottom
      ? `margin-bottom: ${props.theme.space[props.marginBottom]};`
      : ""
  }
  ${
    props.marginRight
      ? `margin-right: ${props.theme.space[props.marginRight]};`
      : ""
  }
  ${
    props.marginLeft
      ? `margin-left: ${props.theme.space[props.marginLeft]};`
      : ""
  }
  ${props.padding ? `padding: ${props.theme.space[props.padding]};` : ""}
  ${
    props.paddingTop
      ? `padding-top: ${props.theme.space[props.paddingTop]};`
      : ""
  }
  ${
    props.paddingBottom
      ? `padding-bottom: ${props.theme.space[props.paddingBottom]};`
      : ""
  }
  ${
    props.paddingRight
      ? `padding-right: ${props.theme.space[props.paddingRight]};`
      : ""
  } ${
    props.paddingLeft
      ? `padding-left: ${props.theme.space[props.paddingLeft]};`
      : ""
  }
  `;
}
