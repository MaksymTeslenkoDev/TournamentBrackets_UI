import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deletePlayerAsync,
  registerNewCompetitorsAsync,
} from "../tournamentAsyncReducers";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectPlayers, selectTournament } from "../tournamentSelectors";
import { selectUser } from "../../User/userSlice";
import {
  getUserTournamentsAsync,
  selectSidebar,
} from "../../sidebar/sidebarSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  tournamentPassword: yup.string().required("Field can't be empty"),
});

export const useAddNewCompetitor = () => {
  const dispatch = useAppDispatch();
  const tournament = useAppSelector(selectTournament);
  const user = useAppSelector(selectUser);
  const sidebar = useAppSelector(selectSidebar);
  const players = useAppSelector(() => selectPlayers(tournament));
  const methods = useForm<{ tournamentPassword: string }>({
    mode: "onChange",
    defaultValues: {
      tournamentPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const isUserPlayer =
    players.filter((item) => item.email === user.user?.email).length >= 1;

  const handleJoin = methods.handleSubmit(async (data) => {
    const target = Math.log(tournament.size) / Math.log(2);
    let count = Math.ceil(target);

    dispatch(
      registerNewCompetitorsAsync({
        maxNumberRound: count,
        tournamentPassword: data.tournamentPassword,
        tournamentId: +tournament.id,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("You've successfully join the tournament");
        dispatch(getUserTournamentsAsync(sidebar.game));
      })
      .catch((err) => {
        methods.setValue("tournamentPassword", "");
        if (err instanceof Error) toast.error(err.message);
        toast.error(err);
      });
  });

  const handleDeletePlayer = () => {
    const competitorId = tournament.matches
      .find((i) =>
        i.competitors.find((item) => item.user.email === user.user?.email)
      )
      ?.competitors.find((item) => item.user.email === user.user?.email)?.id;
    if (competitorId)
      dispatch(
        deletePlayerAsync({
          tournamentId: +tournament.id,
          userEmail: user.user?.email || "",
          competitorId: +competitorId,
        })
      )
        .unwrap()
        .then(() => {
          toast.success("You've successfully left the tournament");
          dispatch(getUserTournamentsAsync(sidebar.game));
        })
        .catch((err) => {
          if (err instanceof Error) toast.error(err.message);
        });
  };

  return { handleJoin, methods, isUserPlayer, handleDeletePlayer };
};
