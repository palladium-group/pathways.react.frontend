import React, { useEffect } from "react";
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
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import { Save } from "@mui/icons-material";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getProjectById,
  getProjectLinkById,
  newProjectLink,
  updateProjectLink,
} from "../../api/project";

const NewProjectLinkForm = () => {
  let { projectId, projectLinkId } = useParams();
  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: newProjectLink });
  const updateMutation = useMutation({ mutationFn: updateProjectLink });
  const { isLoading, isError, data } = useQuery(
    ["getProjectLinkById", projectLinkId],
    getProjectLinkById,
    { enabled: !!projectLinkId },
  );
  const formik = useFormik({
    initialValues: {
      name: "",
      url: "",
      color: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      url: Yup.string().required("Required"),
      color: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        values.projectId = projectId;
        if (projectLinkId) {
          values.projectLinkId = projectLinkId;
          await updateMutation.mutateAsync(values);
        } else {
          await mutation.mutateAsync(values);
        }
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
  useEffect(() => {
    if (!isLoading && !isError) {
      formik.setValues({
        name: data.data.name,
        url: data.data.url,
        color: data.data.color,
      });
    }
  }, [isLoading, isError, data]);
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
                  <Typography variant="h3" gutterBottom>
                    New Project Link Form
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item md={12}>
                  <TextField
                    name="name"
                    label="Link Name"
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
                    name="url"
                    label="Power BI URL"
                    value={formik.values.url}
                    error={Boolean(formik.touched.url && formik.errors.url)}
                    fullWidth
                    helperText={formik.touched.url && formik.errors.url}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    name="color"
                    label="Background Color"
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

const NewProjectLink = () => {
  let { projectId } = useParams();
  const { isLoading: isLoadingProject, data: ProjectData } = useQuery(
    ["getProjectById", projectId],
    getProjectById,
    { enabled: !!projectId },
  );
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
        <Typography>{!isLoadingProject ? ProjectData.data.name : ""}</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <NewProjectLinkForm />
    </React.Fragment>
  );
};
export default NewProjectLink;
