import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { TBTextFieldI } from "./PlaneFormInput";

import { InputProps } from "@material-ui/core";
import { ModalTextField } from "./styles/ModalTextFields";

export const ModalTextFieldForm: React.FC<
  UseControllerProps & TBTextFieldI & InputProps
> = ({ id, label, inputProps, ...props }) => {
  const {
    field: { ref, name, onChange },
    fieldState: { invalid, error },
  } = useController(props);
  return (
    <ModalTextField
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
