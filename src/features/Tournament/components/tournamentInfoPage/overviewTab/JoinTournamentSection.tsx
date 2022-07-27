import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@material-ui/core";
import { FormProvider } from "react-hook-form";
import { SimpleButton } from "../../../../../Components/UiElements/Buttons/TBButton";
import { useAppSelector } from "../../../../../hooks";
import { getTeamsCount } from "../../../../../Utility/getTeamsCount";
import { useAddNewCompetitor } from "../../../hooks/useAddNewCompetitor";
import {
  selectPlayers,
  selectTournament,
} from "../../../state/tournamentSelectors";
import { TournamentAccessType } from "../../../state/types";
import { useOverviewTemplateStyles } from "./styles/useOverviewTemplateStyles";
import { useTournamentSettingsTextField } from "../settingsTab/TournamentSettingsTextField/TournamentSettingTextField";

export const JoinTournamentSection = () => {
  const classes = useOverviewTemplateStyles();
  const { handleJoin, methods, isUserPlayer, handleDeletePlayer } =
    useAddNewCompetitor();
  const tournament = useAppSelector(selectTournament);
  const competitors = useAppSelector(() => selectPlayers(tournament));
  const { TBTournamentSettingsTextField } = useTournamentSettingsTextField();

  const renderLeftTournamentContainer = () => {
    return (
      <Box className={classes.sectionBlockContent}>
        <Typography className={classes.sectionBlockTitle}>
          You can left the tournament
        </Typography>
        <SimpleButton
          size="small"
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleDeletePlayer}
          className={classes.joinButton}
        >
          Join
        </SimpleButton>
      </Box>
    );
  };

  if (isUserPlayer) {
    return (
      <Box className={classes.section}>{renderLeftTournamentContainer()}</Box>
    );
  }

  return (
    <Box className={classes.section}>
      <Box className={classes.sectionBlockContent}>
        <Typography className={classes.sectionBlockTitle}>
          Join Tournament
        </Typography>
        <Box className={classes.playersCountRow}>
          <FontAwesomeIcon icon={faUsers} />
          <Typography component="span">{`${competitors.length}/${getTeamsCount(
            tournament.size
          )}`}</Typography>
          <Typography component="span">Players</Typography>
        </Box>
        <FormProvider {...methods}>
          <form onSubmit={handleJoin}>
            {tournament.accessType === TournamentAccessType.private && (
              <TBTournamentSettingsTextField
                name="tournamentPassword"
                size="small"
                label=""
                className="TournamentsettingsTextField"
                color="primary"
                inputProps={{
                  placeholder: "Enter password",
                }}
              />
            )}
            <Box>
              <SimpleButton
                size="small"
                variant="contained"
                color="primary"
                type="submit"
                className={classes.joinButton}
              >
                Join
              </SimpleButton>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};
