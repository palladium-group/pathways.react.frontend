import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import {
  Box,
  Breadcrumbs,
  Button,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Save } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserById } from "../../api/user";
import { updateRegisterUser } from "../../api/auth";

const UpdateRegisterUserForm = () => {
  let { userId } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery(["getUserById", userId], getUserById, {
    refetchOnWindowFocus: false,
    enabled: !!userId,
  });
  const mutation = useMutation({ mutationFn: updateRegisterUser });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        values.userId = userId;
        await mutation.mutateAsync(values);
        toast("Successfully Updated User", {
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

  useEffect(() => {
    if (data) {
      formik.setValues({
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        email: data.data.email,
      });
    }
  }, [data, isLoading, isError]);
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
                    Update User Form
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
                    disabled={true}
                  />
                </Grid>
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
const UpdateRegisterUser = () => {
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
      <UpdateRegisterUserForm />
    </React.Fragment>
  );
};

export default UpdateRegisterUser;
