import React from "react";
import { Avatar as MuiAvatar, Divider as MuiDivider, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";

const Divider = styled(MuiDivider)(spacing);

const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 80px;
  width: 80px;
`;

const ContentLeadership = () => {
  return (
    <React.Fragment>
      <Grid container direction="row" alignItems="center" mb={2} spacing={12}>
        <Grid item md={3}>
          <Avatar alt="" src="" />
        </Grid>
        <Grid item md={8} mx={3}>
          <Grid container direction="column" alignItems="left" mb={2}>
            <Grid item>
              <Typography sx={{ fontWeight: 700, fontSize: 18 }}>Bernadette Howlett</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 18 }}>Executive Officer</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
      <Grid container direction="row" alignItems="center" mb={2} spacing={12}>
        <Grid item md={3}>
          <Avatar alt="" src="" />
        </Grid>
        <Grid item md={8} mx={3}>
          <Grid container direction="column" alignItems="left" mb={2}>
            <Grid item>
              <Typography sx={{ fontWeight: 700, fontSize: 18 }}>Sinead Magill</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 18 }}>Executive Officer</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
      <Grid container direction="row" alignItems="center" mb={2} spacing={12}>
        <Grid item md={3}>
          <Avatar alt="" src="" />
        </Grid>
        <Grid item md={8} mx={3}>
          <Grid container direction="column" alignItems="left" mb={2}>
            <Grid item>
              <Typography sx={{ fontWeight: 700, fontSize: 18 }}>Ricardo Michel</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 18 }}>Executive Officer</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
      <Grid container direction="row" alignItems="center" mb={2} spacing={12}>
        <Grid item md={3}>
          <Avatar alt="" src="" />
        </Grid>
        <Grid item md={8} mx={3}>
          <Grid container direction="column" alignItems="left" mb={2}>
            <Grid item>
              <Typography sx={{ fontWeight: 700, fontSize: 18 }}>Jose Maria Ortiz</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 18 }}>Executive Officer</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
    </React.Fragment>
  );
};
export default ContentLeadership;
