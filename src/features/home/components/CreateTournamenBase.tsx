import { Box, Divider } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TBFormTextField } from "../../../Components/TextField";
import { useAppSelector } from "../../../hooks";
import {
  gameModesArray,
  gamesArray,
  TournamentBase,
  tournamentFormatsArray,
} from "../../Tournament/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { selectUser } from "../../User/userSlice";
import { TBFormSelect } from "../../../Components/UiElements/Select/TBSelect";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SimpleButton } from "../../../Components/UiElements/Buttons/TBButton";
import { useCreateTournamentBaseModalStyles } from "./styles/useCreateTournamentBaseStyles";
import { getSelectOptionProp } from "../../../Utility/getSelectOptionProp";
import { useCreateTournament } from "../../Tournament/hooks/useCreateTournament";
import { TournamentModalTitle } from "./ModalTitle";

const schema = yup.object().shape({
  title: yup.string().required("Please enter tournament name"),
});

export const CreateTournamentBaseModal: React.FC = () => {
  const classes = useCreateTournamentBaseModalStyles();
  const user = useAppSelector(selectUser);

  const methods = useForm<TournamentBase>({
    mode: "onChange",
    defaultValues: {
      game: gamesArray[0].value,
      format: tournamentFormatsArray[0].value,
      game_format: gameModesArray[0].value,
    },
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = useCreateTournament(methods);

  const { watch } = methods;
  const [game, format] = watch(["game", "format"]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <Box className={classes.root}>
          <TournamentModalTitle first="Create" second="Event" />
          <Box className={classes.row}>
            <TBFormTextField
              name="owner"
              size="small"
              label="Organizer"
              color="secondary"
              variant="standard"
              value={user.user?.name}
              inputProps={{
                disabled: true,
                defaultValue: user.user?.name,
              }}
              iconComponent={<FontAwesomeIcon icon={faUser} />}
            />
          </Box>
          <Box className={classes.body}>
            <Box className={classes.row}>
              <TBFormSelect
                data-testid="game-type-field"
                id="gameSelect"
                name="game"
                label="Game"
                color="secondary"
                options={gamesArray}
                iconStart={
                  <img
                    src={`../../../images/gamesIcons/${game}.png`}
                    alt="game_icon"
                  />
                }
              />
            </Box>
            <Box className={classes.row}>
              <TBFormSelect
                data-testid="format-type-field"
                id="tournamentSelect"
                name="format"
                label="Tournament Format"
                color="secondary"
                description={
                  getSelectOptionProp(tournamentFormatsArray, "value", format)
                    ?.description || ""
                }
                options={tournamentFormatsArray}
                iconStart={
                  <img
                    src={`../../../images/icons/Trophy.png`}
                    alt="trophy_icon"
                  />
                }
              />
            </Box>
            <Box className={classes.row}>
              <TBFormSelect
                data-testid="gameMode-type-field"
                id="gameModeField"
                name="game_format"
                label="Game Mode"
                color="secondary"
                options={gameModesArray}
                iconStart={
                  <img src={`../../../images/icons/Waterfall.png`} alt="icon" />
                }
              />
            </Box>
            <Box className={classes.row}>
              <TBFormTextField
                name="title"
                size="small"
                label="Name"
                color="secondary"
                inputProps={{
                  placeholder: "Tournament name",
                }}
                iconComponent={
                  <img src={`../../../images/icons/Steirs.png`} alt="icon" />
                }
              />
            </Box>
          </Box>
          <Box className={classes.footer}>
            <Divider />
            <SimpleButton
              size="small"
              variant="contained"
              color="primary"
              type="submit"
            >
              Create
            </SimpleButton>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};
