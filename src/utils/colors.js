export default function colors(props) {
  const bg = props.background || props.backgroundColor || props.bg || null;
  return `${bg && `background: ${props.theme.colors[bg] || bg};`}${
    props.color && `color: ${props.theme.colors[props.color] || props.color};`
  }`;
}
