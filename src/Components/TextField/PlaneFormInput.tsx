import React from "react";

import {
  Box,
  FormControl,
  FormControlProps,
  FormHelperText,
  Input,
  InputLabel,
  InputProps,
  OutlinedInput,
} from "@material-ui/core";
import { useTBTextFieldStyles } from "./styles/usePlaneTexFieldStyles";
import clsx from "clsx";

export interface TBTextFieldI extends FormControlProps {
  inputProps?: InputProps;
  label: string;
  helperText?: string;
  iconComponent?: React.ReactNode;
}

export const TBTextField: React.FC<TBTextFieldI> = ({
  label,
  inputProps,
  id,
  error,
  helperText,
  iconComponent,
  color,
  className,
  variant = "outlined",
  ...props
}) => {
  const classes = useTBTextFieldStyles({ hasLabel: !!label });
  const onFocus = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    event.target.select();
  };

  const renderInput = () => {
    if (variant === "outlined") {
      return (
        <OutlinedInput
          {...inputProps}
          id={id}
          name={id}
          className={className}
          color={color}
          inputProps={{ "aria-label": id }}
          aria-describedby={`${id}-helper-text`}
          onFocus={onFocus}
          error={error}
        />
      );
    }
    return (
      <Input
        {...inputProps}
        id={id}
        name={id}
        className={className}
        color={color}
        inputProps={{ "aria-label": id }}
        aria-describedby={`${id}-helper-text`}
        onFocus={onFocus}
        error={error}
      />
    );
  };

  const renderIcon = () => {
    if (iconComponent) {
      return (
        <Box className={clsx(classes.iconWrapper, `${color}`)}>
          {iconComponent}
        </Box>
      );
    }
  };

  return (
    <FormControl {...props} className={classes.root}>
      {label && (
        <InputLabel color={color} htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <Box className={classes.fieldWrapper}>
        {renderIcon()}
        {renderInput()}
      </Box>
      {error && (
        <FormHelperText id={`${id}-helper-text`}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
