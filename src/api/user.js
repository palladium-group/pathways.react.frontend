import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const getUsers = async () => {
  return await axios.get(`${apiRoutes.user}/all`);
};

export const getUserById = async ({ queryKey }) => {
  const [, userId] = queryKey;
  return await axios.get(`${apiRoutes.user}/get/${userId}`);
};

export const getUserPermissions = async ({ queryKey }) => {
  const [, sub] = queryKey;
  return await axios.get(`${apiRoutes.user}/user-permissions/${sub}`);
};
