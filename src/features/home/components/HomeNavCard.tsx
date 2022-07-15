import { Card, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useHomeNavCardClasses = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.secondary.dark,
    padding: theme.spacing(2, 0.5, 0.25, 0.5),
    color: theme.palette.common.white,
    minHeight: theme.spacing(10),
  },
  titleRow: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(1),
    "& span": {
      fontSize: theme.spacing(1.5),
    },
    "& span:first-child": {
      marginRight: theme.spacing(0.5),
    },
  },
  descriptionRow: {
    width: theme.spacing(11),
    fontSize: theme.spacing(0.875),
    marginBottom: theme.spacing(1),
    textAlign: "center",
  },
}));

interface Props {
  title: string;
  titleIcon?: React.ReactNode;
  description: string;
  handleClick?: () => void;
}

export const HomeNavCard: React.FC<Props> = ({
  title,
  titleIcon,
  description,
  handleClick,
}) => {
  const classes = useHomeNavCardClasses();
  return (
    <Card className={classes.root} onClick={handleClick}>
      <Typography className={classes.titleRow} component="p">
        <Typography component="span">{title}</Typography>
        <Typography component="span">{titleIcon ? titleIcon : null}</Typography>
      </Typography>
      <Typography className={classes.descriptionRow} component="p">
        <Typography component="span">{description}</Typography>
      </Typography>
    </Card>
  );
};
