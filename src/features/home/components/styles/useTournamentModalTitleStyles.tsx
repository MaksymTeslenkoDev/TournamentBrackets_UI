import { makeStyles, Theme } from "@material-ui/core";

export const useTournamentModalTitleStyles = makeStyles((theme: Theme) => ({
  modalTitle: {
    color: theme.palette.common.white,
    textAlign: "center",
    "& span": {
      fontWeight: 500,
      fontSize: theme.spacing(2.175),
    },
    "& span:first-child": {
      color: theme.palette.info.light,
      marginRight: theme.spacing(0.25),
    },
  },
}));
