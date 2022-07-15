import { withStyles, TextField, alpha } from "@material-ui/core";

export const ModalTextField = withStyles((theme) => ({
  root: {
    borderRadius: 0,
    "& .MuiInputBase-root": {
      "& input": {
        padding: theme.spacing(0.25, 1),
      },
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      "&.Mui-focused": {
        borderWidth: "1px",
      },
    },
    "& .MuiOutlinedInput-colorSecondary": {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  outlined: {
    backgroundColor: alpha(theme.palette.secondary.main, 0),
    border: `1px solid ${theme.palette.secondary.light}`,
    color: theme.palette.secondary.main,
  },
}))(TextField);
