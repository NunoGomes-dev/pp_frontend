import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";

const Image = styled.Image`
  ${(props) => props}
  object-fit: ${(props) => props.objectFit || "contain"}
  pointer-events: ${(props) => props.pointerEvents || "none"}
  user-select: ${(props) => props.userSelect || "none"}
  ${sizes}
  ${spacings}
  ${colors}
`;

export default Image;
