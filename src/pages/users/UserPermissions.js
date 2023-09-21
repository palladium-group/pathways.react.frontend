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
import { assignUserPermissions, getUserPermissionsById } from "../../api/permissions";
import { getAllProjects } from "../../api/project";
import { getUserById } from "../../api/user";

const AssignUserPermissions = () => {
  let { userId } = useParams();
  const { isLoading, data } = useQuery(["getAllProjects"], getAllProjects);
  const { isLoading: isLoadingPermissions, data: dataPermissions } = useQuery(
    ["getUserPermissionsById", userId],
    getUserPermissionsById,
    {
      enabled: !!userId,
    },
  );
  const {
    isLoading: isLoadingUser,
    isError: isErrorUser,
    data: UserData,
  } = useQuery(["getUserById", userId], getUserById, { enabled: !!userId });

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
                    Assign
                    {!isLoadingUser && !isErrorUser ? (
                      <strong> {UserData.data.firstName + " " + UserData.data.lastName} </strong>
                    ) : (
                      ""
                    )}
                    Permissions
                  </Typography>
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {data.data.map((project) => (
                  <Box key={project.id} sx={{ width: "100%" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formik.values.permissions["pj" + project.id] || false}
                          onChange={handleCheckboxChange}
                          name={"pj" + project.id}
                        />
                      }
                      label={project.name + " Home"}
                    />
                    {project.projectLinks.map((projectLink, key) => (
                      <Typography component={"ul"} key={key}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formik.values.permissions["pl" + projectLink.id] || false}
                              onChange={handleCheckboxChange}
                              name={"pl" + projectLink.id}
                            />
                          }
                          label={projectLink.name}
                        />
                      </Typography>
                    ))}
                  </Box>
                ))}
                {/*{restCheckboxes.map((permission) => (*/}
                {/*  <Box key={permission.id} sx={{ width: "33%" }}>*/}
                {/*    <FormControlLabel*/}
                {/*      control={*/}
                {/*        <Checkbox*/}
                {/*          checked={formik.values.permissions[permission.route] || false}*/}
                {/*          onChange={handleCheckboxChange}*/}
                {/*          name={permission.route}*/}
                {/*        />*/}
                {/*      }*/}
                {/*      label={permission.route}*/}
                {/*    />*/}
                {/*  </Box>*/}
                {/*))}*/}
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
      <Helmet title="Assign User Permissions" />
      <Typography variant="h3" gutterBottom display="inline">
        Assign User Permissions
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to={"/admin/users"}>
          Admin
        </Link>
        <Typography>Assign User Permissions</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <AssignUserPermissions />
    </React.Fragment>
  );
};
export default UserPermissions;
