import { makeStyles, Theme } from "@material-ui/core";

export const useHomeContainerClasses = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& div ": {
      marginRight: theme.spacing(3),
    },
    "&:hover ": {
      cursor: "pointer",
    },
  },
}));
