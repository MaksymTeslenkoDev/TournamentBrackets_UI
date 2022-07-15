import AccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import { AccordionDetails, AccordionDetailsProps } from "@mui/material";
import { useTheme } from "../../../hooks/useTheme";

export const useTournamentsAccordion = () => {
  const [theme] = useTheme();

  const TournamentsAccordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(() => ({
    backgroundColor: "rgba(0,0,0,0)",
    color: theme.palette.common.white,
    textTransform: "uppercase",

    marginBottom: theme.spacing(0.75),
    "& .Mui-expanden": {
      borderBottom: "none",
      color: theme.palette.primary.light,
    },
  }));

  const TournamentsAccordionSummary = styled((props: AccordionSummaryProps) => (
    <AccordionSummary {...props} />
  ))(() => ({
    backgroundColor: "rgba(0,0,0,0)",
    margin: 0,
    padding: theme.spacing(0.5),
    minHeight: theme.spacing(2.25),
    transition: ".4s all ease",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      display: "flex",
      margin: 0,
      "& span": {
        fontSize: theme.spacing(0.875),
        fontWeight: "bolder",
      },
      "& div": {
        display: "flex",
      },
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: theme.palette.common.white,
      marginRight: theme.spacing(1),
      "& svg": {
        fontSize: theme.spacing(1.5),
      },
    },
  }));

  const TournamentsAccordionDetails = styled((props: AccordionDetailsProps) => (
    <AccordionDetails {...props} />
  ))(({ theme }) => ({
    padding: theme.spacing(0.5, 0),
    "& .MuiPaper-root": {
      backgroundColor: "rgba(0,0,0,0)",
    },
  }));

  return [
    TournamentsAccordion,
    TournamentsAccordionSummary,
    TournamentsAccordionDetails,
  ];
};
