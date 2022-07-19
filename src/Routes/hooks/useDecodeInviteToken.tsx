import { useHistory } from "react-router-dom";
import * as api from "../../Apis/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useDecodeInviteToken = (token: string) => {
  const history = useHistory();

  const decode = async () => {
    try {
      const res = await api.makePostRequest<
        { token: string },
        { id: number; game: string }
      >("/tournaments/decodeInviteStr", {
        token,
      });

      return res;
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
        history.push("/");
      }
    }
  };

  return { decode };
};
