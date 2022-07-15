import { makeStyles, Theme } from "@material-ui/core";

export const useSettingsChampConfigStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2, 12),
  },

  blockTitle: {
    color: theme.palette.common.white,
    fontSize: theme.spacing(1.5),
    marginBottom: theme.spacing(0.5),
  },
  fieldRowSubtitle: {
    fontSize: theme.spacing(0.75),
    fontWeight: 300,
    color: theme.palette.common.white,
  },
  block: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
    "&>div": {
      width: "60%",
      "&>div": {
        width: "100%",
      },
    },
  },
  titleWrapper: {
    marginBottom: theme.spacing(2),
  },
  roundRow: {
    marginBottom: theme.spacing(0.75),
  },
}));
