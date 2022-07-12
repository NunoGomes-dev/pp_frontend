import styled from "styled-components";

export const Flex = styled.div`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
  gap: ${(props) => props.gap || "0"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background: ${(props) => props.background || "transparent"};
  color: ${(props) => props.color || "white"};
  border-radius: ${(props) => props.borderRadius || "0px"};
  cursor: ${(props) => props.cursor};
  border: ${(props) => props.border || "none"};
`;
