import { makeStyles, Theme } from "@material-ui/core";

export const useTBPasswordFieldStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: theme.spacing(1.25),
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(1.5, 2.5, 0.5, 0.75),
    "&:focus-within": {
      "& $passwordStrenght": {
        borderColor: theme.palette.primary.main,
      },
    },
    "&:hover": {
      "& $passwordStrenght, & .MuiInput-input": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& label + .MuiInput-formControl": {
      marginTop: 0,
    },
    "& input": {
      padding: theme.spacing(1.5, 2.5, 0.5, 0.75),
    },
    "& .MuiInput-input": {
      flex: "1 1 100%",
      padding: theme.spacing(1.5, 2.5, 0.5, 0.75),
      width: "auto",
      fontSize: theme.spacing(1),
      fontWeight: 500,
      borderRadius: 1,
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${theme.palette.grey[300]}`,
      borderRight: `1px solid ${theme.palette.grey[300]}`,
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      color: theme.palette.common.white,

      "&:focus, &:hover": {
        borderColor: theme.palette.primary.main,
      },
      "&:focus, &:active": {
        borderRadius: 1,
      },
      "&input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      "&[type=number]": {
        "-moz-appearance": "textfield",
      },
    },
    "& .MuiInput-root": {
      position: "relative",
      flex: "1 1 100%",
      "&::after, &::before": {
        display: "none",
      },
      "&.Mui-error": {
        "& .MuiInput-input": {
          borderColor: theme.palette.error.main,
        },
      },
    },
    "& .MuiInputLabel-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxHeight: theme.spacing(1),
      height: theme.spacing(1),
    },
    "& .MuiFormHelperText-root": {
      position: "absolute",
      margin: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      paddingLeft: theme.spacing(0.25),
      color: theme.palette.error.main,
    },
  },
  previewPassword: {
    position: "absolute",
    width: `${theme.spacing(1.5)} !important`,
    height: theme.spacing(1.5),
    top: theme.spacing(0.25),
    right: theme.spacing(0.25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  passwordStrenght: {
    position: "relative",
    flex: "1 1 100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "help",
    border: `1px solid ${theme.palette.grey[300]}`,
    maxWidth: theme.spacing(3.5),
    transition: theme.transitions.create(["border-color"]),
  },
  passwordMeter: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },
  passwordLockIcon: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    zIndex: 10,
  },
  tooltip: {
    pointerEvents: "all",
    order: 3,
  },
  tooltipHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0.75, 0.5),
    marginBottom: theme.spacing(0.5),
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  tooltipBody: {
    padding: theme.spacing(0, 0, 0.75, 0),
  },
}));
