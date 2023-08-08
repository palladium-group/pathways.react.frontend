const getUrl = () => {
  console.log(process.env.NODE_ENV);
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return "http://localhost:8080/api/";
  }
  if (window.location.protocol !== "https:") {
    return "http://moz-etl.southafricanorth.cloudapp.azure.com:5002/api/";
  }
  return "https://moz-etl.southafricanorth.cloudapp.azure.com:5001/api/";
};

// prod Server
const url = getUrl();
export default url;
