import React from 'react';
import { Grid } from '@material-ui/core';

const SectionContainer = ({children}) => (
    <Grid container item direction={"column"} justify="center" alignItems="center" className="section secondary-font">
        {children}
    </Grid>
)

export default SectionContainer