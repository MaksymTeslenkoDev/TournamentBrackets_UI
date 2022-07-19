import React from "react";
import { useDecodeInviteToken } from "../hooks/useDecodeInviteToken";
import {
  TournamentInfoPage,
  TournamentInfoPageProps,
} from "../TournamentInfoPage";
interface InvitedTournamentHOCProps {
  token: string;
}

function InvitedTournamentPageHOC<P>(
  Component: React.ComponentType<P & TournamentInfoPageProps>
) {
  function WithInviteToken(props: P & InvitedTournamentHOCProps) {
    const { decode } = useDecodeInviteToken(props.token);
    const [state, setState] = React.useState<{
      tournamentId: number;
      game: string;
    } | null>(null);

    React.useEffect(() => {
      (async () => {
        const res = await decode();
        if (res) {
          setState({
            tournamentId: res.data.id || 0,
            game: res.data.game || "",
          });
        }
      })();
    }, []);

    if (state) {
      return (
        <Component
          {...(props as P)}
          tournamentId={"" + state.tournamentId}
          game={state.game}
        />
      );
    }
    return null;
  }

  return WithInviteToken;
}

export default InvitedTournamentPageHOC(TournamentInfoPage);
