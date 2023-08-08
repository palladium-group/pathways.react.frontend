const getUrl = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return "http://localhost:8080/api/";
  }
  if (window.location.protocol !== "https:") {
    return "https://pathways.dias-is.online/backend/api/";
  }
  console.log("https://pathways.dias-is.online/backend/api/");
  return "https://pathways.dias-is.online/backend/api/";
};

// prod Server
const url = getUrl();
export default url;
