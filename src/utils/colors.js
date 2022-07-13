export default function colors(props) {
  return `background: ${
    props.theme.colors[props.bg || props.background || props.backgroundColor] ||
    props.bg ||
    props.background ||
    props.backgroundColor
  };
  color: ${props.theme.colors[props.color] || props.color};`;
}
