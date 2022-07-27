import { Theme, makeStyles } from "@material-ui/core";

export const useTournamentListItemStyles = makeStyles((theme: Theme) => ({
  listItemRoot: {
    padding: theme.spacing(0.5),
    backgroundColor: "#423B9A",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(0.675),
  },
  commonColumn: {
    flex: "1 1 60px",
  },
  dateTitleTxt: {
    fontSize: theme.spacing(1.125),
    color: theme.palette.common.white,
  },
  dateValueTxt: {
    color: theme.palette.common.white,
    fontSize: theme.spacing(0.75),
  },
  titleColumn: {
    flex: "1 1 200px",
  },
  itemTitleTxt: {
    color: theme.palette.common.white,
    fontSize: theme.spacing(1.125),
  },
  tournamentFormatColumn: {
    flex: "1 1 100px",
  },
  commonTxt: {
    fontSize: theme.spacing(1.125),
    color: "#A6A2A2",
  },
  prizeTxt: {
    fontSize: theme.spacing(1.125),
    color: theme.palette.warning.light,
  },
  participantsColumn: {
    textAlign: "center",
    "& p": {
      fontSize: theme.spacing(0.875),
    },
  },
  gameIconWrapper: {
    flex: "1 1 24px",
    height: theme.spacing(1.5),
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
}));
