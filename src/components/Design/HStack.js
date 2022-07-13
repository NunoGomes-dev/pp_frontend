import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const HStack = styled.div`
  ${(props) => props}
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "start"};
  gap: ${(props) => props.theme.space[props.gap] || props.gap || "0.5rem"};
  ${sizes}
  ${spacings}
    ${tipography}
    ${colors}
`;

export default HStack;
