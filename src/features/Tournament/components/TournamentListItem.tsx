import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import {
  accessTypesOptinsArray,
  TournamentListItem as TournamentItem,
} from "../types";
import { getTeamsCount } from "../../../Utility/getTeamsCount";
import { useTournamentListItemStyles } from "./styles/useTournamentListItemStyles";
import { useAppSelector } from "../../../hooks";
import { selectPlayers } from "../tournamentSelectors";

interface TournamentListItemProps {
  item: TournamentItem;
  onItemClick: () => void;
}
export const TournamentListItem: React.FC<TournamentListItemProps> = ({
  item,
  onItemClick,
}) => {
  const competitors = useAppSelector(() => selectPlayers(item));
  const classes = useTournamentListItemStyles();
  return (
    <Paper className={classes.listItemRoot} onClick={onItemClick}>
      <Box className={classes.commonColumn}>
        <Typography component="p" className={classes.dateTitleTxt}>
          Start At
        </Typography>
        <Typography component="p" className={classes.dateValueTxt}>
          {item.startAt || "---"}
        </Typography>
      </Box>
      <Box className={classes.titleColumn}>
        <Typography className={classes.itemTitleTxt}>{item.title}</Typography>
      </Box>
      <Box className={classes.commonColumn}>
        <Typography className={classes.commonTxt}>{item.format}</Typography>
      </Box>
      <Box className={classes.commonColumn}>
        <Typography className={classes.commonTxt}>
          {item.game_format}
        </Typography>
      </Box>
      <Box className={classes.commonColumn}>
        <Typography className={classes.commonTxt}>
          {accessTypesOptinsArray.find((i) => i.value === item.accessType)
            ?.label || "---"}
        </Typography>
      </Box>
      <Box className={classes.commonColumn}>
        <Typography className={classes.prizeTxt}>1000 $</Typography>
      </Box>
      <Box className={clsx(classes.commonColumn, classes.participantsColumn)}>
        <Typography className={classes.commonTxt}>
          <FontAwesomeIcon icon={faUsers} />
        </Typography>
        <Typography className={classes.commonTxt}>
          {`${competitors ? competitors.length : 0} / ${getTeamsCount(
            item.size
          )}`}
        </Typography>
      </Box>
      <Box className={classes.gameIconWrapper}>
        <img src={`../../../images/gamesIcons/${item.game}.png`} />
      </Box>
    </Paper>
  );
};
