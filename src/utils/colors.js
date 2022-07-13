export default function colors(props) {
  return `${
    (props.background || props.backgroundColor) &&
    `background: ${
      props.theme.colors[props.background || props.backgroundColor] ||
      props.background ||
      props.backgroundColor
    };`
  }${
    props.color && `color: ${props.theme.colors[props.color] || props.color};`
  }`;
}
