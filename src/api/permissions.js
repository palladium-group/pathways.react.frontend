import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const getAllPermissions = async () => {
  return await axios.get(`${apiRoutes.permission}`);
};

export const assignUserPermissions = async (values) => {
  return await axios.post(`${apiRoutes.permission}/assign-user-permissions`, values);
};

export const getUserPermissionsById = async ({ queryKey }) => {
  const [, userId] = queryKey;
  return await axios.get(`${apiRoutes.permission}/getUserPermissionsById/${userId}`);
};
