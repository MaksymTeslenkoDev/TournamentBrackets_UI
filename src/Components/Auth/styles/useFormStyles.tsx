import { makeStyles, Theme } from "@material-ui/core";

export const useFormStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(1.5),
  },
  fieldWrapper: {
    marginTop: theme.spacing(1),
    "& div": {
      width: "100%",
    },
  },
}));
