import { Box, Typography } from "@material-ui/core";
import React from "react";
import { TabTitleComponent } from "./TabTitleComponent";
import { FormProvider, useForm } from "react-hook-form";
import { useAppSelector } from "../../../hooks";
import { selectRoundsDates, selectTournament } from "../tournamentSelectors";
import { useTournamentSettingsTextField } from "./TournamentSettingsTextField/TournamentSettingTextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateTournament } from "../hooks/useUpdateTournament";
import { useSettingsChampConfigStyles } from "./styles/useSettingsChampConfigStyles";

export interface SettingChampFields {
  [round: string]: string | number;
}

const schema = yup.object().shape({
  size: yup
    .number()
    .typeError("Must be a number")
    .max(32, "Max players count is 32"),
});

export const SettingsChampConfig: React.FC = () => {
  const classes = useSettingsChampConfigStyles();
  const tournament = useAppSelector((state) => selectTournament(state));
  const roundsDates = useAppSelector((state) => selectRoundsDates(state));
  const { TBTournamentSettingsTextField } = useTournamentSettingsTextField();

  const methods = useForm<SettingChampFields>({
    mode: "onChange",
    defaultValues: {
      places: tournament.size,
      startAt: tournament.startAt,
      finishAt: tournament.finishAt,
    },
    resolver: yupResolver(schema),
  });

  const { handleChangeField, handleChangeRoundMatches } =
    useUpdateTournament(methods);

  const renderRoundSchedule = () => {
    return (
      <>
        {roundsDates.length &&
          roundsDates.map((item, index) => (
            <Box key={item.round} className={classes.roundRow}>
              <Typography className={classes.fieldRowSubtitle}>
                {item.round === 1 ? "Final" : `Round ${++index}`}
              </Typography>
              <TBTournamentSettingsTextField
                name={`round${item.round}`}
                size="small"
                label=""
                className="TournamentsettingsTextField"
                color="primary"
                inputProps={{
                  type: "date",
                  defaultValue: item.startAt,
                }}
                onBlur={() =>
                  handleChangeRoundMatches(item.round, `round${item.round}`)
                }
                iconComponent={
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="TournamentSettingsIcon"
                  />
                }
              />
            </Box>
          ))}
      </>
    );
  };

  return (
    <FormProvider {...methods}>
      <Box className={classes.root}>
        <Box className={classes.titleWrapper}>
          <TabTitleComponent title="Championship settings" />
        </Box>

        <form>
          <Box className={classes.block}>
            <Typography className={classes.blockTitle}>Places</Typography>
            <Typography className={classes.fieldRowSubtitle}>
              Set up to 32 teams
            </Typography>
            <TBTournamentSettingsTextField
              name="size"
              size="small"
              label=""
              className="TournamentsettingsTextField"
              color="primary"
              onBlur={() => handleChangeField("size")}
              error
              inputProps={{
                defaultValue: tournament.size,
                className: "input-size--big",
              }}
            />
          </Box>
          <Box className={classes.block}>
            <Typography className={classes.blockTitle}>Schedule</Typography>
            <Box className={classes.roundRow}>
              <Typography className={classes.fieldRowSubtitle}>
                Start Date
              </Typography>
              <TBTournamentSettingsTextField
                name="startAt"
                size="small"
                label=""
                className="TournamentsettingsTextField"
                color="primary"
                inputProps={{
                  type: "date",
                  defaultValue: tournament.startAt,
                }}
                onBlur={() => handleChangeField("startAt")}
                iconComponent={
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="TournamentSettingsIcon"
                  />
                }
              />
            </Box>
            <Box className={classes.roundRow}>
              <Typography className={classes.fieldRowSubtitle}>
                Finish Date
              </Typography>
              <TBTournamentSettingsTextField
                name="finishAt"
                size="small"
                label=""
                className="TournamentsettingsTextField"
                color="primary"
                inputProps={{
                  type: "date",
                  defaultValue: tournament.finishAt,
                }}
                onBlur={() => handleChangeField("finishAt")}
                iconComponent={
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="TournamentSettingsIcon"
                  />
                }
              />
            </Box>
            {tournament.matches.length > 0 && renderRoundSchedule()}
          </Box>
        </form>
      </Box>
    </FormProvider>
  );
};
