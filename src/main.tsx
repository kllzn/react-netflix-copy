import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home.tsx";
import Favorite from "./routes/Favorite.tsx";
import Series from "./routes/Series.tsx";
import MoviesPage from "./routes/MoviesPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "favorite",
        element: <Favorite />
      },
      {
        path: "series",
        element: <Series />
      },
      { path: "movies", element: <MoviesPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
