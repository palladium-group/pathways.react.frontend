import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Button, Tab, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import * as MuiIcon from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../api/project";
import ProjectTabContent from "./ProjectTabContent";
import { toast } from "react-toastify";

const ContentDataGrid = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { isLoading, isError, data } = useQuery(["getAllProjects"], getAllProjects);
  if (isLoading) {
    return "...loading";
  }
  if (isError) {
    toast("An error occurred", {
      type: "error",
    });
  }

  const getIcon = (iconName) => {
    if (iconName) {
      // const Icon = MuiIcon[iconName];
      // return <Icon />;
    }
    return <div />;
  };
  return (
    <React.Fragment>
      <Card mb={6}>
        <CardContent pb={1}>
          <Button mr={2} variant="contained" onClick={() => navigate("/admin/new-project")}>
            <Add /> New Project
          </Button>
        </CardContent>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                {data.data.map((project, key) => (
                  <Tab
                    icon={getIcon(project.icon)}
                    label={project.name}
                    value={project.id.toString()}
                    key={key}
                  />
                ))}
              </TabList>
            </Box>
            {data.data.map((project, key) => (
              <TabPanel value={project.id.toString()} key={key}>
                <ProjectTabContent projectId={project.id} />
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      </Card>
    </React.Fragment>
  );
};

const ContentManagement = () => {
  return (
    <React.Fragment>
      <Helmet title="Content Management" />
      <Typography variant="h3" gutterBottom display="inline">
        Content Management
      </Typography>
      <ContentDataGrid />
    </React.Fragment>
  );
};
export default ContentManagement;
