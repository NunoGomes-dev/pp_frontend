import { allBoxShadows } from "../theme/boxShadows";
import { allColors } from "../theme/colors";

export default function colors({
  background,
  backgroundColor,
  bg,
  color,
  boxShadow,
}) {
  const bgColor = background || backgroundColor || bg || null;
  return `${bgColor ? `background: ${allColors[bgColor] || bgColor};` : ""}${
    color ? `color: ${allColors[color] || color};` : ""
  }${boxShadow ? `box-shadow: ${allBoxShadows[boxShadow] || boxShadow};` : ""}`;
}
