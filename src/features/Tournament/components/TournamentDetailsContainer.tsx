import {
  Box,
  FormControl,
  FormControlLabel,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Controller, FormProvider } from "react-hook-form";
import { useAppSelector } from "../../../hooks";
import { selectTournament } from "../tournamentSelectors";
import { TabTitleComponent } from "./TabTitleComponent";
import { useSettingsChampConfigStyles } from "./styles/useSettingsChampConfigStyles";
import { useTournamentSettingsTextField } from "./TournamentSettingsTextField/TournamentSettingTextField";
import { TournamentAccessType } from "../types";
import { useTBRadioButton } from "../../../Components/UiElements/Buttons/TBRadioButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useTournamentDetailsStyles } from "./styles/useTournamentDetailsStyles";
import { useTournamentDetailsForm } from "../hooks/useTournamentDetailsForm";
import { handleCopy } from "../../../Utility/handleClipboardCopy";
import { SimpleButton } from "../../../Components/UiElements/Buttons/TBButton";
export const TournamentDetailsContainer: React.FC = () => {
  const tournament = useAppSelector((state) => selectTournament(state));
  const classes = useTournamentDetailsStyles();
  const tournamentSettingClasses = useSettingsChampConfigStyles();

  const { TBTournamentSettingsTextField, TBTournamentSettingsPasswordField } =
    useTournamentSettingsTextField();
  const [TBRadioGroup, TBRadio] = useTBRadioButton();

  const { methods, handleChangeField, accessType, handleSubmitChangePassword } =
    useTournamentDetailsForm(tournament);

  const INVITE_LINK = `${window.location.origin}/invite?${tournament.invite}`;

  const clickCopy = React.useCallback(() => {
    handleCopy(INVITE_LINK);
  }, []);

  return (
    <FormProvider {...methods}>
      <Box className={tournamentSettingClasses.root}>
        <Box className={tournamentSettingClasses.titleWrapper}>
          <TabTitleComponent title="Tournament Details" />
        </Box>
        <form onSubmit={handleSubmitChangePassword}>
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
                  defaultValue: INVITE_LINK,
                }}
              />
              <IconButton className={classes.copyButton} onClick={clickCopy}>
                <FontAwesomeIcon icon={faCopy} />
              </IconButton>
            </Box>
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
                Password
              </Typography>
              <TBTournamentSettingsPasswordField
                name="password"
                label=""
                className="TournamentDetailsPassword size-big"
                color="primary"
              />
              <Box
                className={
                  tournamentSettingClasses.changePasswordSubmitButtonRow
                }
              >
                <SimpleButton
                  color="primary"
                  size="medium"
                  variant="contained"
                  type="submit"
                >
                  Submit
                </SimpleButton>
              </Box>
            </Box>
          )}
        </form>
      </Box>
    </FormProvider>
  );
};
