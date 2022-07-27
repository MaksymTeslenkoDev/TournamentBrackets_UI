import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Tournament } from "../../../state/types";
import { ButtonBase } from "@material-ui/core";
import { useOverviewTemplateStyles } from "./styles/useOverviewTemplateStyles";
import { JoinTournamentSection } from "./JoinTournamentSection";

interface OverviewTemplateProps {
  tournament: Tournament;
  roundsDates: Array<{ round: number; startAt: string }>;
}

export const OverviewTemplate: React.FC<OverviewTemplateProps> = ({
  tournament,
  roundsDates,
}: OverviewTemplateProps) => {
  const classes = useOverviewTemplateStyles();
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
      <JoinTournamentSection />
    </Box>
  );
};
