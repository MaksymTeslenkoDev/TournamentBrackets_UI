import { makeStyles, Theme } from "@material-ui/core";

export const useTabTitleComponentStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.common.white,
    "& p": {
      fontSize: theme.spacing(2),
      fontWeight: 500,
    },
    "& .MuiDivider-root": {
      backgroundColor: "#8080A1",
    },
  },
}));
