import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Hidden } from '@material-ui/core';
import SideBar from './standard/menus/SideBar';
import MainContent from './standard/menus/MainContent';
import MobileSideBar from './mobile/menus/MobileSideBar';
import MobileMainContent from './mobile/menus/MobileMainContent';

export default function Index() {
    return (
        <div>        
            <Helmet>
                <title>Trevor Bland - Dashboard</title>
                <meta name="description" content="" />
            </Helmet>
            <React.Fragment>

                <Hidden only={['xs', 'sm', 'md']}>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <SideBar />
                            <MainContent />
                    </Grid>
                </Hidden>

                <Hidden only={['lg', 'xl']}>
                    <MobileSideBar />
                    <MobileMainContent />
                </Hidden>
                
            </React.Fragment>
        </div>
    );
}
