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
          Password Reset Request Sent
        </Typography>
        <Typography component="h2" variant="body1" align="center">
          A password reset message was sent to your email address. Please click on the link in that
          message to reset your password. If you do not receive the password reset message within a
          few moments, please check your spam folder or other filtering tools.
        </Typography>
      </Wrapper>
    </React.Fragment>
  );
};
export default ConfirmPasswordLinkSent;
