import { UseFormReturn } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerNewCompetitorsAsync } from "../tournamentAsyncReducers";
import { useAppSelector } from "../../../hooks";
import { selectTournament } from "../tournamentSelectors";

export const useAddNewCompetitor = (
  methods: UseFormReturn<{ invitationLink: string }>
) => {
  const dispatch = useDispatch<AppDispatch>();
  const tournament = useAppSelector(selectTournament);

  const handleJoin = methods.handleSubmit(async (data) => {
    const target = Math.log(tournament.size) / Math.log(2);
    let count = Math.ceil(target);

    dispatch(
      registerNewCompetitorsAsync({
        maxNumberRound: count,
        tournamentId: +tournament.id,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("You've successfully join the tournament");
      })
      .catch((err) => {
        toast.error(err);
      });
  });

  return { handleJoin };
};
