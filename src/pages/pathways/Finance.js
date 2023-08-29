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
          src="https://app.powerbi.com/view?r=eyJrIjoiYjRiMjlkNDYtNGY4Zi00MGFjLWJkYTctYWNiODQyNDE3YWNiIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&pageName=ReportSection65a564a574790a626c37%22"
          frameBorder="0"
          allowFullScreen={true}></iframe>
      </Grid>
    </Grid>
  );
};
export default Finance;
