import React from "react";
import { Grid } from "@mui/material";

const MonitoringAndEvaluation = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={1}
      alignItems={"stretch"}
      sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe
          title="MAP-TNC"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/reportEmbed?reportId=48b4b5d3-c2dd-48fa-9e81-0ceaedb5bb96&autoAuth=true&ctid=e7942974-9738-4a4a-b646-2ab90f79db0f"
          frameBorder="0"
          allowFullScreen={true}></iframe>
      </Grid>
    </Grid>
  );
};
export default MonitoringAndEvaluation;
