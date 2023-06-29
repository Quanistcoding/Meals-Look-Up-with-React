import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import MealsByCategoryPage from "./pages/MealsByCategoryPage";
import MealPage from "./pages/MealPage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:id", element: <MealsByCategoryPage /> },
      { path: "detail/:id", element: <MealPage /> },
      { path: "search", element: <SearchPage /> },
    ],
  },
]);

export default router;
