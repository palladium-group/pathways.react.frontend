import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button, Paper, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { Add } from "@mui/icons-material";
import Card from "@mui/material/Card";
import { NavLink, useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Edit2 } from "react-feather";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../api/project";

const ProjectsDataGrid = () => {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);
  const { isLoading, isError, data } = useQuery(["getAllProjects"], getAllProjects);
  if (isLoading) {
    return "...loading";
  }
  if (isError) {
    return "...error";
  }
  return (
    <React.Fragment>
      <Card mb={6}>
        <CardContent pb={1}>
          <Button mr={2} variant="contained" onClick={() => navigate("/admin/new-project")}>
            <Add /> New Project
          </Button>
        </CardContent>
        <br />
        <Paper>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rowsPerPageOptions={[5, 10, 25]}
              rows={isLoading || isError ? [] : data ? data.data : []}
              columns={[
                {
                  field: "name",
                  headerName: "Project Name",
                  editable: false,
                  flex: 1,
                },
                {
                  field: "icon",
                  headerName: "Project Icon",
                  editable: false,
                  flex: 1,
                },
                {
                  field: "color",
                  headerName: "Project Color",
                  editable: false,
                  flex: 1,
                },
                {
                  field: "action",
                  headerName: "Action",
                  sortable: false,
                  flex: 1,
                  renderCell: (params) => (
                    <>
                      <NavLink to={`/admin/new-project/${params.id}`}>
                        <Button startIcon={<Edit2 />} size="small"></Button>
                      </NavLink>
                      {/*<Button*/}
                      {/*  startIcon={<TrashIcon />}*/}
                      {/*  size="small"*/}
                      {/*  onClick={() => handleClickOpen(params.id)}*/}
                      {/*></Button>*/}
                    </>
                  ),
                },
              ]}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              loading={isLoading}
              components={{ Toolbar: GridToolbar }}
              getRowHeight={() => "auto"}
            />
          </div>
        </Paper>
      </Card>
    </React.Fragment>
  );
};

const Projects = () => {
  return (
    <React.Fragment>
      <Helmet title="Projects" />
      <Typography variant="h3" gutterBottom display="inline">
        Projects
      </Typography>
      <ProjectsDataGrid />
    </React.Fragment>
  );
};
export default Projects;
