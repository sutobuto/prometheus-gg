import React from "react";
import ReactDOM from "react-dom/client";
import CharList from "./components/CharList/CharList.jsx";
import Header from "./components/Header/Header.jsx";
import HoFi from "./components/ValkPages/Kiana/HoFi/HoFi.jsx";
import HoO from "./components/ValkPages/Mei/HoO.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/prometheus-gg/",
    element: <CharList />,
  },
  {
    path: "/prometheus-gg/valkyries/herrscher-of-finality",
    element: <HoFi />,
  },
  {
    path: "/prometheus-gg/valkyries/herrscher-of-origin",
    element: <HoO />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
