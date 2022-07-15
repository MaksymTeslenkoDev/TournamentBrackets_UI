import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
export const useOverviewTemplateStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1.5, 0),
    display: "flex",
    alignItems: "stretch",
    height: "100%",
    boxSizing: "border-box",
  },
  section: {
    padding: theme.spacing(0, 1.5),
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    borderImage: `linear-gradient(
        to bottom,
        #fff,
        rgba(0, 0, 0, 0)
      ) 1 100%`,
    flex: `1 1 300px`,
    "&:last-child": {
      border: "none",
    },
  },
  sectionBlockTitle: {
    fontWeight: 600,
    fontSize: theme.spacing(1.5),
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
  },
  sectionBlockContent: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    color: theme.palette.common.white,
    "& p": {
      fontSize: theme.spacing(1.25),
    },
    marginBottom: theme.spacing(0.75),
  },
  pinkLabel: {
    color: theme.palette.warning.light,
    fontWeight: 400,
  },
  seeRulesButton: {
    "& p": {
      color: theme.palette.secondary.light,
      fontSize: theme.spacing(1),
      fontWeight: 600,
      textTransform: "capitalize",
      textDecoration: "underline",
    },
  },
  textFieldStyledBox: {
    backgroundColor: theme.palette.primary.dark,
    border: `${theme.spacing(0.075)}  solid #8080A1`,
    padding: theme.spacing(0.375, 1),
    color: theme.palette.common.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    "& p": {
      fontSize: theme.spacing(0.875),
      lineHeight: theme.spacing(0.75),
      fontWeight: 600,
    },
  },
  playersCountRow: {
    display: "flex",
    color: theme.palette.common.white,
    alignItems: "center",
    marginBottom: theme.spacing(1),
    "& svg": {
      color: theme.palette.warning.light,
    },
    "& span": {
      marginLeft: theme.spacing(0.375),
    },
  },
  joinButton: {
    marginTop: theme.spacing(0.75),
    padding: theme.spacing(0.25, 2.5),
  },
}));
