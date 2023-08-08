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
          title="KIAT M&E"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/reportEmbed?reportId=aeeca67e-9996-46a2-b6dd-2ad1eb57846c&autoAuth=true&ctid=e7942974-9738-4a4a-b646-2ab90f79db0f"
          frameBorder="0"
          allowFullScreen={true}></iframe>
      </Grid>
    </Grid>
  );
};
export default MonitoringAndEvaluation;
