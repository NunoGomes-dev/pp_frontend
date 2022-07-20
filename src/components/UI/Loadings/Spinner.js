import React from "react";
import styled, { keyframes } from "styled-components";

const motion = () => keyframes`
 to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  position: relative;
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${(p) => p.size};
    height: ${(p) => p.size};
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid ${(p) => p.color};
    border-top-color: transparent;
    animation: ${motion} 0.5s linear infinite;
  }
  ${(p) => p}
`;

const Default = ({ size = "20px", color = "#ccc", ...others }) => {
  return <Spinner size={size} color={color} {...others} />;
};

export default Default;
