import { useContext } from "react";
import { NotificationsContext } from "../../../context/NotificationsContext";
import Toast from "./Toast";
import styled, { keyframes } from "styled-components";
import { memo } from "react";

const motion = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Container = styled.div`
  width: auto;
  height: auto;
  bottom: 0;
  right: 0;
  position: fixed;
  animation: ${motion} 0.7s;
  transition: all 1s ease-in-out;
`;

const ToastContainer = () => {
  const { toastList, deleteToast } = useContext(NotificationsContext);

  // if (toastList.length === 0) return null;

  return (
    <Container>
      {toastList.map((toast, i) => (
        <Toast key={i} {...toast} deleteToast={deleteToast} />
      ))}
    </Container>
  );
};

export default memo(ToastContainer);
