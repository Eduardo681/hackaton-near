import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import "./sass/index.scss";
import BankConsolidation from "./pages/BankConsolidation";
import List from "./pages/List";
import Connect from "./pages/Connect";
import ListEscritorios from "./pages/ListEscritorios";
import DetailsOffice from "./pages/DetailsOffice";
import HomeFirstAcess from "./pages/HomeFirstAcess"
import FirstAcess from "./pages/FirstAcess"
import CreateOffice from "./pages/CreateOffice"

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
    },
    {
        path: "/list-escritorios",
        element: <ListEscritorios />,
    },
    {
        path: "/details-office",
        element: <DetailsOffice />,
    },
    {
        path: "/first-acess",
        element: <HomeFirstAcess />
    },
    {
        path: "/first-acess-create",
        element: <FirstAcess />
    },
    {
        path: "/create-office",
        element: <CreateOffice />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);