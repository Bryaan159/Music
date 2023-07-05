import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import ListOfPlayList from "./routes/listOfPlayList";
import CreatePlayList from "./routes/createPlayList";
import NewSong from "./routes/newSong";
import ViewPlayList from "./routes/viewPlayList";
import Navbar from "./Components/NavBar";
import Login from "./Components/Login";
import "./App.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "/create",
        element: <CreatePlayList />,
      },
      {
        path: "list",
        element: <ListOfPlayList />,
      },
      {
        path: "new",
        element: <NewSong />,
      },
      {
        path: "view",
        element: <ViewPlayList />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
