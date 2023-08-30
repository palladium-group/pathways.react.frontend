import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import { Formik } from "formik";

import { Alert as MuiAlert, Button, TextField as MuiTextField } from "@mui/material";
import { spacing } from "@mui/system";

import useAuth from "../../hooks/useAuth";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

function ResetPassword() {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
        password: Yup.string()
          .required()
          .min(
            8,
            "Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special",
          )
          .minLowercase(1, "password must contain at least 1 lower case letter")
          .minUppercase(1, "password must contain at least 1 upper case letter")
          .minNumbers(1, "password must contain at least 1 number")
          .minSymbols(1, "password must contain at least 1 special character"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          resetPassword(values.email, values.password);
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
            type="email"
            name="email"
            label="Email Address"
            value={values.email}
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            onBlur={handleBlur}
            onChange={handleChange}
            my={3}
          />
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}>
            Reset password
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default ResetPassword;
