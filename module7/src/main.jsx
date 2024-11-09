import React from "react";
import App from './components/App/App.jsx'
import ReactDOM from "react-dom/client";
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "components/Pages/HomePage.jsx";
import MovieListPage from "components/Pages/MovieListPage.jsx";
import CinemaPage from "components/Pages/CinemaPage.jsx";
import AddMoviesPage from "components/Pages/AddMoviesPage.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children: [
      {
        path:"",
        element: <HomePage/>
      },
      {
        path:"cinema",
        element: <CinemaPage/>
      },
      {
        path: "movies",
        element: <MovieListPage/>
      },
      {
        path: "movies/add",
        element: <AddMoviesPage />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
