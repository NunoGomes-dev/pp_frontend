import styled from "styled-components";

export const Button = () => styled.button`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background: ${(props) => props.background || "transparent"};
  color: ${(props) => props.color || "white"};
  border-radius: ${(props) => props.borderRadius || "0px"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  flex: ${(props) => props.flex || "none"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
  gap: ${(props) => props.gap || "0"};
  border: ${(props) => props.border || "none"};
  cursor: ${(props) => props.cursor || "pointer"};
`;
