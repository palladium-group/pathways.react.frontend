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
          src="https://app.powerbi.com/view?r=eyJrIjoiY2Y4ZDQ2YWYtYTI5OC00ODQ1LWE0NmMtZWFiNzU2MTc1MDZiIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&pageName=ReportSection940f31f05eb0cc7340d4"
          frameBorder="0"
          allowFullScreen={true}></iframe>
      </Grid>
    </Grid>
  );
};
export default Finance;
