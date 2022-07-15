import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { logOut, selectUser } from "./userSlice";

export const useUserArea = () => {
  const { user, authStatus, status } = useSelector(selectUser);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    dispatch(logOut());
  };

  return { user, authStatus, status, handleLogOut };
};
