import { Box } from "@material-ui/core";
import React from "react";
import { BracketSettingsSidebar } from "../../sidebar/components/BracketSettingsSidebar";
import { withSidebarHOCStyles } from "./styles/useWithSidebarHOC";

export const WithSidebarHOC =
  <T extends object>(Component: React.ComponentType<T>): React.FC<T> =>
  ({ ...props }: T) => {
    const classes = withSidebarHOCStyles();
    return (
      <Box className={classes.root}>
        <BracketSettingsSidebar />
        <Box sx={{ flex: 5 }}>{<Component {...props} />}</Box>
      </Box>
    );
  };
