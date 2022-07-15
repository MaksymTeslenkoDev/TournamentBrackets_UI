import { Box } from "@material-ui/core";
import { BoxProps } from "@mui/system";
import React from "react";
import clsx from "clsx";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { useLayoutStyles } from "./styles/useLayoutStyles";
import { Modal } from "../features/Modal/modal";

export const Layout: React.FC<BoxProps> = ({
  children,
  className,
  component = "main",
}) => {
  const classes = useLayoutStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.root}>
        <SideBar />
        <Box
          component={component}
          className={clsx(className, classes.childrenWrapper)}
        >
          {children}
        </Box>
      </Box>
      <Modal />
    </Box>
  );
};
