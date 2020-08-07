import React from 'react';
import { Grid } from '@material-ui/core';

const SectionContainer = ({fullHeight, children}) => (
    <Grid container item direction={"column"} justify="center" alignItems="center" className={"section secondary-font" + (fullHeight ? " full-height" : "")}>
        {children}
    </Grid>
)

export default SectionContainer