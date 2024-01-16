import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home, UseStateMain } from '../pages';
import App from '../../App';

const RouteMap = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'useState',
        element: <UseStateMain />
      }
    ]
  }
]);

export default RouteMap;