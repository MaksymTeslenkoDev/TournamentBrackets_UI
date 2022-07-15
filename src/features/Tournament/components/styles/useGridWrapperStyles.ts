import { alpha, makeStyles, Theme } from "@material-ui/core";

export const useGridWrapperStyles = makeStyles((theme: Theme) => ({
  root: {},
  tournamentGridWrapper: {
    display: "flex",
    alignItems: "center",
    minHeight: theme.spacing(35),
  },
  tournamentGridRound: {
    display: "flex",
    alignItems: "stretch",
    flex: `0 0 ${theme.spacing(11)}`,
    flexDirection: "column",
    alignSelf: "stretch",
    "&.final": {
      "&>div::before, ::after ": {
        display: "none",
      },
    },
  },
  tournamentHeaderWrapper: {
    display: "flex",
    color: theme.palette.common.white,
    margin: theme.spacing(1, 0, 1.5, 0),
    "& p": {
      fontSize: theme.spacing(1.25),
    },
  },
  tournamentGridSet: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flex: "1 0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      width: theme.spacing(0.75),
      right: theme.spacing(0.75),
      height: "50%",
      borderStyle: "solid",
      borderColor: theme.palette.secondary.main,
      borderWidth: "1px 1px 1px 0",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      height: "1px",
      right: 0,
      width: theme.spacing(0.75),
      borderStyle: "solid",
      borderColor: theme.palette.secondary.main,
      borderWidth: "1px 0px 0px 0",
    },
  },
  tournamentGridMatch: {
    display: "flex",
    flexGrow: 0,
  },
  tournamentGridTeams: {
    flex: "0 0 auto",
    width: theme.spacing(9.5),
    position: "relative",
    paddingTop: theme.spacing(1),
  },
  teamsMatchWrapper: {
    position: "relative",
    zIndex: 1,
    borderRadius: theme.spacing(0.25),
    border: `${theme.spacing(0.05)} solid ${theme.palette.common.white}`,
    marginBottom: theme.spacing(1),
  },
  teamsMatchItem: {
    color: theme.palette.common.white,
    display: "flex",
    "&:nth-child(1)": {
      borderStyle: "solid",
      borderColor: theme.palette.secondary.main,
      borderWidth: "0 0 1px 0",
    },
    "&:nth-child(2)": {
      borderStyle: "solid",
      borderColor: theme.palette.secondary.main,
      borderWidth: "1px 0 0 0",
    },
  },
  teamsMatchTitle: {
    flex: `6 1 ${theme.spacing(3.25)}`,
    padding: theme.spacing(0.25, 0.5),
    "& p": {
      lineHeight: theme.spacing(1.125),
    },
  },
  teamsMatchScore: {
    borderLeft: `${theme.spacing(0.05)} solid ${theme.palette.common.white}`,
    flex: `0 1 ${theme.spacing(4)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiOutlinedInput-root": {
      border: "none",
      width: "100%",
      "&.Mui-focused": {
        border: "none",
        outline: "none",
      },
    },
  },
  matchDateString: {
    position: "absolute",
    top: -6,
    left: 0,
    right: 0,
    color: alpha(theme.palette.common.white, 0.5),
    fontSize: theme.spacing(0.75),
  },
  scoreLabel: {
    lineHeight: theme.spacing(0.5),
  },
}));
