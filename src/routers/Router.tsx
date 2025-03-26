import { useRoutes } from "react-router-dom";

import NotFound from "@/pages/notFound/NotFound";
import LoginContainer from "@/pages/login/LoginContainer";

const Router = () => {
  const routes = [
    // { path: "/", element: <Landing /> },
    {
      path: "*",
      element: <NotFound />,
    },

    {
      path: "/login",
      element: <LoginContainer />,
    },
  ];

  const element = useRoutes(routes);
  return element;
};

export default Router;
