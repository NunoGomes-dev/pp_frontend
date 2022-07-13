export default function sizes(props) {
  return `width: ${props.theme.sizes[props.width]};
  height: ${props.theme.sizes[props.height]};
  max-width: ${props.theme.sizes[props.maxWidth]};
  max-height: ${props.theme.sizes[props.maxHeight]};`;
}
