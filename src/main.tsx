import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminPage from "./pages/AdminPage.tsx";
import ClientPage from "./pages/ClientPage.tsx";

import "../public/admin/CSS/styles.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientPage />,
    errorElement: <div>404</div>,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    errorElement: <div>404</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
