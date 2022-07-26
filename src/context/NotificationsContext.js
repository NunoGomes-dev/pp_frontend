import { createContext, useCallback, useEffect, useState } from "react";

const NotificationsContext = createContext();

const NotificationsProvider = ({ children }) => {
  const [toastList, setToastList] = useState([]);

  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastList.filter((e) => e.id !== id);
      setToastList(toastListItem);
    },
    [toastList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) deleteToast(toastList[0].id);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastList]);

  return (
    <NotificationsContext.Provider
      value={{
        toastList,
        setToastList,
        deleteToast,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export { NotificationsContext, NotificationsProvider };
