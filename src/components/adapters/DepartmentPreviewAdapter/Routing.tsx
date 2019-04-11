import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DataLoader from './DataLoader';
import { path } from './data.json';
import { Tprops } from './schema';

const ResolveDepartmentRoute = ({ match }: { match: Tprops }): JSX.Element => (
  <DataLoader {...match} />
);

const Routing = (): JSX.Element => (
  <Router>
    <Route {...{ path }} component={ResolveDepartmentRoute} />
  </Router>
);

export default Routing;
