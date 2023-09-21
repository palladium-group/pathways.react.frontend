import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const getAllProjects = async () => {
  return await axios.get(`${apiRoutes.project}`);
};

export const newProject = async (values) => {
  return await axios.post(`${apiRoutes.project}`, values);
};

export const getProjectById = async ({ queryKey }) => {
  const [, projectId] = queryKey;
  return await axios.get(`${apiRoutes.project}/getProjectById/${projectId}`);
};

export const updateProject = async (values) => {
  return await axios.post(`${apiRoutes.project}/update`, values);
};

export const getProjectLinksByProjectId = async ({ queryKey }) => {
  const [, projectId] = queryKey;
  return await axios.get(`${apiRoutes.projectLinks}/getProjectLinks/${projectId}`);
};

export const newProjectLink = async (values) => {
  return await axios.post(`${apiRoutes.projectLinks}`, values);
};

export const updateProjectLink = async (values) => {
  return await axios.post(`${apiRoutes.projectLinks}/update`, values);
};

export const getProjectLinkById = async ({ queryKey }) => {
  const [, projectLinkId] = queryKey;
  return await axios.get(`${apiRoutes.projectLinks}/getProjectLinkById/${projectLinkId}`);
};

export const deleteProjectLinkById = async ({ queryKey }) => {
  const [, projectLinkId] = queryKey;
  return await axios.delete(`${apiRoutes.projectLinks}/delete/${projectLinkId}`);
};
