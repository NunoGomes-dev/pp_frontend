import { Flex, Image } from "../../styled";

const UserItem = ({ user }) => {
  return (
    <Flex
      width="100%"
      background="#F7FAFC"
      padding="12px"
      justifyContent="space-between"
      alignItems="center"
      color="#718096"
      borderRadius="6px"
    >
      <Flex
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        gap="1rem"
      >
        <Image
          alt="userAvatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHA_iM3d5_gy-a3YKtsOx1VWmMkVOhLzRV1dVmuF72vwRN0YmP3QV6m2vSzoYYQwJfNkY&usqp=CAU"
          width={"32px"}
          height={"32px"}
          objectFit="cover"
          pointerEvents="none"
          userSelect="none"
          margin="0 0"
          borderRadius="10px"
        />
        <Flex flexDirection="column" alignItems="start" color="#718096">
          <div
            style={{ color: "#2D3748" }}
          >{`${user?.firstname} ${user?.lastname}`}</div>
          <div>{user?.email}</div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserItem;
