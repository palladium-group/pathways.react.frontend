import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const registerUser = async (values) => {
  return await axios.post(`${apiRoutes.auth}/register`, values);
};
