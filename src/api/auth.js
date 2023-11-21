import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const registerUser = async (values) => {
  return await axios.post(`${apiRoutes.user}/register`, values);
};

export const updateRegisterUser = async (values) => {
  return await axios.post(`${apiRoutes.auth}/update-user`, values);
};
