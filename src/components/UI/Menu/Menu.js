import { memo, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import banner from "../../../assets/MenuBanner.png";
import UserItem from "./UserItem";
import LinkItem from "./LinkItem";
import { useLocation } from "react-router-dom";
import { FiSettings, FiPackage, FiLayers, FiTruck } from "react-icons/fi";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { ImDrawer2 } from "react-icons/im";
import { MdLogout } from "react-icons/md";
import { useLogout } from "../../../hooks/auth/useLogout";
import { Button, Image, VStack } from "../../Design";

const Menu = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  const doLogout = useLogout();

  const activePath = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <>
      {isAuthenticated && (
        <VStack
          width="14rem"
          height="calc(100% - 2rem)"
          padding="1rem"
          background="white"
          justify="space-between"
          gap="4"
        >
          <VStack width="full" gap="4" overflowY="auto">
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
              isActive={activePath("/dashboard")}
              to="/dashboard"
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
              disabled
            />
            <LinkItem
              text={"Encomendas"}
              LeftIcon={<FiPackage />}
              to="orders"
              isActive={activePath("/orders")}
              disabled
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
          <Button
            variant="light"
            width="full"
            padding="0.5rem 0"
            color="#4A5568"
            background="#F7FAFC"
            borderRadius="0.5rem"
            icon={<MdLogout />}
            onClick={() => {
              doLogout();
            }}
          >
            Terminar Sessão
          </Button>
        </VStack>
      )}
    </>
  );
};

export default memo(Menu);
