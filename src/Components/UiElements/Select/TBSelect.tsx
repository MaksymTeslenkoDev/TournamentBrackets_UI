import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectProps,
  Typography,
} from "@material-ui/core";
import React from "react";
import { InputLabel } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTBSelectStyles } from "./styles/useTBSelectStyles";
import clsx from "clsx";
import "./styles/MuiMenuStyle.css";

export interface SelectOption {
  id: string | number;
  label: string;
  value: number | string;
}

export interface TBSelectProps {
  label: string;
  options: SelectOption[];
  iconStart?: React.ReactNode;
  description?: string;
}
export const TBFormSelect: React.FC<
  UseControllerProps & SelectProps & TBSelectProps
> = ({
  label,
  options,
  variant = "outlined",
  iconStart,
  color,
  description,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const classes = useTBSelectStyles({ hasLabel: !!label });
  const {
    field: { ref, name, value, onChange },
    fieldState: { invalid, error },
  } = useController(props);

  const renderOptions = () =>
    options.map(({ id, label, value }) => (
      <MenuItem key={id} value={value}>
        {label}
      </MenuItem>
    ));

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const renderIcon = () => {
    if (iconStart) {
      return (
        <Box className={clsx(classes.iconWrapper, `${color}`)}>{iconStart}</Box>
      );
    }
  };
  return (
    <FormControl className={clsx(classes.root, "select-root")}>
      <InputLabel htmlFor={name} id={`${name}-open-select-label`}>
        {label}
      </InputLabel>
      <Box className={classes.fieldWrapper}>
        {renderIcon()}
        <Select
          {...props}
          ref={ref}
          labelId={`${name}-open-select-label`}
          id={`${name}-open-select`}
          open={open}
          color={color}
          variant={variant}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value || ""}
          onChange={onChange}
          error={invalid}
          IconComponent={ExpandMoreIcon}
          children={renderOptions()}
        />
      </Box>
      <Typography className={classes.description}>{description}</Typography>
      {invalid && (
        <FormHelperText id={`${name}-helper-text`}>{error}</FormHelperText>
      )}
    </FormControl>
  );
};
