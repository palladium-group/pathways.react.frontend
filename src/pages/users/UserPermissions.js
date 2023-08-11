import React, { useEffect } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Helmet } from "react-helmet-async";
import { NavLink, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as yup from "yup";
import {
  assignUserPermissions,
  getAllPermissions,
  getUserPermissionsById,
} from "../../api/permissions";

const AssignUserPermissions = () => {
  let { userId } = useParams();
  const { isLoading, data } = useQuery(["getAllPermissions"], getAllPermissions);
  const { isLoading: isLoadingPermissions, data: dataPermissions } = useQuery(
    ["getUserPermissionsById", userId],
    getUserPermissionsById,
    {
      enabled: !!userId,
    },
  );

  const mutation = useMutation({ mutationFn: assignUserPermissions });
  const formik = useFormik({
    initialValues: {
      permissions: {},
    },
    validationSchema: yup.object().shape({
      permissions: yup.object().required("Please select at least one permission."),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      // Extract the permissions object from values
      const permissions = values.permissions;
      // Get an array of keys with true values from the permissions object
      const trueKeys = Object.keys(permissions).filter((key) => permissions[key] === true);
      const Indata = {
        userId,
        assignedRoutes: trueKeys,
      };
      await mutation.mutateAsync(Indata);
      setSubmitting(false);
    },
  });

  useEffect(() => {
    function setCurrentFormValues() {
      if (dataPermissions) {
        dataPermissions.data.map((perm) => {
          formik.setFieldValue(`permissions.${perm}`, true);
        });
      }
    }
    setCurrentFormValues();
  }, [isLoadingPermissions, dataPermissions]);

  if (isLoading) {
    return "...loading";
  }

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    formik.setFieldValue(`permissions.${name}`, checked);
  };

  const firstCheckbox = data.data.slice(0, 1); // First checkbox in its own row
  const restCheckboxes = data.data.slice(1); // Remaining checkboxes

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
                    Assign User Permissions Form
                  </Typography>
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {firstCheckbox.map((permission) => (
                  <Box key={permission.id} sx={{ width: "100%" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formik.values.permissions[permission.route] || false}
                          onChange={handleCheckboxChange}
                          name={permission.route}
                        />
                      }
                      label={permission.route + "Home"}
                    />
                  </Box>
                ))}
                {restCheckboxes.map((permission) => (
                  <Box key={permission.id} sx={{ width: "33%" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formik.values.permissions[permission.route] || false}
                          onChange={handleCheckboxChange}
                          name={permission.route}
                        />
                      }
                      label={permission.route}
                    />
                  </Box>
                ))}
              </Box>
              <Grid container spacing={2} mt={5}>
                <Grid item md={3}>
                  <Button variant="contained" type="submit">
                    Submit
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

const UserPermissions = () => {
  return (
    <React.Fragment>
      <Helmet title="Assing User Permissions" />
      <Typography variant="h3" gutterBottom display="inline">
        Assing User Permissions
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to={"/admin/users"}>
          Admin
        </Link>
        <Typography>Assing User Permissions</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <AssignUserPermissions />
    </React.Fragment>
  );
};
export default UserPermissions;
