import Home from "../components/__pages/Home";
import Dashboard from "../components/__pages/Dashboard";
import { ROUTE_PATHS } from "./consts";
import { IRouteConfig } from "./types";

export const ROUTES_CONFIG = (): IRouteConfig[] => [
  {
    path: ROUTE_PATHS.home,
    component: <Home />,
    name: "Home Page",
  },
  {
    path: ROUTE_PATHS.dashboard,
    component: <Dashboard />,
    name: "Dashboard Page",
  },
];

