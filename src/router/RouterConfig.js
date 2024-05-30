// src/router/RouterConfig.js
import React, { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '../layout/appLayout/index';

const MainDashboard = lazy(() => import('../pages/dashboard/index'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainDashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const RouterConfig = () => {
  return <RouterProvider router={router} />;
};

export default RouterConfig;
