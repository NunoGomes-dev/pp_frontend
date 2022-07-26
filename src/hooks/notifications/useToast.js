import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";
import { RiErrorWarningFill, RiCheckboxCircleFill } from "react-icons/ri";
import { IoInformationCircle } from "react-icons/io5";

export default function useToast() {
  const { toastList, setToastList } = useContext(NotificationsContext);
  let toastProps = null;

  return (action) => {
    const { title, description, status } = action;

    switch (status) {
      case "success":
        toastProps = {
          id: toastList.length + 1,
          status: status,
          title: title,
          description: description,
          color: "white",
          background: "#38A169",
          icon: <RiCheckboxCircleFill style={{ fontSize: "24px" }} />,
        };
        break;

      case "error":
        toastProps = {
          id: toastList.length + 1,
          status: status,
          title: title,
          description: description,
          color: "white",
          background: "#E53E3E",
          icon: <RiErrorWarningFill style={{ fontSize: "24px" }} />,
        };
        break;

      case "warning":
        toastProps = {
          id: toastList.length + 1,
          status: status,
          title: title,
          description: description,
          color: "white",
          background: "#DD6B20",
          icon: <RiErrorWarningFill style={{ fontSize: "24px" }} />,
        };
        break;

      case "info":
        toastProps = {
          id: toastList.length + 1,
          status: status,
          title: title,
          description: description,
          color: "white",
          background: "#3182CE",
          icon: <IoInformationCircle style={{ fontSize: "24px" }} />,
        };
        break;

      default:
        toastProps = null;
        break;
    }
    if (toastProps) setToastList([...toastList, toastProps]);
  };
}
