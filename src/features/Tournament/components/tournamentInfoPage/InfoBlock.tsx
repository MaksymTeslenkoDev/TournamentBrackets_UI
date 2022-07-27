import { Box } from "@material-ui/core";
import React from "react";
import { TabsSwitcher } from "../../../../Components/UiElements/Tab/Tab";
import { TabPanel } from "../../../../Components/UiElements/Tab/TabPanel";
import { useAppSelector } from "../../../../hooks";
import { selectUser } from "../../../User/userSlice";
import { selectOwner } from "../../state/tournamentSelectors";
import { OverviewContainer } from "./overviewTab/OverviewContainer";
import { SettingsContainer } from "./settingsTab/SettingsContainer";
import { useInfoBlockStyles } from "./styles/useInfoBlockStyles";
import { BracketContainer } from "./bracketTab/TournamentBracketContainer";

export const InfoBlock: React.FC = () => {
  const classes = useInfoBlockStyles();
  const [tabValue, setTabValue] = React.useState(0);
  const { user } = useAppSelector(selectUser);
  const owner = useAppSelector(selectOwner);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const Tabs =
    user && owner && owner?.name === user.name
      ? ["Overview", "Tournament bracket", "Settings"]
      : ["Overview", "Tournament bracket"];

  return (
    <Box className={classes.root}>
      <Box className={classes.tabsWrapper}>
        <TabsSwitcher
          tabValue={tabValue}
          handleChange={handleChange}
          tabValuesArr={Tabs}
        />
        <Box className={classes.bottomRow}></Box>
      </Box>
      <Box className={classes.bottom}>
        <TabPanel value={tabValue} index={0}>
          <OverviewContainer />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <BracketContainer />
        </TabPanel>
        {user && owner && owner.name === user.name && (
          <TabPanel value={tabValue} index={2}>
            <SettingsContainer />
          </TabPanel>
        )}
      </Box>
    </Box>
  );
};
