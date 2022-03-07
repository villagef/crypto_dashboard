import { ROUTE_PATHS } from "./consts";
import { IRouteConfig } from "./types";
import HomePage from "../components/__pages/Home";
import LoginPage from "../components/__pages/Login";
import AddPage from "../components/__pages/Add";
import SettingsPage from "../components/__pages/Settings";

export const ROUTES_CONFIG = (): IRouteConfig[] => [
  {
    path: ROUTE_PATHS.home,
    component: <HomePage />,
    name: "Home Page",
  },
  {
    path: ROUTE_PATHS.login,
    component: <LoginPage />,
    name: "Login Page",
  },
  {
    path: ROUTE_PATHS.add,
    component: <AddPage />,
    name: "Dashboard Page",
  },
  {
    path: ROUTE_PATHS.settings,
    component: <SettingsPage />,
    name: "Dashboard Page",
  },
];

