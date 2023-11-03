import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

import { Box, CssBaseline, Paper as MuiPaper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { spacing } from "@mui/system";

import GlobalStyle from "../components/GlobalStyle";
import Navbar from "../components/navbar/Navbar";
// import dashboardItems from "../components/sidebar/dashboardItems";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
// import { getUserPermissions } from "../api/user";
// import useAuth from "../hooks/useAuth";
import { getAllProjects } from "../api/project";
import * as MuiIcon from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import { toast } from "react-toastify";
import { getUserPermissions } from "../api/user";
import useKeyCloakAuth from "../hooks/useKeyCloakAuth";
// import Settings from "../components/Settings";

const drawerWidth = 258;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Drawer = styled.div`
  ${(props) => props.theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

const Dashboard = ({ children }) => {
  const [navItems, setNavItems] = useState([
    {
      title: "home",
      pages: [
        {
          title: "Home",
          name: "home",
          href: "/",
          icon: HomeOutlinedIcon,
          backgroundcolor: "#000000",
        },
      ],
    },
  ]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = useKeyCloakAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const {
    isLoading: isLoadingProject,
    isError: isErrorProject,
    data: ProjectsData,
  } = useQuery(["getAllProjects"], getAllProjects, {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
  const { data, isLoading } = useQuery(["getUserPermissions", user.sub], getUserPermissions);
  useEffect(() => {
    if (!isErrorProject && !isLoadingProject) {
      const links = ProjectsData.data;
      for (const link of links) {
        const Icon = MuiIcon[link.icon];
        const children = [];
        if (link.projectLinks.length > 0) {
          for (const projectLink of link.projectLinks) {
            children.push({
              title: projectLink.name,
              name: "pl" + projectLink.id,
              href: `/universal-route/home/${projectLink.id}`,
              backgroundcolor: projectLink.color,
            });
          }
        }
        const newItem = {
          title: link.name,
          pages: [
            {
              title: link.name,
              name: "pj" + link.id,
              href: "/universal-route/home",
              icon: Icon,
              backgroundcolor: link.color,
              children: children,
            },
          ],
        };
        setNavItems((prevArray) => {
          // Check if newItem is already in the array
          if (!prevArray.some((item) => item.title === newItem.title)) {
            // If it's not in the array, add it
            return [...prevArray, newItem];
          }
          // If it's already in the array, return the previous array as is
          return prevArray;
        });
      }
      setNavItems((prevArray) => {
        // Check if an item with title "Administration" already exists in the array
        const isAdminAlreadyAdded = prevArray.some((item) => item.title === "Administration");
        // If it doesn't exist, add it
        if (!isAdminAlreadyAdded) {
          return [
            ...prevArray,
            {
              title: "Administration",
              name: "",
              pages: [
                {
                  title: "Administration",
                  name: "",
                  href: "/admin",
                  icon: SupervisorAccountOutlinedIcon,
                  children: [
                    {
                      title: "Users",
                      name: "",
                      href: "/admin/users",
                    },
                    {
                      title: "Content Management",
                      name: "",
                      href: "/admin/content-management",
                    },
                    {
                      title: "Projects",
                      name: "",
                      href: "/admin/projects",
                    },
                  ],
                },
              ],
            },
          ];
        }

        // If it already exists, return the previous array as is
        return prevArray;
      });
    }
  }, [isLoadingProject, isErrorProject]);
  if (isErrorProject) {
    toast("An error occurred", {
      type: "error",
    });
  }
  // Function to check if the user has permission to access a route
  const hasPermission = (route) => {
    if (route === "home") {
      return true;
    }
    const userPermissions = isLoading ? [] : data.data;
    const permissions = userPermissions.filter((obj) => obj === route);
    if (permissions && permissions.length > 0) {
      // Check if the user has at least one of the required permissions
      return true; // You can modify this logic as needed based on your use case
    }
    // If user's permissions are not specified, deny access by default
    return false;
  };

  // Recursive function to filter pages and their children based on user permissions
  const filterPagesWithPermission = (pages) => {
    return pages.reduce((filteredPages, page) => {
      if (hasPermission(page.name)) {
        const filteredChildren = page.children ? filterPagesWithPermission(page.children) : null;
        const filteredPage = filteredChildren ? { ...page, children: filteredChildren } : page;
        filteredPages.push(filteredPage);
      }
      return filteredPages;
    }, []);
  };

  // Filter the dashboardItems based on user's permissions
  const filteredDashboardItems = navItems.map((item) => {
    const pagesWithPermission = filterPagesWithPermission(item.pages);
    return { ...item, pages: pagesWithPermission };
  });
  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <Drawer>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            items={
              user && user?.roles?.length > 0 && user?.roles?.includes("ADMIN")
                ? navItems
                : filteredDashboardItems
            }
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            items={
              user && user?.roles?.length > 0 && user?.roles?.includes("ADMIN")
                ? navItems
                : filteredDashboardItems
            }
          />
        </Box>
      </Drawer>
      <AppContent>
        <Navbar onDrawerToggle={handleDrawerToggle} />
        <MainContent p={isLgUp ? 12 : 5}>
          {children}
          <Outlet />
        </MainContent>
        <Footer />
      </AppContent>
      {/* <Settings /> */}
    </Root>
  );
};

export default Dashboard;
