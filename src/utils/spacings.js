export default function spacings(props) {
  return `margin: ${props.theme.space[props.margin]};
  margin-top: ${props.theme.space[props.marginTop]};
  margin-bottom: ${props.theme.space[props.marginBottom]};
  margin-right: ${props.theme.space[props.marginRight]};
  margin-left: ${props.theme.space[props.marginLeft]};
  padding: ${props.theme.space[props.padding]};
  padding-top: ${props.theme.space[props.paddingTop]};
  padding-bottom: ${props.theme.space[props.paddingBottom]};
  padding-right: ${props.theme.space[props.paddingRight]};
  padding-left: ${props.theme.space[props.paddingLeft]};`;
}
