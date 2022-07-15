import { Box } from "@material-ui/core";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "../User/types";
import { TBFormTextField } from "../../Components/TextField";
import { SimpleButton } from "../../Components/UiElements/Buttons/TBButton";
import { useFormStyles } from "../../Components/Auth/styles/useFormStyles";
import { useSignUp } from "./useSignUp";
import { LoadStatus } from "../../types";

const schema = yup.object().shape({
  name: yup.string().required("Please Enter your name").required(),
  email: yup.string().email("Invalid email format").required("Required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export const SignUpForm: React.FC = () => {
  const methods = useForm<User>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const classes = useFormStyles();
  const { status, handleSubmit } = useSignUp(methods);

  if (status === LoadStatus.loading) {
    return <Box>Loading ...</Box>;
  }

  return (
    <FormProvider {...methods}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Box className={classes.fieldWrapper}>
          <TBFormTextField
            name="email"
            required
            label="Email"
            inputProps={{
              type: "email",
              placeholder: "Your email",
              autoComplete: "on",
            }}
          />
        </Box>
        <Box className={classes.fieldWrapper}>
          <TBFormTextField
            name="name"
            required
            label="User Name"
            inputProps={{ placeholder: " Name ", autoComplete: "on" }}
          />
        </Box>
        <Box className={classes.fieldWrapper}>
          <TBFormTextField
            name="password"
            required
            label="Password"
            inputProps={{
              type: "password",
              placeholder: "Secure",
              autoComplete: "on",
            }}
          />
        </Box>
        <Box className={classes.footer}>
          <SimpleButton type="submit" variant="contained" color="secondary">
            Register
          </SimpleButton>
        </Box>
      </form>
    </FormProvider>
  );
};
