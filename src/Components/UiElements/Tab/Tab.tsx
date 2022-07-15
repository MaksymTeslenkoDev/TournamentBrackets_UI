import React from "react";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";

interface TabsProps {
  tabValuesArr: Array<string>;
  tabValue: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const TabsSwitcher: React.FC<TabsProps> = (props) => {
  function aplyProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Tabs value={props.tabValue} onChange={props.handleChange}>
      {props.tabValuesArr.map((v, i) => (
        <Tab key={v} label={`${v}`} {...aplyProps(i)} />
      ))}
    </Tabs>
  );
};
