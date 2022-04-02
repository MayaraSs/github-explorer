import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path='/' element={<Dashboard />} />
  </BrowserRouter>
);

export default Routes;
