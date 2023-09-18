import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import { Formik } from "formik";

import { Alert as MuiAlert, Button, TextField as MuiTextField } from "@mui/material";
import { spacing } from "@mui/system";
import { useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

function ResetPassword() {
  const navigate = useNavigate();
  const { setNewPassword } = useAuth();
  const { token } = useParams();

  const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .required("Please enter a password")
          .min(8, "Password must have at least 8 characters")
          .matches(/[0-9]/, getCharacterValidationError("digit"))
          .matches(/[a-z]/, getCharacterValidationError("lowercase"))
          .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
        confirmPassword: Yup.string()
          .required("Please re-type your password")
          .oneOf([Yup.ref("password")], "Passwords does not match"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          setNewPassword(values.password, token);
          navigate("/auth/sign-in");
        } catch (error) {
          const message = error.message || "Something went wrong";

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}>
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          {errors.submit && (
            <Alert mt={2} mb={1} severity="warning">
              {errors.submit}
            </Alert>
          )}
          <TextField
            type="password"
            name="password"
            label="Password"
            value={values.password}
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            onBlur={handleBlur}
            onChange={handleChange}
            my={3}
            autoComplete="new-password"
          />
          <TextField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={values.confirmPassword}
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            fullWidth
            helperText={touched.confirmPassword && errors.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            my={3}
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default ResetPassword;
