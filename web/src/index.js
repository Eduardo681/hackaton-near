import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import "./sass/index.scss";
import BankConsolidation from "./pages/BankConsolidation";
import List from "./pages/List";
import Connect from "./pages/Connect";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/bank-consolidation",
        element: <BankConsolidation />,
    },
    {
        path: "/list",
        element: <List />,
    },
    {
        path: "/connect",
        element: <Connect />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);