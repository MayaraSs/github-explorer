import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../presentation/pages/DashBoard";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' component={Dashboard} />
    </Switch>
  );
};

export default Routes;
