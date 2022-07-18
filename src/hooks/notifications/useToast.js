import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";

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
        };
        break;

      default:
        toastProps = null;
        break;
    }
    if (toastProps) setToastList([...toastList, toastProps]);
  };
}
