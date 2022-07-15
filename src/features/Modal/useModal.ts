import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { selectModal, setOpenModal, setModalChildren } from "./modalSlice";

export const useModal = () => {
  const { isOpen, children } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const switchModal = (value: boolean) => {
    dispatch(setOpenModal(value));
  };
  const setModalContent = (children: React.ReactNode) => {
    dispatch(setModalChildren(children));
  };

  return { isOpen, children, switchModal, setModalContent } as {
    isOpen: boolean;
    children: React.ReactNode;
    switchModal: (val: boolean) => void;
    setModalContent: (children: React.ReactNode) => void;
  };
};
