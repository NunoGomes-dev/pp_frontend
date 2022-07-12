import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => props.objectFit || "contain"};
  pointer-events: ${(props) => props.pointerEvents || "auto"};
  user-select: ${(props) => props.userSelect || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  border-radius: ${(props) => props.borderRadius || "0px"};
`;
