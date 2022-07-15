import { alpha, styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "../../../hooks/useTheme";

interface TabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
interface ItemTabProps {
  label: string;
}

export const useTournamentSidebar = () => {
  const [theme] = useTheme();
  const TournamentSidebarMenu = styled((props: TabsProps) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
      orientation="vertical"
    />
  ))(() => ({
    position: "relative",
    "& .MuiTabs-indicator": {
      left: 0,
      backgroundColor: theme.palette.warning.main,
    },
  }));

  const SidebarTabItem = styled((props: ItemTabProps) => (
    <Tab disableRipple {...props} />
  ))(() => ({
    "&.MuiTab-root": {
      color: theme.palette.common.white,
      alignItems: "flex-start",
      fontWeight: 300,
      fontFamily: "'Nunito','Roboto','Helvetica',sans-serif",
      textTransform: "capitalize",
      fontSize: theme.spacing(1.125),
      padding: theme.spacing(0.75, 4.25, 0.75, 0.75),
    },

    "&.Mui-selected": {
      color: `${theme.palette.common.white}`,
      textAlign: "left",
      backgroundColor: alpha(theme.palette.primary.main, 0.5),
    },
  }));

  return { TournamentSidebarMenu, SidebarTabItem };
};
