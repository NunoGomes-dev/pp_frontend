import { Box, HStack, VStack, Stack } from "../../Design";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useContext } from "react";
import { NotificationsContext } from "../../../context/NotificationsContext";
import styled, { keyframes } from "styled-components";

const motion = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Container = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 1rem;
  right: 1rem;
  animation: ${motion} 0.7s;
  backgroud: red;
`;

const ToastContainer = () => {
  const { toastList, deleteToast } = useContext(NotificationsContext);

  const Toast = ({
    id,
    title,
    description,
    color = "white",
    background = "#38A169",
  }) => (
    <HStack
      width="300px"
      bg={background}
      padding={2}
      gap={3}
      rounded="md"
      marginBottom="1rem"
      transition=".3s ease"
    >
      <Stack justify="center" align="center" rounded="full" bg={color}>
        <MdOutlineKeyboardArrowRight
          color={background}
          style={{ transform: "rotate(65deg)", fontSize: "24px" }}
        />
      </Stack>
      <VStack color={color} fontSize="md">
        <Box style={{ fontWeight: 600 }}>{title}</Box>
        <Box style={{ fontWeight: 400 }}>{description}</Box>
      </VStack>
      <Box
        onClick={() => {
          deleteToast(id);
        }}
      >
        <IoClose style={{ fontSize: "20px", color: color }} />
      </Box>
    </HStack>
  );

  return (
    <Container>
      {toastList.map((toast, i) => (
        <Toast key={i} {...toast} />
      ))}
    </Container>
  );
};

export default ToastContainer;

// className={`${styles.notification} ${styles.toast} ${styles[position]}`}

// .container {
// font-size: 14px;
// position: fixed;
// z-index: 10;
// }

// .buttom-right {
// bottom: 1rem;
// right: 1rem;
// animation: toast-in-right .7s;
// }

// .notification {
//   margin-bottom: 1rem;
//   border-radius: 4px;
//   box-shadow: 0 0 10px #999;
//   color: #000;
//   opacity: 0.9;
//   transition: .3s ease;
// }

// .notification:hover {
//   box-shadow: 0 0 12px #fff;
//   opacity: 1;
// }

// .toast {
//   height: 50px;
//   width: 365px;
//   color: #fff;
//   padding: 20px 15px 10px 10px;
// }

// .container button {
//   float: right;
//   background: none;
//   border: none;
//   color: #fff;
//   opacity: 0.8;
//   cursor: pointer;
// }

// .title {
//   font-weight: 700;
//   font-size: 16px;
//   text-align: left;
//   margin-top: 0;
//   margin-bottom: 6px;
//   width: 300px;
//   height: 18px;
// }

// .description {
//   margin: 0;
//   text-align: left;
// }

// @keyframes toast-in-right {
// from {
//   transform: translateX(100%);
// }
// to {
//   transform: translateX(0);
// }
// }
