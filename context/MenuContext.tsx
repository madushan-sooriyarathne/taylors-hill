import { Context, createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const MenuOpenContext: Context<boolean> = createContext<boolean>(false);
const MenuOpenDispatchContext: Context<DispatchFn<boolean> | null> = createContext<DispatchFn<boolean> | null>(
  null
);

const MenuContextProvider = ({ children }: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <MenuOpenContext.Provider value={menuOpen}>
      <MenuOpenDispatchContext.Provider value={setMenuOpen}>
        {children}
      </MenuOpenDispatchContext.Provider>
    </MenuOpenContext.Provider>
  );
};

export default MenuContextProvider;
export { MenuOpenContext, MenuOpenDispatchContext };
