import React from "react";

import async from "./components/Async";

// All pages that rely on 3rd party components (other than MUI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";
// import DocLayout from "./layouts/Doc";
// import HomeLayout from "./layouts/HomeLayout";
// import PresentationLayout from "./layouts/Presentation";

// Guards
import AuthGuard from "./components/guards/AuthGuard";
import SignIn from "./pages/auth/SignIn";

// Auth components
import Page404 from "./pages/auth/Page404";
import Page500 from "./pages/auth/Page500";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ConfirmPasswordLinkSent from "./pages/auth/ConfirmPasswordLinkSent";

// Landing
// import Landing from "./pages/presentation/Landing";

const Home = async(() => import("./pages/home"));

// Pathways
const PathwaysFinance = async(() => import("./pages/pathways/Finance"));
const PathwaysMonitoringAndEvaluation = async(() =>
  import("./pages/pathways/MonitoringAndEvaluation"),
);
// Kiat
const KiatFinance = async(() => import("./pages/kiat/Finance"));
const KiatMonitoringAndEvaluation = async(() => import("./pages/kiat/MonitoringAndEvaluation"));
// Inovasi
const InovasiFinance = async(() => import("./pages/inovasi/Finance"));
const InovasiMonitoringAndEvaluation = async(() =>
  import("./pages/inovasi/MonitoringAndEvaluation"),
);
//Nauru
const NauruMonitoringAndEvaluation = async(() => import("./pages/nauru/MonitoringAndEvaluation"));
//Map TNC
const MapTNCMonitoringAndEvaluation = async(() =>
  import("./pages/map-tnc/MonitoringAndEvaluation"),
);
const MapTNCFinance = async(() => import("./pages/map-tnc/Finance"));
//Administration
const Users = async(() => import("./pages/users/index"));
const RegisterUser = async(() => import("./pages/users/RegisterUser"));
const UserPermissions = async(() => import("./pages/users/UserPermissions"));
const UpdateRegisterUser = async(() => import("./pages/users/UpdateRegisterUser"));
//Content Management
const ContentManagement = async(() => import("./pages/content-management/index"));
const NewProject = async(() => import("./pages/content-management/NewProject"));
const NewProjectLink = async(() => import("./pages/content-management/NewProjectLink"));
const UniversalComponent = async(() => import("./pages/content-management/UniversalComponent"));
const Projects = async(() => import("./pages/content-management/Projects"));

const routes = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "universal-route",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "home/:projectLinkId",
        element: <UniversalComponent />,
      },
    ],
  },
  {
    path: "pathways",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "finance",
        element: <PathwaysFinance />,
      },
      {
        path: "monitoring-evaluation",
        element: <PathwaysMonitoringAndEvaluation />,
      },
    ],
  },
  {
    path: "kiat",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "finance",
        element: <KiatFinance />,
      },
      {
        path: "monitoring-evaluation",
        element: <KiatMonitoringAndEvaluation />,
      },
    ],
  },
  {
    path: "inovasi",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "finance",
        element: <InovasiFinance />,
      },
      {
        path: "monitoring-evaluation",
        element: <InovasiMonitoringAndEvaluation />,
      },
    ],
  },
  {
    path: "nauru",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "monitoring-evaluation",
        element: <NauruMonitoringAndEvaluation />,
      },
    ],
  },
  {
    path: "map-tnc",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "finance",
        element: <MapTNCFinance />,
      },
      {
        path: "monitoring-evaluation",
        element: <MapTNCMonitoringAndEvaluation />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "register-user",
        element: <RegisterUser />,
      },
      {
        path: "register-user/:userId",
        element: <UpdateRegisterUser />,
      },
      {
        path: "assign-user-permissions/:userId",
        element: <UserPermissions />,
      },
      {
        path: "content-management",
        element: <ContentManagement />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "new-project",
        element: <NewProject />,
      },
      {
        path: "new-project/:projectId",
        element: <NewProject />,
      },
      {
        path: "new-project-link/:projectId",
        element: <NewProjectLink />,
      },
      {
        path: "new-project-link/:projectId/:projectLinkId",
        element: <NewProjectLink />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "confirm-password-link",
        element: <ConfirmPasswordLinkSent />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
