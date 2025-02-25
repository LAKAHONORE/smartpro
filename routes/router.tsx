import { createBrowserRouter } from "react-router-dom";
import Home from "../src/screens/home/Home";
import NotFound from "../src/screens/404/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;