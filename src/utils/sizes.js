export default function sizes(props) {
  return `${props.width ? `width: ${props.theme.sizes[props.width]};` : ""}
  ${props.height ? `height: ${props.theme.sizes[props.height]};` : ""}
  ${props.maxWidth ? `max-width: ${props.theme.sizes[props.maxWidth]};` : ""}  
 ${
   props.maxHeight ? `max-height: ${props.theme.sizes[props.maxHeight]};` : ""
 }`;
}
