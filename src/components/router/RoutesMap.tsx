import { LayoutForm } from "components/layout";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RoutesMap() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutForm />} />
      </Routes>
    </BrowserRouter>
  );
}
