import { allSpacings } from "../theme/spacing";

export default function spacings({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
}) {
  return `${margin ? `margin: ${allSpacings[margin] || margin};` : ""}
  ${marginTop ? `margin-top: ${allSpacings[marginTop] || marginTop};` : ""}
  ${
    marginBottom
      ? `margin-bottom: ${allSpacings[marginBottom] || marginBottom};`
      : ""
  }
  ${
    marginRight
      ? `margin-right: ${allSpacings[marginRight] || marginRight};`
      : ""
  }
  ${marginLeft ? `margin-left: ${allSpacings[marginLeft] || marginLeft};` : ""}
  ${padding ? `padding: ${allSpacings[padding] || padding};` : ""}
  ${paddingTop ? `padding-top: ${allSpacings[paddingTop] || paddingTop};` : ""}
  ${
    paddingBottom
      ? `padding-bottom: ${allSpacings[paddingBottom] || paddingBottom};`
      : ""
  }
  ${
    paddingRight
      ? `padding-right: ${allSpacings[paddingRight] || paddingRight};`
      : ""
  } ${
    paddingLeft
      ? `padding-left: ${allSpacings[paddingLeft] || paddingLeft};`
      : ""
  }
  `;
}
