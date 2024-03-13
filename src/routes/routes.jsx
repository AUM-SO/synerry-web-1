import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/LayoutPage";
import NoPage from "../pages/NoPage";

const routers = createBrowserRouter([
  {
    path: "*",
    element: <NoPage />,
  },
  {
    path: "/",
    element: <Layout />,
  },
]);

export default routers;
