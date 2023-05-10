import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages';
import App from '../../App';

const RouteMap = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
]);

export default RouteMap;