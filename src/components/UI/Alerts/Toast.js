import { memo } from "react";
import { IoClose } from "react-icons/io5";
import { Box, Button, HStack, VStack } from "../../Design";

const Toast = ({
  id,
  title,
  description,
  color = "white",
  background = "#38A169",
  icon,
  deleteToast,
}) => (
  <div
    className={`mb-4 rounded shadow-md transition-all duration-300 ease min-h-[50px] p-2 bottom-4 right-4 text-white animate-toast`}
    style={{ background: background }}
  >
    <HStack className="justify-between gap-6">
      <HStack className="gap-4">
        <Box>{icon}</Box>
        <VStack className={`text-md gap-2`} style={{ color: color }}>
          <span className="font-semibold">{title}</span>
          <span className="font-normal">{description}</span>
        </VStack>
      </HStack>
      <Button
        className="px-0 py-0"
        variant="unstyled"
        onClick={() => {
          deleteToast(id);
        }}
      >
        <IoClose style={{ fontSize: "20px", color: color }} />
      </Button>
    </HStack>
  </div>
);

export default memo(Toast);
