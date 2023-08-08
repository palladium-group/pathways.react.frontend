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
          title="INOVASI"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/reportEmbed?reportId=a8fc88e9-6677-49c1-bb45-5c542667700e&autoAuth=true&ctid=e7942974-9738-4a4a-b646-2ab90f79db0f"
          frameBorder="0"
          allowFullScreen={true}></iframe>
      </Grid>
    </Grid>
  );
};
export default Finance;
