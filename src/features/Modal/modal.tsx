import React from "react";
import { Dialog } from "@material-ui/core";
import { useModal } from "./useModal";
import { useModalStyles } from "./styles/useModalStyles";

export const Modal: React.FC = () => {
  const classes = useModalStyles();
  const { isOpen, children, switchModal } = useModal();
  return (
    <Dialog
      className={classes.root}
      open={isOpen}
      onClose={() => switchModal(false)}
    >
      {children}
    </Dialog>
  );
};
