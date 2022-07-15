import { Typography } from "@material-ui/core";
import React from "react";
import { useTournamentModalTitleStyles } from "./styles/useTournamentModalTitleStyles";

interface Props {
  first: string;
  second: string;
}
export const TournamentModalTitle: React.FC<Props> = ({ first, second }) => {
  const classes = useTournamentModalTitleStyles();
  return (
    <Typography className={classes.modalTitle} component="p">
      <Typography component="span">{first}</Typography>
      <Typography component="span">{second}</Typography>
    </Typography>
  );
};
