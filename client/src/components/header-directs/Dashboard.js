import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Button, Hidden } from '@material-ui/core';
import CoverImg from '../../images/website-wireframe.png';
import ProfilePhoto from '../../images/headshot.jpg';
import SideBar from '../header-components/SideBar';
import MobileSideBar from '../header-components/MobileSideBar';
import MainContent from '../header-components/MainContent';
import MobileMainContent from '../header-components/MobileMainContent';

export default function Dashboard() {
    return (
        <div>        
            <Helmet>
                <title>Trevor Bland - Dashboard</title>
                <meta name="description" content="" />
            </Helmet>
            <React.Fragment>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">

                <Hidden only={['xs', 'sm', 'md']}>
                    <SideBar />
                    <MainContent />
                </Hidden>
                
                <Hidden only={['lg', 'xl']}>
                    <MobileSideBar />
                    <MobileMainContent />
                </Hidden>

            </Grid>
            </React.Fragment>
        </div>
    );
}
