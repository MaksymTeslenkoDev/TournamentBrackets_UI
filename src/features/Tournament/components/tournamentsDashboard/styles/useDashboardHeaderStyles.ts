import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const useDashboardHeaderStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
    color: theme.palette.common.white,
    justifyContent: "space-between",
    marginBottom: theme.spacing(0.5),
  },
  left: {
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: theme.palette.common.white,
    fontSize: theme.spacing(1.25),
  },
  countValue: {
    color: theme.palette.warning.light,
  },
  tournamentsSearchTextField: {
    border: `1px solid ${theme.palette.primary.light}`,
    color: theme.palette.common.white,
  },
  right: {
    display: "flex",
    flex: "1 1 auto",
    width: "40%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  orderFieldWrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(1),
    "& p": {
      marginRight: theme.spacing(0.5),
    },
  },
  orderField: {},
  orderControllers: {
    display: "flex",
  },
}));
