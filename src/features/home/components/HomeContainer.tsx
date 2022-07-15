import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@material-ui/core";
import React from "react";
import { HomeNavCard } from "./HomeNavCard";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { setModalChildren, setOpenModal } from "../../Modal/modalSlice";
import { AddTournamentInitialModal } from "./AddTournamentIntialModal";
import { useAppDispatch } from "../../../hooks";
import { FindTournamentModal } from "./FindTournamentModal";
import { useHomeContainerClasses } from "./styles/useHomeContainerStyles";

export const HomeContainer: React.FC = () => {
  const classes = useHomeContainerClasses();
  const dispatch = useAppDispatch();
  const handleCreateClick = () => {
    dispatch(setModalChildren(<AddTournamentInitialModal />));
    dispatch(setOpenModal(true));
  };

  const handleFindClick = () => {
    dispatch(setModalChildren(<FindTournamentModal />));
    dispatch(setOpenModal(true));
  };
  return (
    <Box className={classes.root}>
      <HomeNavCard
        title="Find"
        titleIcon={<FontAwesomeIcon icon={faSearch} />}
        description="Click here to find suitable tournament of your game"
        handleClick={handleFindClick}
      />
      <HomeNavCard
        title="Create"
        titleIcon={<FontAwesomeIcon icon={faPlus} />}
        description="Create your own or connect by invitation link  "
        handleClick={handleCreateClick}
      />
    </Box>
  );
};
