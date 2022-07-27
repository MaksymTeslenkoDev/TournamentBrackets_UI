import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setOpenModal } from "../../Modal/modalSlice";
import { getTournamentsListAsync } from "../state/tournamentAsyncReducers";
import { TournamentsList } from "../../home/components/FindTournamentModal";
import { useHistory } from "react-router-dom";
import { selectSidebar, setActive } from "../../sidebar/sidebarSlice";
import { setQueryField } from "../state/tournamentSlice";
import { useAppSelector } from "../../../hooks";
import { selectListQueryParams } from "../state/tournamentSelectors";
import React from "react";

export const useQueryTournamentsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();
  const queryParams = useAppSelector(selectListQueryParams);

  const sidebar = useAppSelector(selectSidebar);

  const queryTournaments = async () => {
    dispatch(
      getTournamentsListAsync({ ...queryParams, game: "" + sidebar.game })
    )
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
    dispatch(setQueryField({ field: "accessType", value: data.accessType }));
    history.push(`/tournaments/${data.game}`);
  };

  return { queryTournaments, handleSearchSubmit };
};
