import { LayoutForm } from "components";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function RoutesMap() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutForm />}>
          <Route path="/main" element={<p>This is main!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesMap;
