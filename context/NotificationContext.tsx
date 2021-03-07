import { createContext, useState, ReactNode, Context } from "react";

interface Props {
  children: ReactNode;
}

const notificationContext: Context<string> = createContext<string>("");
const notificationDispatchContext: Context<DispatchFn<string> | null> = createContext<DispatchFn<string> | null>(
  null
);

const NotificationContextProvider: React.FC<Props> = ({
  children,
}: Props): JSX.Element => {
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  return (
    <notificationContext.Provider value={notificationMessage}>
      <notificationDispatchContext.Provider value={setNotificationMessage}>
        {children}
      </notificationDispatchContext.Provider>
    </notificationContext.Provider>
  );
};
