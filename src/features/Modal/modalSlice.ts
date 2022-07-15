import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ModalState {
  isOpen: boolean;
  children?: React.ReactNode;
}
const initialState: ModalState = {
  isOpen: false,
};
const modalSlice = createSlice({
  name: "@@modal",
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setModalChildren: (state, action: PayloadAction<React.ReactNode>) => {
      state.children = action.payload;
    },
  },
});

export const { setOpenModal, setModalChildren } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;
export default modalSlice.reducer;
