import styled, { keyframes } from "styled-components";
import colors from "../../../utils/colors";
import sizes from "../../../utils/sizes";
import spacings from "../../../utils/spacings";
import tipography from "../../../utils/tipography";

const motion = () => keyframes`
from { opacity: 0.3; }
to { opacity: 0.5; }
`;

const Loading = styled.div`
  width: 200px;
  height: 200px;
  background: #718096;
  border-radius: ${(p) => p.theme.borderRadius.md};
  animation: ${motion} 0.5s linear alternate infinite;
  ${(props) => props}
  ${(props) => sizes(props)}
${(props) => spacings(props)}
${(props) => tipography(props)}
${(props) => colors(props)}
`;

const BoxLoading = (props) => {
  return <Loading {...props} />;
};

export default BoxLoading;
