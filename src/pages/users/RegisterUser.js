import React from "react";
import {
  Breadcrumbs,
  Divider,
  Link,
  Typography,
  Card,
  CardContent,
  Box,
  CircularProgress,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Save } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/auth";

const RegisterUserForm = () => {
  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: registerUser });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      // password: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      // password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        values.username = values.email;
        await mutation.mutateAsync(values);
        toast("Successfully Registered User", {
          type: "success",
        });
        setSubmitting(false);
        resetForm();
        navigate("/admin/users");
      } catch (error) {
        toast(error.response.data, {
          type: "error",
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card mb={12}>
        <CardContent>
          {formik.isSubmitting ? (
            <Box display={"flex"} justifyContent={"center"} my={6}>
              <CircularProgress />
            </Box>
          ) : (
            <React.Fragment>
              <Grid container spacing={12}>
                <Grid item md={12}>
                  <Typography variant="h3" gutterBottom display={"inline"}>
                    Register User Form
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item md={6}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    value={formik.values.firstName}
                    error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                    fullWidth
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    value={formik.values.lastName}
                    error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                    fullWidth
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
                {/*<Grid item md={6}>*/}
                {/*  <TextField*/}
                {/*    name="password"*/}
                {/*    label="Password"*/}
                {/*    value={formik.values.password}*/}
                {/*    error={Boolean(formik.touched.password && formik.errors.password)}*/}
                {/*    fullWidth*/}
                {/*    helperText={formik.touched.password && formik.errors.password}*/}
                {/*    onBlur={formik.handleBlur}*/}
                {/*    onChange={formik.handleChange}*/}
                {/*    variant="outlined"*/}
                {/*    my={2}*/}
                {/*    type="password"*/}
                {/*    autoComplete="off"*/}
                {/*  />*/}
                {/*</Grid>*/}
                <Grid item md={12}>
                  <Button type="submit" variant="contained" color="primary" mt={3}>
                    <Save /> Save Changes
                  </Button>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        </CardContent>
      </Card>
    </form>
  );
};

const RegisterUser = () => {
  return (
    <React.Fragment>
      <Helmet title="Register User" />
      <Typography variant="h3" gutterBottom display="inline">
        Register Users
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to={"/admin/users"}>
          Admin
        </Link>
        <Typography>Register User</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <RegisterUserForm />
    </React.Fragment>
  );
};
export default RegisterUser;
