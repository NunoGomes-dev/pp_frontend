import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import others from "../../utils/others";
import { memo } from "react";

const StyledImage = styled.img`
  object-fit: ${(props) => props.objectFit || "contain"};
  pointer-events: ${(props) => props.pointerEvents || "none"};
  user-select: ${(props) => props.userSelect || "none"};
  ${(props) => sizes(props)}
  ${(props) => spacings(props)}
  ${(props) => colors(props)}
  ${(props) => others(props)}
`;

const Image = ({ children, ...others }) => {
  return <StyledImage {...others} />;
};

export default memo(Image);
