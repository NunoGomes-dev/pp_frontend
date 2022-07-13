import { HStack, Image, VStack } from "../../Design";

const UserItem = ({ user }) => {
  return (
    <HStack
      width="calc(100% - 24px)"
      padding="12px"
      justify="space-between"
      align="center"
      color="#718096"
      background="#F7FAFC"
      borderRadius="6px"
    >
      <HStack justify="start" align="center" gap="1rem">
        <Image
          alt="userAvatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHA_iM3d5_gy-a3YKtsOx1VWmMkVOhLzRV1dVmuF72vwRN0YmP3QV6m2vSzoYYQwJfNkY&usqp=CAU"
          width="35px"
          height="35px"
          border="none"
          objectFit="cover"
          pointerEvents="none"
          userSelect="none"
          borderRadius="10px"
        />
        <VStack flexDirection="column" alignItems="start" color="#718096">
          <div
            style={{ color: "#2D3748" }}
          >{`${user?.firstname} ${user?.lastname}`}</div>
          <div>{user?.email}</div>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default UserItem;
