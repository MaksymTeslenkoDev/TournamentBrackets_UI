import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Tournament } from "../state/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { SettingChampFields } from "../components/tournamentInfoPage/settingsTab/SettingsChampConfig";
import { useUpdateTournament } from "./useUpdateTournament";

export const useTournamentDetailsForm = (tournament: Tournament) => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .typeError("Must be a string")
      .required("Tournament title can't be empty"),
    password: yup.string().required("Field can't be empty"),
  });

  const methods = useForm<SettingChampFields>({
    mode: "onChange",
    defaultValues: {
      title: tournament.title,
      accessType: tournament.accessType,
      password: tournament.password,
    },
    resolver: yupResolver(schema),
  });

  const { handleChangeField } = useUpdateTournament(methods);

  const accessType = methods.watch("accessType");

  const handleSubmitChangePassword = methods.handleSubmit(async (data) => {
    handleChangeField("accessType");
    handleChangeField("password");
  });

  return { methods, handleChangeField, accessType, handleSubmitChangePassword };
};
