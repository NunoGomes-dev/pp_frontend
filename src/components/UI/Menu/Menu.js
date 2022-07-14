import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import banner from "../../../assets/MenuBanner.png";
import UserItem from "./UserItem";
import LinkItem from "./LinkItem";
import { useLocation } from "react-router-dom";
import { FiSettings, FiPackage, FiLayers, FiTruck } from "react-icons/fi";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { ImDrawer2 } from "react-icons/im";
import { MdLogout } from "react-icons/md";
import { useLogout } from "../../../hooks/Login/useLogout";
import { HStack, Image, VStack } from "../../Design";

const Menu = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const doLogout = useLogout();

  const activePath = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <VStack
      width="14rem"
      height="calc(100% - 2rem)"
      padding="1rem"
      background="white"
      justify="space-between"
    >
      <VStack width="full" gap="4">
        <Image
          src={banner}
          alt="banner_pp"
          width="100%"
          height="auto"
          objectFit="contain"
          pointerEvents="none"
          userSelect="none"
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
      </VStack>
      <HStack
        width="full"
        padding="0.5rem 0"
        justify="center"
        align="center"
        color="#4A5568"
        background="#F7FAFC"
        boxShadow="md"
        cursor="pointer"
        borderRadius="0.5rem"
        onClick={() => {
          doLogout();
        }}
      >
        <MdLogout />
        Terminar Sessão
      </HStack>
    </VStack>
  );
};

export default Menu;
