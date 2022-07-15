import { alpha, makeStyles, Theme } from "@material-ui/core";

export const useBracketSettingsSidebarStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: theme.palette.secondary.dark,
    padding: theme.spacing(0.75, 0.25),
    flex: 1,
  },
  accordionSummaryTitleRow: {
    display: "flex",
    alignItems: "center",

    "& svg": {
      marginRight: theme.spacing(1.75),
      color: theme.palette.common.white,
    },
    "& img": {
      width: theme.spacing(1.75),
      height: theme.spacing(1.75),
      marginRight: theme.spacing(1.5),
    },
    "& span": {
      textTransform: "uppercase",
      fontSize: theme.spacing(1.125),
    },
  },
  detailsContentWrapper: {
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.light,
  },
  accordionMenuItem: {
    background: theme.palette.common.white,
    color: theme.palette.common.black,
    textTransform: "uppercase",
    display: "flex",
    padding: theme.spacing(0.25),
    borderRadius: theme.spacing(0.25),
    marginBottom: theme.spacing(0.5),
    alignItems: "center",
    justifyContent: "space-between",
    "& div": {
      display: "flex",
      alignItems: "flex-end",
    },
    "& span": {
      fontSize: theme.spacing(0.875),
      fontWeight: "bolder",
      lineHeight: theme.spacing(0.75),
    },
    "& img": {
      windth: theme.spacing(1),
      height: theme.spacing(1),
      marginRight: theme.spacing(0.5),
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  tournamentsSelectRoot: {
    position: "relative",
  },
  iconsBlock: {
    display: "flex",
    "& svg": {
      color: theme.palette.common.white,
      fontSize: theme.spacing(1),
    },
    "& button": {
      padding: theme.spacing(0.25, 0.5),
    },
  },
  selectHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  tournamentRow: {
    color: theme.palette.common.white,
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0.25),
    textTransform: "capitalize",
    "& svg:first-child": {
      marginRight: theme.spacing(0.25),
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.3),
    },
    "&.active": {
      padding: theme.spacing(0.5, 0.5, 0.5, 0.25),
      borderLeft: `${theme.spacing(0.25)} solid ${theme.palette.primary.light}`,
      backgroundColor: alpha(theme.palette.secondary.main, 0.3),
      "& svg:first-child": {
        marginRight: theme.spacing(0.5),
      },
    },
    "& span": {
      lineHeight: theme.spacing(0.5),
      marginLeft: theme.spacing(0.375),
      fontSize: theme.spacing(1.25),
      fontWeight: 200,
    },
  },
}));
