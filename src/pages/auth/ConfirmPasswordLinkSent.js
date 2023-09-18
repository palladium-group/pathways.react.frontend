import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";

import { Paper, Typography } from "@mui/material";

import { ReactComponent as Logo } from "../../vendor/logo.svg";

const Brand = styled(Logo)`
  fill: ${(props) => props.theme.palette.primary.main};
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
`;

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const ConfirmPasswordLinkSent = () => {
  return (
    <React.Fragment>
      <Brand />
      <Wrapper>
        <Helmet title="Forgot Password Confirmation" />

        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Forgot Password Confirmation
        </Typography>
        <Typography component="h2" variant="body1" align="center">
          A link to reset your account password has been sent, please check your email to reset your
          password.
        </Typography>
      </Wrapper>
    </React.Fragment>
  );
};
export default ConfirmPasswordLinkSent;
