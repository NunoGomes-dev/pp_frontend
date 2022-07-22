import { memo } from "react";
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
  width: auto;
  height: auto;
  background: #718096;
  border-radius: ${(p) => p.theme.borderRadius.md};
  animation: ${motion} 0.5s linear alternate infinite;
  ${(props) => props};
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const Skeleton = ({ isLoading, children, ...others }) => {
  if (isLoading)
    return (
      <Loading>
        <div style={{ opacity: 0 }}>{children}</div>
      </Loading>
    );

  return children;
};

export default memo(Skeleton);
