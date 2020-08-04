import React from 'react';
import { Grid } from '@material-ui/core';

const SectionContainer = ({position, classNames, children}) => (
    <Grid className={position%2 ? ("segment primary-color secondary-font " + classNames) : ("segment secondary-color secondary-font " + classNames)} container item direction="column" justify="center" alignItems="center" style={{height: '100vh'}}>
        {children}
    </Grid>
)

export default SectionContainer