import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setOpenModal } from "../../Modal/modalSlice";
import { getTournamentsListAsync } from "../tournamentAsyncReducers";
import { TournamentsList } from "../../home/components/FindTournamentModal";
import { useHistory } from "react-router-dom";
import { setActive } from "../../sidebar/sidebarSlice";
import { setQueryField } from "../tournamentSlice";
import { useAppSelector } from "../../../hooks";
import { selectListQueryParams } from "../tournamentSelectors";
import React from "react";

export const useQueryTournamentsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();
  const queryParams = useAppSelector(selectListQueryParams);

  const queryTournaments = async () => {
    dispatch(getTournamentsListAsync(queryParams))
      .unwrap()
      .catch((err) => {
        toast.error(err);
      });
  };

  React.useEffect(() => {
    if (queryParams.game) {
      queryTournaments();
    }
  }, [queryParams]);

  const handleSearchSubmit = async (data: TournamentsList) => {
    dispatch(setOpenModal(false));
    dispatch(setActive({ field: "game", value: data.game }));
    dispatch(setQueryField({ field: "game", value: data.game }));
    dispatch(setQueryField({ field: "accessType", value: data.accessType }));
    history.push(`/tournaments/${data.game}`);
  };

  return { queryTournaments, handleSearchSubmit };
};