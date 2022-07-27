/* eslint-disable no-unused-vars */
export default function others(props) {
  const {
    width,
    height,
    maxHeight,
    maxWidth,
    backgroundColor,
    background,
    color,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    ...rest
  } = props;

  return { ...rest };
}
