import React from "react";
import { AuthFormContainer } from "../../../Components/Auth/AuthFormContainer";
import { SimpleButton } from "../../../Components/UiElements/Buttons/TBButton";
import { useModal } from "../../Modal/useModal";
import { AuthStatus } from "../types";
import { UserAvatar } from "./UserAvatar";
import { useUserArea } from "../useUserAre";
import { LoadStatus } from "../../../types";
import { Skeleton } from "@mui/material";

export const UserArea: React.FC = () => {
  const { user, authStatus, status, handleLogOut } = useUserArea();
  const { switchModal, setModalContent } = useModal();

  const handleOpenModal = () => {
    setModalContent(<AuthFormContainer />);
    switchModal(true);
  };

  if (authStatus === AuthStatus.UnAuthorized || !user) {
    return (
      <SimpleButton variant="contained" onClick={handleOpenModal}>
        Register
      </SimpleButton>
    );
  }

  if (status === LoadStatus.loading) {
    return <Skeleton variant="rectangular" width={100} height={50} />;
  }

  return <UserAvatar user={user} handleLogOut={handleLogOut} />;
};
