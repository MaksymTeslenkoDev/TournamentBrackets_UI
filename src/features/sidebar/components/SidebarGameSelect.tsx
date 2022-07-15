import React from "react";
import { Box, Typography, Paper } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAccordion } from "./CustomBracketSettingAccordion";
import { useBracketSettingsSidebarStyles } from "./styles/useBracketSettingsSidebarStyles";
import { useAppSelector } from "../../../hooks";
import { selectSidebar } from "../sidebarSlice";
import { getSelectOptionProp } from "../../../Utility/getSelectOptionProp";
import { gamesArray } from "../../Tournament/types";
import { useSidebarStore } from "../useSidebarStore";
import { useHistory, useLocation } from "react-router-dom";

export const GameSelect: React.FC = () => {
  const classes = useBracketSettingsSidebarStyles();
  const history = useHistory();
  const location = useLocation();

  const { game } = useAppSelector(selectSidebar);
  const [CustomAccordion, CustomAccordionSummary, CustomAccordionDetails] =
    useAccordion();

  const { handleSetActive } = useSidebarStore();
  const handleSetGame = (value: string) => {
    history.push(`/tournaments/${value}`);
    handleSetActive("game", value);
  };

  return (
    <CustomAccordion>
      <CustomAccordionSummary
        expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
      >
        <Typography className={classes.accordionSummaryTitleRow} component="p">
          <img
            src={`../../../../images/gamesIcons/${game}.png`}
            alt="game_icon"
          />

          <Typography component="span">
            {getSelectOptionProp(gamesArray, "value", game)?.label || ""}
          </Typography>
        </Typography>
      </CustomAccordionSummary>
      <CustomAccordionDetails>
        <Paper className={classes.detailsContentWrapper}>
          {gamesArray.map((i) => {
            return (
              <Box
                key={i.id}
                className={classes.accordionMenuItem}
                onClick={() => handleSetGame("" + i.value)}
              >
                <Box>
                  <img
                    src={`../../../../images/gamesIcons/${i.value}.png`}
                    alt="game_icon"
                  />
                  <Typography component="span">{i.label}</Typography>
                </Box>
                <FontAwesomeIcon icon={faTrash} />
              </Box>
            );
          })}
        </Paper>
      </CustomAccordionDetails>
    </CustomAccordion>
  );
};
