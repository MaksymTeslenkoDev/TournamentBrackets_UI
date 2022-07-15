import { makeStyles, Theme } from "@material-ui/core";
export const useAddTournamentInitialModalClasses = makeStyles(
  (theme: Theme) => ({
    root: {
      width: theme.spacing(20),
      backgroundColor: theme.palette.secondary.dark,
      padding: theme.spacing(0.5, 1),
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    modalTitle: {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(1),
      "& span": {
        fontWeight: 500,
        fontSize: theme.spacing(2.175),
      },
      "& span:first-child": {
        //   color: theme.palette.info.light,
        marginRight: theme.spacing(0.25),
      },
    },
    modalSubTitle: {
      color: theme.palette.common.white,
      width: theme.spacing(15),
      marginBottom: theme.spacing(1.25),
    },
    imgWrapper: {
      marginBottom: theme.spacing(0.75),
      objectFit: "contain",
      "& img": {
        width: "50%",
      },
    },
    btn: {
      width: "100%",
      marginBottom: theme.spacing(1.75),
    },
    footerRow: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: theme.spacing(0.675),
    },
    footerBtn: {
      padding: theme.spacing(0, 1.75),
      fontSize: theme.spacing(1.25),
    },
  })
);
