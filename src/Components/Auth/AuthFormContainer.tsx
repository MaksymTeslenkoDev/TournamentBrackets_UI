import React from "react";
import { Box } from "@material-ui/core";
import { TabPanel } from "../UiElements/Tab/TabPanel";
import { TabsSwitcher } from "../UiElements/Tab/Tab";
import { SignUpForm } from "../../features/Signup/SignUpForm";
import { useAuthFormStyles } from "./styles/useAuthContainerStyles";
import { LoginForm } from "../../features/login/LoginForm";

export const AuthFormContainer: React.FC = () => {
  const styles = useAuthFormStyles();
  const [tabValue, setTabValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const Tabs = ["sign in", "sign up"];
  return (
    <Box className={styles.root}>
      <Box>
        <TabsSwitcher
          tabValue={tabValue}
          handleChange={handleChange}
          tabValuesArr={Tabs}
        />
      </Box>
      <TabPanel value={tabValue} index={0}>
        <LoginForm />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <SignUpForm />
      </TabPanel>
    </Box>
  );
};
