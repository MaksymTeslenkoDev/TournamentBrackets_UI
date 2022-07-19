import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Tournament } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { SettingChampFields } from "../components/SettingsChampConfig";
import { useUpdateTournament } from "./useUpdateTournament";
import React from "react";

export const useTournamentDetailsForm = (tournament: Tournament) => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .typeError("Must be a string")
      .required("Tournament title can't be empty"),
  });

  const methods = useForm<SettingChampFields>({
    mode: "onChange",
    defaultValues: {
      title: tournament.title,
      accessType: tournament.accessType,
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleChangeField } = useUpdateTournament(methods);

  const accessType = methods.watch("accessType");

  React.useEffect(() => {
    handleChangeField("accessType");
  }, [accessType]);

  return { methods, handleChangeField, accessType };
};
