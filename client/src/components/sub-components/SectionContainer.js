import React from 'react';
import { Grid } from '@material-ui/core';

const SectionContainer = ({position, children}) => (
    <Grid className={position%2 ? "segment primary-color secondary-font" : "segment secondary-color secondary-font"} container item direction="column" justify="center" alignItems="center" style={{height: '100vh'}}>
        {children}
    </Grid>
)

export default SectionContainer