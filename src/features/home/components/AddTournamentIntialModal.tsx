import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SimpleButton } from "../../../Components/UiElements/Buttons/TBButton";
import { useAddTournamentInitialModalClasses } from "./styles/useAddTournamentInitialModalStyles";

import { TBFormTextField } from "../../../Components/TextField";
import { useModal } from "../../Modal/useModal";
import { CreateTournamentBaseModal } from "./CreateTournamenBase";
import { useAddTournamentInitialForm } from "../hooks/useAddTournamentInitialForm";

export const AddTournamentInitialModal: React.FC = () => {
  const classes = useAddTournamentInitialModalClasses();

  const { setModalContent } = useModal();
  const { methods, handleSubmit } = useAddTournamentInitialForm();
  const handleOpenModal = () => {
    setModalContent(<CreateTournamentBaseModal />);
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.modalTitle} component="p">
        <Typography component="span">Create</Typography>
        <Typography component="span">event</Typography>
      </Typography>
      <Typography className={classes.modalSubTitle}>
        Fully automated. Allows for detailed configuration and simple operation.
        Choose a format in the next step.
      </Typography>
      <Box className={classes.imgWrapper}>
        <img src="../../../images/icons/CupsIcon.png" alt="cups_icon" />
      </Box>
      <SimpleButton
        className={classes.btn}
        variant="contained"
        color="secondary"
        onClick={handleOpenModal}
      >
        Create Tournament
      </SimpleButton>

      <FormProvider {...methods}>
        <form className={classes.footerRow} onSubmit={handleSubmit}>
          <TBFormTextField
            name="url"
            label=""
            size="medium"
            color="secondary"
            inputProps={{
              placeholder: "Enter invitation URL",
            }}
          />
          <SimpleButton
            className={classes.footerBtn}
            size="small"
            variant="contained"
            color="primary"
            type="submit"
          >
            JOIN
          </SimpleButton>
        </form>
      </FormProvider>
    </Box>
  );
};
