import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProjectLinkById, getProjectLinksByProjectId } from "../../api/project";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Add as AddIcon } from "@mui/icons-material";
import { Edit2, Trash as TrashIcon } from "react-feather";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProjectTabContent = ({ projectId }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState();
  const { isError, isLoading, data, error } = useQuery(
    ["getProjectLinksByProjectId", projectId],
    getProjectLinksByProjectId,
    { enabled: !!projectId },
  );
  const { refetch } = useQuery(["deleteProjectLinkById", id], deleteProjectLinkById, {
    enabled: false,
  });
  if (isError) {
    toast(error.response.data, {
      type: "error",
    });
  }
  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteProjectLink = async () => {
    await refetch();
    setOpen(false);
    await queryClient.invalidateQueries(["getProjectLinksByProjectId"]);
  };
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
                      <Button
                        startIcon={<TrashIcon />}
                        size="small"
                        onClick={() => handleClickOpen(params.id)}></Button>
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
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">Delete Project Link</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete Project Link?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteProjectLink} color="primary">
                Yes
              </Button>
              <Button onClick={handleClose} color="error" autoFocus>
                No
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </Card>
    </React.Fragment>
  );
};
export default ProjectTabContent;
