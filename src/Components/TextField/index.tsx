import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { TBTextField, TBTextFieldI } from "./PlaneFormInput";

import { InputProps } from "@material-ui/core";

export const TBFormTextField: React.FC<
  UseControllerProps & TBTextFieldI & InputProps
> = ({ id, label, inputProps, ...props }) => {
  const {
    field: { ref, name, onChange },
    fieldState: { invalid, error },
  } = useController(props);
  return (
    <TBTextField
      {...props}
      id={name}
      label={label}
      error={invalid}
      helperText={error?.message}
      inputProps={{ ...inputProps, inputRef: ref }}
      onChange={onChange}
    />
  );
};
