import { makeStyles, Theme } from "@material-ui/core";

export const useBracketContainerStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(0, 3),
  },
}));
