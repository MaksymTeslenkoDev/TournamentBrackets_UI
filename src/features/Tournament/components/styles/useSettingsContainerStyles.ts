import { alpha, makeStyles, Theme } from "@material-ui/core";

export const useSettingsContainerStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "stretch",
    height: "100%",
  },
  leftSide: {
    height: "100%",
    backgroundColor: alpha(theme.palette.primary.dark, 0.2),
  },
  rightSide: {
    flexGrow: 15,
    overflowY: "auto",
  },
}));
