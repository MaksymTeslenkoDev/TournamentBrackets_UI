import { useTheme } from "../../../../../../hooks/useTheme";
import { FieldValues, UseControllerProps } from "react-hook-form";
import { InputProps, SelectProps } from "@material-ui/core";
import { TBFormTextField } from "../../../../../../Components/TextField";
import { TBTextFieldI } from "../../../../../../Components/TextField/PlaneFormInput";
import { styled } from "@mui/material/styles";
import {
  TBFormSelect,
  TBSelectProps,
} from "../../../../../../Components/UiElements/Select/TBSelect";
import { TBTextField } from "../../../../../../Components/TextField/PlaneFormInput";
import TBFormPasswordField from "../../../../../../Components/TextField/TBPasswordField";

export const useTournamentSettingsTextField = () => {
  const [theme] = useTheme();
  const TBTournamentSettingsTextField = styled(
    (props: UseControllerProps & TBTextFieldI & InputProps) => (
      <TBFormTextField {...props} />
    )
  )(() => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    width: "100%",
    fontWeight: 300,
    "& input::-webkit-calendar-picker-indicator": {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      cursor: "pointer",
      content: '" "',
      opacity: 0,
    },
    "&.size-big": {
      fontSize: theme.spacing(1.5),
    },
    "& .Mui-disabled": {
      color: theme.palette.secondary.light,
    },
  }));

  const TBTournamentSettingsPasswordField = styled(
    (props: UseControllerProps & TBTextFieldI & InputProps) => (
      <TBFormPasswordField {...props} />
    )
  )(() => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    width: "100%",
    fontWeight: 300,
    "& input::-webkit-calendar-picker-indicator": {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      cursor: "pointer",
      content: '" "',
      opacity: 0,
    },
    "&.size-big": {
      fontSize: theme.spacing(1.5),
    },
    "&.TournamentDetailsPassword": {
      "& input": {
        padding: theme.spacing(0.5),
        color: theme.palette.common.white,
      },
    },
    "& .Mui-disabled": {
      color: theme.palette.secondary.light,
    },
  }));

  const TBTournamentsListTextField = styled(
    (props: UseControllerProps & TBTextFieldI & InputProps) => (
      <TBFormTextField {...props} />
    )
  )(() => ({
    "& .MuiOutlinedInput-root": {
      border: `1px solid ${theme.palette.primary.light}`,
    },
  }));

  const TBSelectQueryParamListTournaments = styled(
    (
      props: UseControllerProps<FieldValues, string> &
        SelectProps &
        TBSelectProps
    ) => <TBFormSelect {...props} />
  )(() => ({
    "& .MuiSelect-root": {
      width: theme.spacing(7),
      border: `2px solid ${theme.palette.primary.light}`,
      color: theme.palette.common.white,
      borderRadius: 0,
    },
    "& .MuiSelect-icon": {
      color: theme.palette.common.white,
    },
    "& .MuiList-root": {
      backgroundColor: "rgba(0,0,0,0)",
    },
  }));

  const TBTextFieldScore = styled((props: TBTextFieldI & InputProps) => (
    <TBTextField {...props} />
  ))(() => ({
    "& .MuiOutlinedInput-root": {
      border: `1px solid rgba(0,0,0,0)!important`,
    },
    "& input": {
      width: theme.spacing(2),
    },
  }));

  return {
    TBTournamentSettingsTextField,
    TBTournamentsListTextField,
    TBSelectQueryParamListTournaments,
    TBTextFieldScore,
    TBTournamentSettingsPasswordField,
  };
};
