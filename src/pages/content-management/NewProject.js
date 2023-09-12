import React from "react";
import { Helmet } from "react-helmet-async";
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
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import { Save } from "@mui/icons-material";
import { useMutation } from "@tanstack/react-query";
import { newProject } from "../../api/project";

const NewProjectForm = () => {
  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: newProject });
  const formik = useFormik({
    initialValues: {
      name: "",
      icon: "",
      color: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      icon: Yup.string().required("Required"),
      color: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        console.log(values);
        await mutation.mutateAsync(values);
        toast("Successfully Registered User", {
          type: "success",
        });
        setSubmitting(false);
        resetForm();
        navigate("/admin/content-management");
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
                    New Project Form
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item md={12}>
                  <TextField
                    name="name"
                    label="Project Name"
                    value={formik.values.name}
                    error={Boolean(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    name="icon"
                    label="Project Icon"
                    value={formik.values.icon}
                    error={Boolean(formik.touched.icon && formik.errors.icon)}
                    fullWidth
                    helperText={formik.touched.icon && formik.errors.icon}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    name="color"
                    label="Project Color"
                    value={formik.values.color}
                    error={Boolean(formik.touched.color && formik.errors.color)}
                    fullWidth
                    helperText={formik.touched.color && formik.errors.color}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
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

const NewProject = () => {
  return (
    <React.Fragment>
      <Helmet title="New Project" />
      <Typography variant="h3" gutterBottom display="inline">
        New Project
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to={"/admin/content-management"}>
          Admin
        </Link>
        <Typography>Content Management</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <NewProjectForm />
    </React.Fragment>
  );
};
export default NewProject;
