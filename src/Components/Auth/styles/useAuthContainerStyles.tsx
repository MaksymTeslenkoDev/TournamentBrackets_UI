import { makeStyles, Theme } from "@material-ui/core";

export const useAuthFormStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2, 1),
    background: theme.palette.common.white,
    position: "relative",
    width: theme.spacing(20),
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
