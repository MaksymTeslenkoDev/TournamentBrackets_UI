import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Divider } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TBFormSelect } from "../../../Components/UiElements/Select/TBSelect";
import {
  accessTypesOptinsArray,
  gamesArray,
  Tournament,
  TournamentAccessType,
} from "../../Tournament/state/types";
import { TournamentModalTitle } from "./ModalTitle";
import { useCreateTournamentBaseModalStyles } from "./styles/useCreateTournamentBaseStyles";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { SimpleButton } from "../../../Components/UiElements/Buttons/TBButton";
import { useQueryTournamentsList } from "../../Tournament/hooks/useFindTournamentsList";

export type TournamentsList = Pick<Tournament, "game" | "accessType">;
export const FindTournamentModal: React.FC = () => {
  const classes = useCreateTournamentBaseModalStyles();
  const methods = useForm<TournamentsList>({
    mode: "onChange",
    defaultValues: {
      game: gamesArray[0].value,
      accessType: TournamentAccessType.public,
    },
  });
  const { handleSearchSubmit } = useQueryTournamentsList();
  const handleSubmitSearch = methods.handleSubmit(handleSearchSubmit);

  const { watch } = methods;
  const [game] = watch(["game"]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={() => {}}>
        <Box className={classes.root}>
          <TournamentModalTitle first="Find" second="Event" />

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
                data-testid="accessType-type-field"
                id="accessType"
                name="accessType"
                label="Access Type"
                color="secondary"
                options={accessTypesOptinsArray}
                iconStart={<FontAwesomeIcon icon={faKey} />}
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
              onClick={handleSubmitSearch}
            >
              Find
            </SimpleButton>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};
