const protocol = window.location.protocol;
const hostname = window.location.hostname;
const path = protocol + "//" + hostname;
export const apiRoutes = {
  //User
  user: `${path}${process.env.REACT_APP_BACKEND}/api/user`,
  auth: `${path}${process.env.REACT_APP_BACKEND}/api/auth`,
  permission: `${path}${process.env.REACT_APP_BACKEND}/api/permission`,
};
