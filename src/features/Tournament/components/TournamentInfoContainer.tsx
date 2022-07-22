import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../hooks";
import { selectUser } from "../../User/userSlice";
import { getTournamentByIdAsync } from "../tournamentAsyncReducers";
import { TournamentInfoContent } from "./TournamentInfoContent";
import { WithSidebarHOC } from "./WithSidebarHOC";

interface TournamentInfoContainerProps {
  tournamentId: string;
  game: string;
}

const TournamentInfoContainerInner: React.FC<TournamentInfoContainerProps> = ({
  tournamentId,
}) => {
  const dispatch = useAppDispatch();
  const userState = useSelector(selectUser);
  React.useEffect(() => {
    dispatch(
      getTournamentByIdAsync({
        tournamentId: +tournamentId,
        userEmail: userState.user?.email,
      })
    );
  }, [tournamentId]);

  return <TournamentInfoContent />;
};

export default WithSidebarHOC(TournamentInfoContainerInner);
