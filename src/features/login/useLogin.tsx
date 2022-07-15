import { UseFormReturn } from "react-hook-form";
import { useSelector } from "react-redux";
import { LoginUser } from "../User/types";
import { loginAsync, selectLoginInfo } from "./loginSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setOpenModal } from "../Modal/modalSlice";
import { useAppDispatch } from "../../hooks";

export const useLogin = (methods: UseFormReturn<LoginUser>) => {
  const dispatch = useAppDispatch();
  const { status } = useSelector(selectLoginInfo);

  const handleSubmit = methods.handleSubmit(async (data) => {
    dispatch(loginAsync(data))
      .unwrap()
      .then(() => {
        dispatch(setOpenModal(false));
        toast.success("You've successfuly login");
      })
      .catch((err) => {
        toast.error(err);
      });
  });

  return { status, handleSubmit };
};
