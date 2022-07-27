import { allBorderRadius } from "../theme/borderRadius";
import { allSizes } from "../theme/sizes";

export default function sizes({
  borderRadius,
  rounded,
  width,
  height,
  maxWidth,
  maxHeight,
}) {
  const borderRadiusProp = borderRadius || rounded;

  return `${width ? `width: ${allSizes[width] || width};` : ""}
  ${height ? `height: ${allSizes[height] || height};` : ""}
  ${maxWidth ? `max-width: ${allSizes[maxWidth] || maxWidth};` : ""}  
 ${maxHeight ? `max-height: ${allSizes[maxHeight] || maxHeight};` : ""}${
    borderRadiusProp
      ? `border-radius: ${
          allBorderRadius[borderRadiusProp] || borderRadiusProp
        };`
      : ""
  }`;
}
