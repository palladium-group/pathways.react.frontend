import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProjectLinksByProjectId } from "../../api/project";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Paper } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Add as AddIcon } from "@mui/icons-material";
import { Edit2 } from "react-feather";
import { NavLink, useNavigate } from "react-router-dom";

const ProjectTabContent = ({ projectId }) => {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);
  const { isError, isLoading, data } = useQuery(
    ["getProjectLinksByProjectId", projectId],
    getProjectLinksByProjectId,
    { enabled: !!projectId },
  );
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
          <Button
            mr={2}
            variant="contained"
            color="error"
            onClick={() => navigate(`/admin/new-project-link/${projectId}`)}>
            <AddIcon /> New Project Link
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
                  headerName: "Name",
                  editable: false,
                  flex: 1,
                },
                {
                  field: "url",
                  headerName: "PowerBI URL",
                  editable: false,
                  flex: 1,
                },
                {
                  field: "color",
                  headerName: "Color",
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
                      <NavLink to={`/admin/new-project-link/${projectId}/${params.id}`}>
                        <Button startIcon={<Edit2 />} size="small"></Button>
                      </NavLink>
                      {/*<Button*/}
                      {/*  startIcon={<TrashIcon />}*/}
                      {/*  size="small"*/}
                      {/*  onClick={() => handleClickOpen(params.id)}></Button>*/}
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
export default ProjectTabContent;
