import { makeStyles, Theme, alpha } from "@material-ui/core";

export const useModalStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: alpha(theme.palette.warning.main, 0),
    },
  },
}));
