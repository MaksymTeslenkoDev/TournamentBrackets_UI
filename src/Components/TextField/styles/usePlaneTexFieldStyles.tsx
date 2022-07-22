import { makeStyles, Theme } from "@material-ui/core";

export const useTBTextFieldStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: theme.spacing(0.5, 0.75),
    },
    "& .MuiInputBase-root": {},
    "& .MuiInput-underline": {
      paddingLeft: theme.spacing(0.5),
      "& input": {
        paddingBottom: theme.spacing(0.25),
      },
    },
    "& .MuiInput-colorSecondary": {
      color: theme.palette.common.white,
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
    "& .MuiOutlinedInput-colorSecondary": {
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.secondary.main}`,
      // "&.Mui-focused.Mui-error": {
      //   border: `1px solid ${theme.palette.error.main}`,
      // },
      // "&.Mui-error": {
      //   border: `1px solid ${theme.palette.error.main}`,
      // },
    },
    "& .MuiInputLabel-root": {
      position: "static",
      transform: "none",
    },
    "& .MuiFormHelperText-root": {
      color: theme.palette.error.main,
    },
    "& .MuiFormLabel-colorSecondary.Mui-focused": {
      color: theme.palette.common.white,
    },
  },
  fieldWrapper: {
    display: "flex",
    marginTop: ({ hasLabel }: { hasLabel: boolean }) =>
      hasLabel ? theme.spacing(0.5) : theme.spacing(0),
    "& .MuiInputBase-root": {
      width: "100%",
    },
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 0.5),
    "&.secondary": {
      backgroundColor: theme.palette.secondary.main,
    },
    "&.primary": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
    "& img": {
      height: theme.spacing(1.375),
      width: theme.spacing(1.375),
      objectFit: "contain",
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
}));
