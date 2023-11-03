const getUrl = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return "http://localhost:9090/api/";
  }
  if (window.location.protocol !== "https:") {
    return "https://thepalladiumgateway.com/backend/api/";
  }
  return "https://thepalladiumgateway.com/backend/api/";
};

// prod Server
const url = getUrl();
export default url;
