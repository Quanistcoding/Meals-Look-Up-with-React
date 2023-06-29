import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MealsByCategoryPage from "./pages/MealsByCategoryPage";
import MealPage from "./pages/MealPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "category/:id", element: <MealsByCategoryPage /> },
      { path: "detail/:id", element: <MealPage /> },
    ],
  },
]);

export default router;
