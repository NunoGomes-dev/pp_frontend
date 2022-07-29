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
        <VStack className="p-4 bg-white justify-between gap-4 h-full w-[14rem]">
          <VStack className="gap-4 overflow-y-auto w-full">
            <Image src={banner} alt="banner_pp" className={"w-full h-auto"} />
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
            className={
              "w-full py-2 px-0 text-[#4A5568] bg-[#F7FAFC] rounded-md"
            }
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
