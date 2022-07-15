import React from "react";
import { Box } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginUser } from "../User/types";
import { useFormStyles } from "../../Components/Auth/styles/useFormStyles";
import { TBFormTextField } from "../../Components/TextField";
import { SimpleButton } from "../../Components/UiElements/Buttons/TBButton";
import { LoadStatus } from "../../types";
import { useLogin } from "./useLogin";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Required"),
  password: yup.string().required("Please Enter your password"),
});

export const LoginForm: React.FC = () => {
  const methods = useForm<LoginUser>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const classes = useFormStyles();
  const { status, handleSubmit } = useLogin(methods);

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
            Login
          </SimpleButton>
        </Box>
      </form>
    </FormProvider>
  );
};
