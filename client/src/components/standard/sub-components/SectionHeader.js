import React from 'react';
import { Grid, Button } from '@material-ui/core';

const SectionHeader = ({headerTitle, linkDestination}) => (
  <Grid container item className="secondary-font">
    <Button style={{margin: '25px'}} variant="contained" className="background-accent">
      <span className="button__text header">{headerTitle}</span>
    </Button>
  </Grid>
)

export default SectionHeader