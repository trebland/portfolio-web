import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Hidden } from '@material-ui/core';
import SideBar from '../standard/header-components/SideBar';
import MainContent from '../standard/header-components/MainContent';
import MobileSideBar from '../mobile/header-components/MobileSideBar';
import MobileMainContent from '../mobile/header-components/MobileMainContent';

export default function Dashboard() {
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
