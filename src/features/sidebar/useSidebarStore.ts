import { useAppDispatch } from "../../hooks";
import { deleteTournamentAsync } from "../Tournament/state/tournamentAsyncReducers";
import { setActive } from "./sidebarSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useSidebarStore = () => {
  const dispatch = useAppDispatch();

  const handleSetActive = (field: string, value: string | number) => {
    dispatch(setActive({ field, value }));
  };
  const deleteTournament = (tournamentId: number) => {
    dispatch(deleteTournamentAsync({ tournamentId }))
      .unwrap()
      .then(() => {
        toast.success("Tournament was successfully deleted");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return { handleSetActive, deleteTournament };
};
