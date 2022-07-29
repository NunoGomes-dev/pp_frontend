import { useContext } from "react";
import { NotificationsContext } from "../../../context/NotificationsContext";
import Toast from "./Toast";
import { memo } from "react";

const ToastContainer = () => {
  const { toastList, deleteToast } = useContext(NotificationsContext);

  return (
    <div className="w-auto h-auto bottom-0 right-0 fixed animation-[toast_0.7s] transition-all duration-1000 ease-in-out">
      {toastList.map((toast, i) => (
        <Toast key={i} {...toast} deleteToast={deleteToast} />
      ))}
    </div>
  );
};

export default memo(ToastContainer);
