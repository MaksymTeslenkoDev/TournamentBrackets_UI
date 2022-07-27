import { Box, Typography } from "@material-ui/core";
import React from "react";
import { TBTextField } from "../../../../../Components/TextField/PlaneFormInput";
import { Competitor, Rounds } from "../../../state/types";
import { useGridWrapperStyles } from "./styles/useGridWrapperStyles";

interface GridWrapperProps {
  matches: Rounds;
  roundDates: Array<{ round: number; startAt: string }>;
  isEditable: boolean;
  handleChangeScore: (item: Competitor, value: number) => void;
}

export const GridWrapper: React.FC<GridWrapperProps> = ({
  matches,
  roundDates,
  isEditable,
  handleChangeScore,
}) => {
  const classes = useGridWrapperStyles();

  const renderScoreField = (i: Competitor) => {
    if (isEditable) {
      return (
        <TBTextField
          color="secondary"
          label=""
          inputProps={{
            type: "number",
            defaultValue: i.matchCompetitors.score,
          }}
          //@ts-ignore
          onBlur={(e) => handleChangeScore(i, e.target.value)}
        />
      );
    }
    return (
      <Typography component="span" className={classes.scoreLabel}>
        {i.matchCompetitors.score}
      </Typography>
    );
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.tournamentHeaderWrapper}>
        {Object.keys(matches).map((roundKey, i) => {
          const isFinal = Object.keys(matches).length === i + 1;
          return (
            <Box
              key={`${roundKey}_${i}+`}
              className={classes.tournamentGridRound}
            >
              <Typography>{isFinal ? "Final" : `Round ${i + 1}`}</Typography>
            </Box>
          );
        })}
      </Box>
      <Box className={classes.tournamentGridWrapper}>
        {Object.keys(matches).map((roundKey, i) => {
          const isFinal = Object.keys(matches).length === i + 1;
          return (
            <Box
              key={`${roundKey}_${i}`}
              className={`${classes.tournamentGridRound}  ${
                isFinal ? "final" : ""
              }`}
            >
              {Object.keys(matches[roundKey]).map((setKey, i) => {
                return (
                  <Box
                    key={`${roundKey}_${setKey}_${i}`}
                    className={classes.tournamentGridSet}
                  >
                    {Object.keys(matches[roundKey][setKey]).map((pairKey) => {
                      return (
                        <Box
                          key={`${roundKey}_${setKey}_${pairKey}`}
                          className={classes.tournamentGridMatch}
                        >
                          <Box className={classes.tournamentGridTeams}>
                            <Typography className={classes.matchDateString}>
                              {
                                roundDates.find(
                                  (i) => roundKey === `round${i.round}`
                                )?.startAt
                              }
                            </Typography>
                            <Box className={classes.teamsMatchWrapper}>
                              {matches[roundKey][setKey][pairKey].map(
                                (i, index) => {
                                  return (
                                    <Box
                                      key={`${roundKey}_${setKey}_${pairKey}_${index}`}
                                      className={classes.teamsMatchItem}
                                    >
                                      <Box className={classes.teamsMatchTitle}>
                                        <Typography component="p">
                                          {i.competitors[0]
                                            ? i.competitors[0].user.name
                                            : `Team`}
                                        </Typography>
                                      </Box>
                                      <Box className={classes.teamsMatchScore}>
                                        {i.competitors[0]
                                          ? renderScoreField(i.competitors[0])
                                          : null}
                                      </Box>
                                    </Box>
                                  );
                                }
                              )}
                            </Box>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
