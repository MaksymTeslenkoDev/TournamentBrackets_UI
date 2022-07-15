import { makeStyles, Theme } from "@material-ui/core";
export const useLayoutStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "stretch",
    minHeight: () => `calc(100vh - ${theme.spacing(3.175)})`,
  },
  childrenWrapper: {
    flex: 1,
  },
}));
