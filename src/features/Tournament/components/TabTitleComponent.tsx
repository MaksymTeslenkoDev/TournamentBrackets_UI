import { Box, Divider, Typography } from "@material-ui/core";
import React from "react";
import { useTabTitleComponentStyles } from "./styles/useTabTitleStyles";

interface Props {
  title: string;
}

export const TabTitleComponent: React.FC<Props> = ({ title }) => {
  const classes = useTabTitleComponentStyles();
  return (
    <Box className={classes.root}>
      <Typography>{title}</Typography>
      <Divider />
    </Box>
  );
};
