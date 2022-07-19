import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const handleCopy = (data: string) => {
  navigator.clipboard.writeText(data);
  toast.info("Copied! ");
};
