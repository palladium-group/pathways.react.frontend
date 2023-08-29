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
          src="https://app.powerbi.com/view?r=eyJrIjoiYTBmMjhjMWEtNDk0NS00MTljLTk0MzQtYTI2NTIwMjJmODE0IiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9%22"
          frameBorder="0"
          allowFullScreen={true}></iframe>
      </Grid>
    </Grid>
  );
};
export default MonitoringAndEvaluation;
