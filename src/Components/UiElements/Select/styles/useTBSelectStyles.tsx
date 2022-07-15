import { makeStyles, Theme } from "@material-ui/core";

export const useTBSelectStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: theme.spacing(0.5, 0.75),
    },
    "& .MuiInput-colorSecondary": {
      color: theme.palette.common.white,
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
    "& .MuiOutlinedInput-colorSecondary": {
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.secondary.main}`,
      "& svg": {
        color: theme.palette.secondary.main,
      },
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
    padding: theme.spacing(0, 0.375),
    "&.secondary": {
      backgroundColor: theme.palette.secondary.main,
    },
    "& img": {
      height: theme.spacing(1.375),
      width: theme.spacing(1.375),
      objectFit: "contain",
    },
  },
  description: {
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(0.25),
    fontWeight: 600,
  },
}));
