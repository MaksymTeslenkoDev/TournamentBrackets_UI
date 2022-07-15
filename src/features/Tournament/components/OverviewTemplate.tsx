import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Tournament, TournamentAccessType } from "../types";
import { ButtonBase } from "@material-ui/core";
import { useTournamentSettingsTextField } from "./TournamentSettingsTextField/TournamentSettingTextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { SimpleButton } from "../../../Components/UiElements/Buttons/TBButton";
import { useOverviewTemplateStyles } from "./styles/useOverviewTemplateStyles";
import { getTeamsCount } from "../../../Utility/getTeamsCount";

interface OverviewTemplateProps
  extends UseFormReturn<{ invitationLink: string }> {
  tournament: Tournament;
  roundsDates: Array<{ round: number; startAt: string }>;
  showJoinSection: boolean;
  handleJoin: () => void;
  competitorsLength: number;
}

export const OverviewTemplate: React.FC<OverviewTemplateProps> = ({
  tournament,
  roundsDates,
  showJoinSection,
  handleJoin,
  competitorsLength,
  ...methods
}: OverviewTemplateProps) => {
  const classes = useOverviewTemplateStyles();
  const { TBTournamentSettingsTextField } = useTournamentSettingsTextField();
  return (
    <Box className={classes.root}>
      <Box className={classes.section}>
        <Box className={classes.sectionBlockContent}>
          <Typography className={classes.sectionBlockTitle}>
            {tournament.game}
          </Typography>
          <Box className={classes.row}>
            <Typography className={classes.pinkLabel}>
              Tournament Format
            </Typography>
            <Typography> {tournament.format} </Typography>
          </Box>
          <Box className={classes.row}>
            <Typography className={classes.pinkLabel}>Game Mode</Typography>
            <Typography> {tournament.game_format}</Typography>
          </Box>
          <ButtonBase disabled className={classes.seeRulesButton}>
            <Typography>See Rules</Typography>
          </ButtonBase>
        </Box>
        <Box className={classes.sectionBlockContent}>
          <Typography className={classes.sectionBlockTitle}>Prizes</Typography>
          <Box className={classes.row}>
            <Typography>Total Prize Pool</Typography>
            <Box className={classes.textFieldStyledBox}>
              <Typography>1000 $</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.section}>
        <Box className={classes.sectionBlockContent}>
          <Typography className={classes.sectionBlockTitle}>
            Schedule
          </Typography>
          <Box className={classes.row}>
            <Typography>Tournament Starts At:</Typography>
            <Typography>{tournament.startAt || "---"}</Typography>
          </Box>
          <Box className={classes.row}>
            <Typography>Tournament Finishes At:</Typography>
            <Typography>{tournament.finishAt || "---"}</Typography>
          </Box>
          {roundsDates.map((i, index) => {
            return (
              <Box className={classes.row} key={i.round}>
                <Typography>
                  {i.round === 1 ? "Final" : `Round ${++index}`}
                </Typography>
                <Typography>{i.startAt || "---"}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      {showJoinSection && (
        <Box className={classes.section}>
          <Box className={classes.sectionBlockContent}>
            <Typography className={classes.sectionBlockTitle}>
              Join Tournament
            </Typography>
            <Box className={classes.playersCountRow}>
              <FontAwesomeIcon icon={faUsers} />
              <Typography component="span">{`${competitorsLength}/${getTeamsCount(
                tournament.size
              )}`}</Typography>
              <Typography component="span">Players</Typography>
            </Box>
            <FormProvider {...methods}>
              <form onSubmit={handleJoin}>
                {tournament.accessType === TournamentAccessType.private && (
                  <TBTournamentSettingsTextField
                    name="size"
                    size="small"
                    label=""
                    className="TournamentsettingsTextField"
                    color="primary"
                    inputProps={{
                      placeholder: "Enter your invite link",
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
      )}
    </Box>
  );
};
