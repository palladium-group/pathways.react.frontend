const getUrl = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return "http://localhost:9090/api/";
  }
  if (window.location.protocol !== "https:") {
    return "https://pathways.dias-is.online/backend/api/";
  }
  return "https://pathways.dias-is.online/backend/api/";
};

// prod Server
const url = getUrl();
export default url;
