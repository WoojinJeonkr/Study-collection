import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RouteMap } from './components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <RouterProvider router={RouteMap} />
);
