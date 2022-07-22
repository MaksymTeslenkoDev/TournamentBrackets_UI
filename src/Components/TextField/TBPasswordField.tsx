import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  FormControl,
  FormControlProps,
  Input,
  InputProps,
} from "@material-ui/core";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { useTBTextFieldStyles } from "./styles/usePlaneTexFieldStyles";
import { useTBPasswordFieldStyles } from "./styles/useTBPasswordFieldStyles";

interface TBPasswordFieldProps extends FormControlProps {
  inputProps?: InputProps;
  label: string;
  helperText?: string;
  showStrenght?: boolean;
}

const TBPasswordField: React.FC<TBPasswordFieldProps> = ({
  label,
  inputProps,
  id,
  error,
  helperText,
  showStrenght = true,
  ...props
}) => {
  const [previewPassword, togglePreviewPassword] =
    React.useState<boolean>(false);

  const classes = useTBTextFieldStyles({ hasLabel: !!label });

  const fieldType: HTMLInputElement["type"] = previewPassword
    ? "text"
    : "password";

  const renderEyeIcon = () =>
    previewPassword ? (
      <FontAwesomeIcon icon={faEyeSlash} />
    ) : (
      <FontAwesomeIcon icon={faEye} />
    );

  const onFocus = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    event.target.select();
  };

  return (
    <FormControl error={error} className={classes.root} {...props}>
      <Input
        {...inputProps}
        id={id}
        name={id}
        aria-describedby={`${id}-helper-text`}
        onFocus={onFocus}
        type={fieldType}
      />
      <Box
        className={classes.previewPassword}
        onMouseDown={() => togglePreviewPassword(true)}
        onMouseUp={() => togglePreviewPassword(false)}
        onMouseLeave={() => togglePreviewPassword(false)}
      >
        {renderEyeIcon()}
      </Box>
    </FormControl>
  );
};

export const TBFormPasswordField: React.FC<
  UseControllerProps & TBPasswordFieldProps
> = ({ id, label, inputProps, ...props }) => {
  const {
    field: { ref, name, onChange, value },
    fieldState: { invalid, error },
  } = useController(props);

  return (
    <TBPasswordField
      {...props}
      id={name}
      variant="filled"
      label={label}
      error={invalid}
      helperText={error?.message}
      inputProps={{ ...inputProps, onChange, inputRef: ref, value }}
    />
  );
};

export default TBFormPasswordField;
