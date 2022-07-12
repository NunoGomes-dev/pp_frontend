import styled from "styled-components";

export const Text = () => styled.div`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background: ${(props) => props.background || "transparent"};
  color: ${(props) => props.color || "white"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`;
