import { UseFormReturn } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setOpenModal } from "../../Modal/modalSlice";
import { createNewTournamentAsync } from "../state/tournamentAsyncReducers";
import { TournamentBase } from "../state/types";

export const useCreateTournament = (methods: UseFormReturn<TournamentBase>) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = methods.handleSubmit(async (data) => {
    dispatch(createNewTournamentAsync(data))
      .unwrap()
      .then(() => {
        dispatch(setOpenModal(false));
        toast.success("Tournament was created");
      })
      .catch((err) => {
        toast.error(err);
      });
  });

  return { handleSubmit };
};
