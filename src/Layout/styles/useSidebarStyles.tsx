import { makeStyles, Theme } from "@material-ui/core";
export const useSidebarStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: theme.palette.primary.light,
    padding: theme.spacing(1, 0),
  },
  navItem: {
    fontSize: theme.spacing(1.125),
    color: theme.palette.common.white,
  },
  bracketAvatarCircle: {
    position: "relative",
    width: theme.spacing(2),
    height: theme.spacing(2),
    fontSize: theme.spacing(1),
    fontWeight: "bold",
  },
  avatarAreaDefault: {
    backgroundColor: "rgba(0,0,0,0)",
    borderLeft: `${theme.spacing(0)} solid rgba(0,0,0,0)`,
    transition: "all .4s",
  },
  avatarAreaActive: {
    backgroundColor: theme.palette.secondary.dark,
    borderLeft: `${theme.spacing(0.25)} solid ${theme.palette.common.white}`,
  },
  avatarCircleDefault: {
    backgroundColor: theme.palette.primary.dark,
  },
  avatarCircleActive: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.dark,
  },
}));
