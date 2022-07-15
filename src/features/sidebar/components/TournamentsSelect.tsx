import React from "react";
import { Box, Typography, Paper, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faSearch,
  faPlusCircle,
  faUserNinja,
  faTrophy,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useBracketSettingsSidebarStyles } from "./styles/useBracketSettingsSidebarStyles";
import { useAppSelector } from "../../../hooks";
import { selectSidebar, UserRoles } from "../sidebarSlice";
import { useTournamentsAccordion } from "./TournamentsAccordion";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

interface Props {
  handleDeleteTournament: (id: number) => (e: React.MouseEvent) => void;
}
export const TournamentsSelect: React.FC<Props> = ({
  handleDeleteTournament,
}) => {
  const classes = useBracketSettingsSidebarStyles();
  const history = useHistory();

  const { tournamentsOptions, activeTournament, game } =
    useAppSelector(selectSidebar);
  const [
    TournamentsAccordion,
    TournamentsAccordionSummary,
    TournamentsAccordionDetails,
  ] = useTournamentsAccordion();

  const handleClickTournamentRow = (value: number) => {
    history.push(`/tournaments/${game}/${value}`);
  };

  const handleClickSearch = () => {
    history.push(`/tournaments/${game}`);
  };

  const renderActiveTournamentRow = () => {
    const tournament = tournamentsOptions.find(
      (i) => i.value === +activeTournament
    );
    return (
      <Box className={clsx(classes.tournamentRow, "active")}>
        <Box>
          <FontAwesomeIcon icon={faTrophy} />
          <Typography component="span">
            {
              tournamentsOptions.find((i) => i.value === +activeTournament)
                ?.label
            }
          </Typography>
        </Box>
        {tournament && tournament?.role !== UserRoles.player ? (
          <Box>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={handleDeleteTournament(+tournament.id)}
            />
            <FontAwesomeIcon icon={faUserNinja} />
          </Box>
        ) : null}
      </Box>
    );
  };

  return (
    <Box className={classes.tournamentsSelectRoot}>
      <TournamentsAccordion>
        <Box className={classes.selectHeader}>
          <TournamentsAccordionSummary
            expandIcon={<FontAwesomeIcon icon={faCaretRight} />}
          >
            <Typography component="span">Tournaments</Typography>
          </TournamentsAccordionSummary>
          <Box className={classes.iconsBlock}>
            <IconButton size="small" onClick={handleClickSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </IconButton>
            <IconButton size="small">
              <FontAwesomeIcon icon={faPlusCircle} />
            </IconButton>
          </Box>
        </Box>

        <TournamentsAccordionDetails>
          <Paper>
            {tournamentsOptions.map((i) => {
              return (
                <Box
                  key={i.id}
                  className={clsx(classes.tournamentRow)}
                  onClick={(e) => handleClickTournamentRow(+i.value)}
                >
                  <Box>
                    <FontAwesomeIcon icon={faTrophy} />
                    <Typography component="span">{i.label}</Typography>
                  </Box>

                  {i.role !== UserRoles.player ? (
                    <Box>
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={handleDeleteTournament(+i.id)}
                      />
                      <FontAwesomeIcon icon={faUserNinja} />
                    </Box>
                  ) : null}
                </Box>
              );
            })}
          </Paper>
        </TournamentsAccordionDetails>
      </TournamentsAccordion>
      {tournamentsOptions.find((i) => i.value === +activeTournament)
        ? renderActiveTournamentRow()
        : null}
    </Box>
  );
};
