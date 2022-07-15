import { Button, withStyles, darken, alpha } from "@material-ui/core";

export const SimpleButton = withStyles((theme) => ({
  root: {
    textTransform: "uppercase",
  },
  contained: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
    transition: theme.transitions.create(["background-color"]),
    "&:hover": {
      backgroundColor: `${darken(theme.palette.warning.main, 0.2)}`,
    },
    "&:active": {
      backgroundColor: `${darken(theme.palette.warning.main, 0.2)}`,
    },
    "&:focus": {
      backgroundColor: `${darken(theme.palette.warning.main, 0.2)}`,
    },
  },
  outlined: {
    backgroundColor: alpha(theme.palette.warning.main, 0),
    color: theme.palette.warning.main,
    border: `1px solid ${theme.palette.warning.main}`,
    "&:hover": {
      border: `1px solid ${theme.palette.warning.main}`,
      backgroundColor: alpha(theme.palette.warning.main, 0.15),
    },
    "&:active": {
      border: `1px solid ${theme.palette.warning.main}`,
      backgroundColor: alpha(theme.palette.warning.main, 0.25),
    },
    "&:focus": {
      border: `1px solid ${theme.palette.warning.main}`,
      backgroundColor: alpha(theme.palette.warning.main, 0.25),
    },
  },
  containedSecondary: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.common.black,
    transition: theme.transitions.create(["background-color"]),
    "&:hover": {
      backgroundColor: `${darken(theme.palette.info.light, 0.2)}`,
    },
    "&:active": {
      backgroundColor: `${darken(theme.palette.info.light, 0.2)}`,
    },
    "&:focus": {
      backgroundColor: `${darken(theme.palette.info.light, 0.2)}`,
    },
  },
  outlinedSecondary: {
    backgroundColor: alpha(theme.palette.info.light, 0),
    color: theme.palette.info.light,
    border: `1px solid ${theme.palette.info.light}`,
    "&:hover": {
      border: `1px solid ${theme.palette.info.light}`,
      backgroundColor: alpha(theme.palette.info.light, 0.15),
    },
    "&:active": {
      border: `1px solid ${theme.palette.info.light}`,
      backgroundColor: alpha(theme.palette.info.light, 0.25),
    },
    "&:focus": {
      border: `1px solid ${theme.palette.info.light}`,
      backgroundColor: alpha(theme.palette.info.light, 0.25),
    },
  },
}))(Button);
