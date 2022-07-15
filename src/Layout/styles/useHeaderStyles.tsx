import { makeStyles, Theme } from "@material-ui/core";
export const useHeaderStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(0.75),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 4px 8px 1px rgba(34, 60, 80, 0.42)",
  },
  appTitle: {
    fontSize: theme.spacing(1.125),
    color: theme.palette.common.white,
  },
}));
