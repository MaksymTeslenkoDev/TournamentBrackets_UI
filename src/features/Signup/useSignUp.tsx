import { UseFormReturn } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { User } from "../User/types";
import { selectSignUp, signUp } from "./signUpSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setOpenModal } from "../Modal/modalSlice";
export const useSignUp = (methods: UseFormReturn<User>) => {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useSelector(selectSignUp);
  const handleSubmit = methods.handleSubmit(async (data) => {
    dispatch(signUp(data))
      .unwrap()
      .then(() => {
        dispatch(setOpenModal(false));
        toast.success("You've successfuly singed up");
      })
      .catch((err) => {
        toast.error(err);
      });
  });

  return { status, handleSubmit };
};
