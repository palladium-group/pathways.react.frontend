import React from "react";
import { Helmet } from "react-helmet-async";
import { Button, Card, CardContent, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/user";
import UserDataActions from "./UserDataActions";

const UsersDataGrid = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery(["getUsers"], getUsers);
  if (isLoading) {
    return "...loading";
  }

  if (isError) {
    return "...error";
  }

  const actionLink = (params) => {
    return <UserDataActions params={params} />;
  };

  return (
    <React.Fragment>
      <Card mb={6}>
        <CardContent pb={1}>
          <Button mr={2} variant="contained" onClick={() => navigate("/admin/register-user")}>
            <Add /> New User
          </Button>
        </CardContent>
        <Paper mt={5}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rowsPerPageOptions={[5, 10, 25]}
              rows={isLoading || isError ? [] : data ? data.data : []}
              getRowId={(row) => row.id}
              columns={[
                {
                  field: "firstName",
                  headerName: "First Name",
                  editable: false,
                  flex: 1,
                },
                {
                  field: "lastName",
                  headerName: "Last Name",
                  editable: false,
                  flex: 1,
                },
                {
                  field: "email",
                  headerName: "Email",
                  editable: false,
                  flex: 1,
                },
                {
                  field: "action",
                  headerName: "Action",
                  sortable: false,
                  editable: false,
                  flex: 1,
                  renderCell: (params) => {
                    return actionLink(params);
                  },
                },
              ]}
            />
          </div>
        </Paper>
      </Card>
    </React.Fragment>
  );
};

const Users = () => {
  return (
    <React.Fragment>
      <Helmet title="Users" />
      <Typography variant="h3" gutterBottom display="inline">
        Users
      </Typography>
      <UsersDataGrid />
    </React.Fragment>
  );
};
export default Users;
