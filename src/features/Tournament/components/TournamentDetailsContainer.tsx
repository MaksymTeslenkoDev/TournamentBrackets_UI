import {
  Box,
  FormControl,
  FormControlLabel,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import * as yup from "yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppSelector } from "../../../hooks";
import { selectTournament } from "../tournamentSelectors";
import { TabTitleComponent } from "./TabTitleComponent";
import { useSettingsChampConfigStyles } from "./styles/useSettingsChampConfigStyles";
import { useTournamentSettingsTextField } from "./TournamentSettingsTextField/TournamentSettingTextField";
import { TournamentAccessType } from "../types";
import { useUpdateTournament } from "../hooks/useUpdateTournament";
import { SettingChampFields } from "./SettingsChampConfig";
import { useTBRadioButton } from "../../../Components/UiElements/Buttons/TBRadioButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useTournamentDetailsStyles } from "./styles/useTournamentDetailsStyles";

export const TournamentDetailsContainer: React.FC = () => {
  const tournament = useAppSelector((state) => selectTournament(state));
  const classes = useTournamentDetailsStyles();
  const tournamentSettingClasses = useSettingsChampConfigStyles();
  const schema = yup.object().shape({
    title: yup
      .string()
      .typeError("Must be a string")
      .required("Tournament title can't be empty"),
  });

  const { TBTournamentSettingsTextField } = useTournamentSettingsTextField();
  const [TBRadioGroup, TBRadio] = useTBRadioButton();
  const methods = useForm<SettingChampFields>({
    mode: "onChange",
    defaultValues: {
      title: tournament.title,
      accessType: tournament.accessType,
    },
    resolver: yupResolver(schema),
  });

  const { handleChangeField } = useUpdateTournament(methods);

  const handleCopy = () => {
    navigator.clipboard.writeText(tournament.title);
  };
  const accessType = methods.watch("accessType");

  React.useEffect(() => {
    handleChangeField("accessType");
  }, [accessType]);
  return (
    <FormProvider {...methods}>
      <Box className={tournamentSettingClasses.root}>
        <Box className={tournamentSettingClasses.titleWrapper}>
          <TabTitleComponent title="Tournament Details" />
        </Box>

        <form>
          <Box className={tournamentSettingClasses.block}>
            <Typography className={tournamentSettingClasses.blockTitle}>
              Tournament name
            </Typography>
            <TBTournamentSettingsTextField
              name="title"
              size="medium"
              label=""
              className="TournamentsettingsTextField size-big"
              color="primary"
              onBlur={() => handleChangeField("title")}
              inputProps={{
                defaultValue: tournament.title,
              }}
            />
          </Box>
          <Box className={tournamentSettingClasses.block}>
            <Typography className={tournamentSettingClasses.blockTitle}>
              Access type
            </Typography>
            <FormControl component="fieldset">
              <Controller
                control={methods.control}
                name="accessType"
                render={({ field }) => (
                  <TBRadioGroup {...field}>
                    <FormControlLabel
                      value={TournamentAccessType.public}
                      control={<TBRadio />}
                      label="Open (anyone can join)"
                    />
                    <FormControlLabel
                      value={TournamentAccessType.private}
                      control={<TBRadio />}
                      label="Private (just invited)"
                    />
                  </TBRadioGroup>
                )}
              />
            </FormControl>
          </Box>
          {accessType === TournamentAccessType.private && (
            <Box className={tournamentSettingClasses.block}>
              <Typography className={tournamentSettingClasses.blockTitle}>
                Invitational Link
              </Typography>
              <Box className={classes.invitationalLinkTextRow}>
                <TBTournamentSettingsTextField
                  name="invitationLink"
                  label=""
                  disabled
                  className="TournamentsettingsTextField size-big"
                  color="primary"
                  inputProps={{
                    defaultValue: tournament.title,
                  }}
                />
                <IconButton className={classes.copyButton} onClick={handleCopy}>
                  <FontAwesomeIcon icon={faCopy} />
                </IconButton>
              </Box>
            </Box>
          )}
        </form>
      </Box>
    </FormProvider>
  );
};
