import {
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  styled,
} from "@material-ui/core";
import { useTheme } from "../../../hooks/useTheme";

export const useTBRadioButton = () => {
  const [theme] = useTheme();

  const TBRadioGroup = styled((props: RadioGroupProps) => (
    <RadioGroup {...props} />
  ))(() => ({
    color: theme.palette.common.white,
    "& .MuiFormControlLabel-label": {
      fontSize: theme.spacing(1.125),
    },
  }));

  const TBRadio = styled((props: RadioProps) => <Radio {...props} />)(() => ({
    color: theme.palette.common.white,
    "&.Mui-checked": {
      color: theme.palette.warning.main,
    },
  }));

  return [TBRadioGroup, TBRadio];
};
