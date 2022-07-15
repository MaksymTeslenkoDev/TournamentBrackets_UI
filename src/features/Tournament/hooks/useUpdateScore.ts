import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateScoreAsync } from "../tournamentAsyncReducers";
import { Competitor } from "../types";

export const useUpdateScore = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdateScore = (data: {
    tournamentId: number;
    matchId: number;
    competitorId: number;
    scoreValue: number;
  }) => {
    dispatch(updateScoreAsync(data))
      .unwrap()
      .catch((err) => {
        toast.error(err);
      });
  };

  const handleChangeScore =
    (tournamentId: number) => (item: Competitor, value: number) => {
      handleUpdateScore({
        tournamentId,
        matchId: item.matchCompetitors.matchId,
        competitorId: item.matchCompetitors.competitorId,
        scoreValue: value,
      });
    };

  return { handleUpdateScore, handleChangeScore };
};
