import React from "react";
import { useTournamentSidebar } from "../../../../../Components/UiElements/Tab/VerticalTab";
interface Props {
  tabs: Array<string>;
  tabValue: number;
  setValue: (value: number) => void;
}

export const InfoBlockSidebarMenu: React.FC<Props> = ({
  tabs,
  setValue,
  tabValue,
}) => {
  const { TournamentSidebarMenu, SidebarTabItem } = useTournamentSidebar();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TournamentSidebarMenu
      value={tabValue}
      onChange={handleChange}
      aria-label="sidebar tabs"
    >
      {tabs.map((item, index) => (
        <SidebarTabItem key={`label_${index}_${item}`} label={item} />
      ))}
    </TournamentSidebarMenu>
  );
};
