import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchContext from "./context/SearchContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchContext>
        <RouterProvider router={router} />
      </SearchContext>
    </QueryClientProvider>
  </React.StrictMode>
);
