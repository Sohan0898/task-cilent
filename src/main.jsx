import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes/Routes";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster/>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
