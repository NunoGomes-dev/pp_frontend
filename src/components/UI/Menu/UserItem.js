import { memo } from "react";
import { Box, Grid, HStack, Image, VStack } from "../../Design";

const UserItem = ({ user }) => {
  return (
    <HStack className="w-full items-center text-[#718096] bg-[#F7FAFC] rounded-md border-0">
      <Grid className="w-[calc(100%-0.5rem)] grid-cols-[30%_70%] gap-x-2 items-center p-2">
        <Box className={"w-full h-full"}>
          <Image
            className="w-full h-full border-0 rounded-md"
            alt="userAvatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHA_iM3d5_gy-a3YKtsOx1VWmMkVOhLzRV1dVmuF72vwRN0YmP3QV6m2vSzoYYQwJfNkY&usqp=CAU"
          />
        </Box>
        <VStack className="w-full text-[#718096]">
          <div className="text-[#2D3748] whitespace-nowrap overflow-hidden text-ellipsis w-full">{`${user?.firstname} ${user?.lastname}`}</div>
          <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis w-full">
            {user?.email}
          </div>
        </VStack>
      </Grid>
    </HStack>
  );
};

export default memo(UserItem);
