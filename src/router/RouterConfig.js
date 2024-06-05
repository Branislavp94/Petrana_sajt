// src/router/RouterConfig.js
import React, { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '../layout/appLayout/index';

const MainDashboard = lazy(() => import('../pages/dashboard/index'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));
const StvaranjePriceIPriroda = lazy(() => import('../pages/StvaranjePriceIPriroda'));
const UmetnostUFokusu = lazy(() => import('../pages/UmetnostUFokusu'));
const KrstenjaIRodjendani = lazy(() => import('../pages/KrstenjaIRodjendani'));


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
      {
        path: "/portfolio/stvaranje-price-i-priroda",
        element: <StvaranjePriceIPriroda />,
      },
      {
        path: "/portfolio/umetnost-u-fokusu",
        element: <UmetnostUFokusu  />,
      },
      {
        path: "/portfolio/krstenja-i-rodjendani",
        element: <KrstenjaIRodjendani  />,
      },
    ],
  },
]);

const RouterConfig = () => {
  return <RouterProvider router={router} />;
};

export default RouterConfig;
