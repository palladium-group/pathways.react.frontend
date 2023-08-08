import React from "react";
import { Grid } from "@mui/material";

const Finance = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={1}
      alignItems={"stretch"}
      sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe
          title="Pathways Dashboard"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/reportEmbed?reportId=afb70c88-5ae7-4a16-a49d-0ef7aec4f5fe&autoAuth=true&ctid=e7942974-9738-4a4a-b646-2ab90f79db0f"
          frameBorder="0"
          allowFullScreen={true}></iframe>
      </Grid>
    </Grid>
  );
};
export default Finance;
