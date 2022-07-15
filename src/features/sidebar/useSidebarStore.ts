import { useAppDispatch } from "../../hooks";
import { setActive } from "./sidebarSlice";

export const useSidebarStore = () => {
  const dispatch = useAppDispatch();

  const handleSetActive = (field: string, value: string | number) => {
    dispatch(setActive({ field, value }));
  };

  return { handleSetActive } as {
    handleSetActive: (field: string, value: string | number) => void;
  };
};
