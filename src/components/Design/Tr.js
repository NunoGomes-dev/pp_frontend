import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledTr = styled.tr`
  border-spacing: 1rem;
  height: 50px;
  ${(props) => props};
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const Tr = ({ unstyled = false, ...others }) => {
  const defaultProps = !unstyled
    ? {
        border: "1px solid #e0e0e0",
        "border-radius": "10px",
        background: "white",
      }
    : {};

  return <StyledTr {...others} {...defaultProps} />;
};

export default Tr;
