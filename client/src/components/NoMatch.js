import React from "react";
import { Button } from '@material-ui/core';
import { Home } from '@material-ui/icons';

const NoMatch = () => (
  <div class="container" style={{textAlign: 'center'}}>
    <h1 class="container" style={{textAlign: 'center', color: 'white', marginTop: '10%'}}>404 Page Not Found</h1>
    <Button>
      <Home />
      Go Home
    </Button>
  </div>
);

export default NoMatch;