import { Box } from "@material-ui/core";
import React from "react";
import { TabPanel } from "../../../../../Components/UiElements/Tab/TabPanel";
import { InfoBlockSidebarMenu } from "./InfoBlockSidebarMenu";
import { SettingsChampConfig } from "./SettingsChampConfig";
import { useSettingsContainerStyles } from "./styles/useSettingsContainerStyles";
import { TournamentDetailsContainer } from "./TournamentDetailsContainer";

export const SettingsContainer: React.FC = () => {
  const classes = useSettingsContainerStyles();
  const Tabs = [
    "Tournament details",
    "Championship structure",
    "Match Configuration",
    "Prizes",
    "Rules",
  ];

  const [value, setValue] = React.useState(0);

  return (
    <Box className={classes.root}>
      <Box className={classes.leftSide}>
        <InfoBlockSidebarMenu
          tabs={Tabs}
          tabValue={value}
          setValue={setValue}
        />
      </Box>
      <Box className={classes.rightSide}>
        <TabPanel value={value} index={0}>
          <TournamentDetailsContainer />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SettingsChampConfig />
        </TabPanel>
      </Box>
    </Box>
  );
};
