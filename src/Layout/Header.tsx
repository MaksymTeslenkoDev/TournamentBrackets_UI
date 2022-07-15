import { AppBar, Box, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";

import { UserArea } from "../features/User/components/UserArea";
import { useHeaderStyles } from "./styles/useHeaderStyles";

export const Header: React.FC = observer(() => {
  const classes = useHeaderStyles();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Box>
        <Typography className={classes.appTitle} component="span">
          {"Tournamets & Brackets"}
        </Typography>
      </Box>
      <UserArea />
    </AppBar>
  );
});
