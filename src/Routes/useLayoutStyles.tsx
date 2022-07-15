import { makeStyles, Theme } from "@material-ui/core";

export const useLayoutStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },
}));
