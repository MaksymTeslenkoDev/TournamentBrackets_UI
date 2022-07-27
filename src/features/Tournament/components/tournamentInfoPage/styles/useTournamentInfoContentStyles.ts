import { makeStyles, Theme } from "@material-ui/core";

export const useTournamentInfoContentStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: theme.palette.common.white,
    fontSize: theme.spacing(2),
    fontWeight: 400,
    marginBottom: theme.spacing(0.25),
  },
  subTitle: {
    color: theme.palette.common.white,
    fontSize: theme.spacing(1),
    fontWeight: 400,
  },
  bottom: {
    flexGrow: 6,
  },
}));
