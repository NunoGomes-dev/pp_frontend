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
  padding-bottom: 1rem;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

export const Image = styled.img`
  width: auto;
  height: 100px;
  object-fit: "contain";
  pointer-events: "none";
  user-select: "none";
  padding: 0 0 2rem 0;
`;

export const Button = styled.button`
  background: #ddba92;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 375px;
  height: 40px;
  background: #fafafa;
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
