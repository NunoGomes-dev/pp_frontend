import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import banner from "../../../assets/MenuBanner.png";
import UserItem from "./UserItem";
import LinkItem from "./LinkItem";
import { useLocation } from "react-router-dom";
import { FiSettings, FiPackage, FiLayers, FiTruck } from "react-icons/fi";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { ImDrawer2 } from "react-icons/im";
import { Flex, Image } from "../../styled";
import { MdLogout } from "react-icons/md";
import { useLogout } from "../../../hooks/useLogout";

const Menu = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const doLogout = useLogout();

  const activePath = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <Flex
      width="16rem"
      height="100%"
      background="white"
      padding="1rem"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex
        width="100%"
        flexDirection="column"
        justifyContent="start"
        gap="1rem"
      >
        <Image
          src={banner}
          alt="banner_pp"
          width="100%"
          height="auto"
          objectFit="contain"
          pointerEvents="none"
          userSelect="none"
          margin="1rem 0"
        />
        <UserItem user={user} />
        <LinkItem
          text={"Dashboard"}
          isActive={location.pathname === "/"}
          to="/"
          LeftIcon={<MdOutlineSignalCellularAlt />}
        />
        <LinkItem
          text={"Peças"}
          LeftIcon={<FiSettings />}
          to="parts"
          isActive={activePath("/parts")}
        />
        <LinkItem
          text={"Inventário"}
          LeftIcon={<FiLayers />}
          to="inventory"
          isActive={activePath("/inventory")}
        />
        <LinkItem
          text={"Encomendas"}
          LeftIcon={<FiPackage />}
          to="orders"
          isActive={activePath("/orders")}
        />
        <LinkItem
          text={"Fornecedores"}
          LeftIcon={<FiTruck />}
          to="providers"
          isActive={activePath("/providers")}
        />
        <LinkItem
          text={"Gavetas"}
          LeftIcon={<ImDrawer2 />}
          to="storages"
          isActive={activePath("/storages")}
        />
      </Flex>
      <Flex
        width="100%"
        padding="0.5rem"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        color="#4A5568"
        background="#F7FAFC"
        borderRadius="0.5rem"
        cursor="pointer"
        onClick={() => {
          doLogout();
        }}
      >
        <MdLogout />
        Terminar Sessão
      </Flex>
    </Flex>
  );
};

export default Menu;
