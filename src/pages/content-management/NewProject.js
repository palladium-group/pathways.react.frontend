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
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import { Save } from "@mui/icons-material";
import * as MuiIcon from "@mui/icons-material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProjectById, newProject, updateProject } from "../../api/project";
import { MuiColorInput } from "mui-color-input";

// Create an array of all available MUI icons
const allMuiIcons = Object.keys(MuiIcon);

const NewProjectForm = () => {
  const [value, setValue] = React.useState("");
  let { projectId } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery(["getProjectById", projectId], getProjectById, {
    enabled: !!projectId,
  });
  const mutation = useMutation({ mutationFn: newProject });
  const updateMutation = useMutation({ mutationFn: updateProject });
  const formik = useFormik({
    initialValues: {
      name: "",
      icon: "",
      color: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      icon: Yup.string().required("Required"),
      color: Yup.string(),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        if (projectId) {
          values.projectId = projectId;
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
  function rgbToHex(rgb) {
    const matches = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    if (!matches) {
      throw new Error("Invalid RGB format");
    }

    const r = parseInt(matches[1]);
    const g = parseInt(matches[2]);
    const b = parseInt(matches[3]);

    const redHex = r.toString(16).padStart(2, "0");
    const greenHex = g.toString(16).padStart(2, "0");
    const blueHex = b.toString(16).padStart(2, "0");

    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return hexColor;
  }
  useEffect(() => {
    if (!isLoading && !isError) {
      formik.setValues({
        name: data.data.name,
        icon: data.data.icon,
        color: data.data.color,
      });
      setValue(data.data.color);
    }
  }, [isLoading, isError, data]);
  const handleChange = (newValue) => {
    formik.setFieldValue("color", rgbToHex(newValue));
    setValue(rgbToHex(newValue));
  };
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
                  <Select
                    name="icon"
                    label="Project Icon"
                    value={formik.values.icon}
                    error={Boolean(formik.touched.icon && formik.errors.icon)}
                    fullWidth
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}>
                    {/* Render MenuItem for each MUI icon */}
                    {allMuiIcons.map((iconName, index) => {
                      const Icon = MuiIcon[iconName];
                      return (
                        <MenuItem key={index} value={iconName}>
                          <Icon /> {iconName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {/* Display the selected icon */}
                  {/*<TextField*/}
                  {/*  name="icon"*/}
                  {/*  label="Project Icon"*/}
                  {/*  value={formik.values.icon}*/}
                  {/*  error={Boolean(formik.touched.icon && formik.errors.icon)}*/}
                  {/*  fullWidth*/}
                  {/*  helperText={formik.touched.icon && formik.errors.icon}*/}
                  {/*  onBlur={formik.handleBlur}*/}
                  {/*  onChange={formik.handleChange}*/}
                  {/*  variant="outlined"*/}
                  {/*  my={2}*/}
                  {/*/>*/}
                </Grid>
                <Grid item md={12}>
                  <MuiColorInput value={value} onChange={handleChange} />
                  {/*<TextField*/}
                  {/*  name="color"*/}
                  {/*  label="Project Color"*/}
                  {/*  value={formik.values.color}*/}
                  {/*  error={Boolean(formik.touched.color && formik.errors.color)}*/}
                  {/*  fullWidth*/}
                  {/*  helperText={formik.touched.color && formik.errors.color}*/}
                  {/*  onBlur={formik.handleBlur}*/}
                  {/*  onChange={formik.handleChange}*/}
                  {/*  variant="outlined"*/}
                  {/*  my={2}*/}
                  {/*/>*/}
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
