import React from 'react';
import { Grid } from '@material-ui/core';

const SectionHeader = ({headerTitle}) => (
  <Grid container item direction="row" justify="center" alignItems="center" className="secondary-font">
      <h2 className="button__text header">{headerTitle}</h2>
  </Grid>
)

export default SectionHeader