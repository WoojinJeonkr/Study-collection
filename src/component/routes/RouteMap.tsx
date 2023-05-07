import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../shared';
import { UpdateClock, UploadText } from '../useState';

const RouteMap = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/useState">
          <Route path="updateClock" element={<UpdateClock />} />
          <Route path="updateText" element={<UploadText />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteMap;