import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './pages/Landing';
import Navbar from './components/layout/Navbar';
import Error404 from './pages/404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "*",
    element: <Error404/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
