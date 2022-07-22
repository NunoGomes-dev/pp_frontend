import { memo } from "react";
import { IoClose } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import { Box, Button, HStack, VStack } from "../../Design";

const motion = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const ToastContainer = styled.div`
  color: black;
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 10px #999;
  background: ${(p) => p.background};
  transition: 0.3s ease;
  min-height: 50px;
  padding: 0.5rem;
  color: #fff;
  bottom: 1rem;
  right: 1rem;
  animation: ${motion} 0.7s ease;
`;

const Toast = ({
  id,
  title,
  description,
  color = "white",
  background = "#38A169",
  icon,
  deleteToast,
}) => (
  <ToastContainer background={background}>
    <HStack justify="space-between">
      <HStack gap={4}>
        <Box>{icon}</Box>
        <VStack color={color} fontSize="md">
          <span style={{ fontWeight: 600 }}>{title}</span>
          <span style={{ fontWeight: 400 }}>{description}</span>
        </VStack>
      </HStack>
      <Button
        variant="unstyled"
        onClick={() => {
          deleteToast(id);
        }}
      >
        <IoClose style={{ fontSize: "20px", color: color }} />
      </Button>
    </HStack>
  </ToastContainer>
);

export default memo(Toast);
