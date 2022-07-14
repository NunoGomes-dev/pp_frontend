import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const Box = styled.div`
  ${(props) => props};
  ${sizes};
  ${spacings};
  ${tipography};
  ${colors};
`;

export default Box;
