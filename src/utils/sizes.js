export default function sizes(props) {
  const borderRadius = props.borderRadius || props.rounded;

  return `${props.width ? `width: ${props.theme.sizes[props.width]};` : ""}
  ${props.height ? `height: ${props.theme.sizes[props.height]};` : ""}
  ${props.maxWidth ? `max-width: ${props.theme.sizes[props.maxWidth]};` : ""}  
 ${
   props.maxHeight ? `max-height: ${props.theme.sizes[props.maxHeight]};` : ""
 }${
    borderRadius
      ? `border-radius: ${
          props.theme.borderRadius[borderRadius] || borderRadius
        };`
      : ""
  }`;
}
