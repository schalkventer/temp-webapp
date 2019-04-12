import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

const Layout = ({ children }): JSX.Element => (
  <React.Fragment>
    <CssBaseline />
    {children}
  </React.Fragment>
);

export default Layout;
