import { makeStyles, Theme } from "@material-ui/core";

export const useCreateTournamentBaseModalStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      width: theme.spacing(20),
      backgroundColor: theme.palette.secondary.dark,
      padding: theme.spacing(0.5, 1),
      display: "flex",
      flexDirection: "column",
    },
    body: {
      backgroundColor: theme.palette.secondary.dark,
      margin: theme.spacing(1.5, 0),
    },
    row: {
      marginBottom: theme.spacing(0.75),
      "&>div": {
        width: "100%",
      },
      "&>div>div": {
        width: "100%",
      },
      "& label": {
        color: theme.palette.common.white,
      },
      "& svg": {
        fontSize: theme.spacing(1.375),
        color: theme.palette.info.light,
      },
    },
    footer: {
      "& hr": {
        backgroundColor: theme.palette.secondary.light,
        marginBottom: theme.spacing(1),
      },
      "& button": {
        width: "100%",
      },
    },
  })
);
