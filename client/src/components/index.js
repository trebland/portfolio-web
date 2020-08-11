import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import LeftMenu from './standard/menus/LeftMenu';
import RightMenu from './standard/menus/RightMenu';
import TopMenu from './mobile/menus/TopMenu';
import BottomMenu from './mobile/menus/BottomMenu';

export default function Index() {
    return (
        <div id="web-portfolio">
            <React.Fragment>

                <Hidden only={['xs', 'sm', 'md']}>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <LeftMenu />
                        <RightMenu />
                    </Grid>
                </Hidden>

                <Hidden only={['lg', 'xl']}>
                    <TopMenu />
                    <BottomMenu />
                </Hidden>
                
            </React.Fragment>
        </div>
    );
}
