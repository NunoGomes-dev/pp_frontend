import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2rem;
  border-radius: 8px;
  background: white;
  border: 1px solid #e0e0e0;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
  width: 100%;
`;

export const Image = styled.img`
  width: auto;
  height: 100px;
  object-fit: "contain";
  pointer-events: "none";
  user-select: "none";
  padding: 0 0 2rem 0;
`;

export const Input = styled.input`
  width: 375px;
  height: 40px;
  background: red;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  color: #210203;
  font-size: 16px;
  font-weight: 400;
  margin-top: 0.5rem;
  &:focus {
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  &:active {
    -webkit-tap-highlight-color: transparent;
  }
`;

export const Label = styled.label`
  color: #210203;
  font-size: 16px;
  font-weight: 500;
`;
