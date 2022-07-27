import { UseFormReturn } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectTournament } from "../state/tournamentSelectors";
import {
  updateRoundMatchesAsync,
  updateTournamentAsync,
} from "../state/tournamentAsyncReducers";
import { SettingChampFields } from "../components/tournamentInfoPage/settingsTab/SettingsChampConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useUpdateTournament = ({
  getValues,
}: UseFormReturn<SettingChampFields>) => {
  const dispatch = useAppDispatch();
  const tournament = useAppSelector((state) => selectTournament(state));

  const handleChangeField = (field: string) => {
    const value = getValues()[field];
    if (field === "size" && +value === tournament.size) {
      return;
    }

    dispatch(
      updateTournamentAsync({ tournamentId: +tournament.id, field, value })
    )
      .unwrap()
      .catch((err) => {
        toast.error(err);
      });
  };

  const handleChangeRoundMatches = (round: number, field: string) => {
    const value = getValues()[field];
    dispatch(
      updateRoundMatchesAsync({
        tournamentId: +tournament.id,
        round,
        field: "startAt",
        value,
      })
    )
      .unwrap()
      .catch((err) => {
        toast.error(err);
      });
  };

  return { handleChangeField, handleChangeRoundMatches };
};
