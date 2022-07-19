import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const useAddTournamentInitialForm = () => {
  const schema = yup.object().shape({
    url: yup.string(),
  });

  const methods = useForm<{ url: string }>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
    window.location.href = data.url;
  });

  return { methods, handleSubmit };
};
