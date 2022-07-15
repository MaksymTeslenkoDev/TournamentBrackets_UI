import { makeStyles, Theme } from "@material-ui/core";

export const useInfoBlockStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  tabsWrapper: {
    position: "relative",
    "& .MuiTab-root": {
      color: theme.palette.common.white,
      paddingBottom: theme.spacing(0.125),
      textTransform: "capitalize",
      fontFamily: "'Nunito','Roboto','Helvetica',sans-serif",
      fontSize: theme.spacing(1.25),
      "&.Mui-selected": {
        color: theme.palette.common.white,
      },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.warning.main,
      zIndex: 10,
    },
  },
  bottomRow: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: theme.spacing(0.125),
    backgroundColor: theme.palette.common.white,
  },
  bottom: {
    flexGrow: 1,
    backgroundColor: "#00002C",
    "& .MuiBox-root[role=tabpanel]": {
      height: "100%",
      "&>.MuiBox-root": {
        height: "100%",
      },
    },
  },
}));
