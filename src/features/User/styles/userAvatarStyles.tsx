import { makeStyles, Theme } from "@material-ui/core";

export const userAvatarStyles = makeStyles((theme: Theme) => ({
  userNameTitle: {
    fontSize: theme.spacing(1.25),
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  menuWrapper: {
    padding: theme.spacing(0, 0.25),
  },
}));
