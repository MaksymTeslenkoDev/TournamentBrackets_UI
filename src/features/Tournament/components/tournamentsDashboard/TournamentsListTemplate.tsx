import { Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { TournamentListItem } from "../../state/types";
import { useTournamentsListTemplateStyles } from "./styles/useTournamentsListTemplateStyles";
import { TournamentListItem as ListItem } from "./TournamentListItem";

interface TournamentsListProps {
  list: Array<TournamentListItem>;
}

export const TournamentsListTemplate: React.FC<TournamentsListProps> = ({
  list,
}) => {
  const history = useHistory();
  const classes = useTournamentsListTemplateStyles();
  const handleItemClick = (item: TournamentListItem) => {
    history.push(`/tournaments/${item.game}/${item.id}`);
  };

  return (
    <Box className={classes.root}>
      {list.map((i) => (
        <ListItem
          key={i.title}
          item={i}
          onItemClick={() => handleItemClick(i)}
        />
      ))}
    </Box>
  );
};
