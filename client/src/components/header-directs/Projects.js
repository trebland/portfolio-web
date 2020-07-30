import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Button, Hidden } from '@material-ui/core';
import CoverImg from '../../images/website-wireframe.png';
import ProfilePhoto from '../../images/headshot.jpg';
import SideBar from '../header-components/SideBar';
import MobileSideBar from '../header-components/MobileSideBar';
import MainContent from '../header-components/MainContent';
import MobileMainContent from '../header-components/MobileMainContent';

const imageStyles = {
  coverStyle: {
    // Left-Image
    maxWidth: '100%',
    maxHeight: '80vh'
  },
  profile: {
    width: '100%',
    borderRadius: '50%'
  }
}

const textStyles = {
  descriptionTitle: {
    color: 'white', 
    fontSize: 28, 
    marginBottom: '20px'
  },
  descriptionContent: {
    color: 'white', 
    fontSize: 20, 
    textAlign: 'left', 
    width: '100%', 
    marginBottom: '20px'
  },
  profileTitle: {
    color: 'white', 
    fontSize: 28, 
  },
  profileSubTitle: {
    color: 'white', 
    fontSize: 20, 
  },
  navigationTitle: {
    color: 'white', 
    fontSize: 28, 
    marginBottom: '20px'
  },
  sectionTitle: {
    color: 'white',
    fontSize: 40,
    marginBottom: '40px'
  },
  email: {
    color: 'white',
    paddingRight: '20px'
  }
}

const SectionItem = ({position, children}) => (
  <Grid className={position%2 ? "segment primary-color" : "segment secondary-color"} container item direction="column" justify="center" alignItems="center" style={{height: '100vh'}}>{children}</Grid>
)

const HeaderLink = ({headerTitle, linkDestination}) => (
  <Button style={{margin: '25px'}} variant="contained" color="secondary">
    <a href={linkDestination} className="button__text"><div className="header" style={{color: 'white', fontSize: 28, textAlign: 'center'}}>{headerTitle}</div></a>
  </Button>
)

const LatestItem = ({projectTitle, linkDestination, projectContributors, projectTechnologies, projectDate}) => (
  <Grid container item direction="row" justify="center" alignItems="center" spacing={3}>
    <Grid container item direction="column" justify="center" alignItems="center"xs={12} sm={6}>            
      <ImageText linkDestination={linkDestination} projectTitle={projectTitle}>
        <Grid container item direction="row" justify="center" alignItems="center" xs={12}>            
            <img style={imageStyles.coverStyle} src={CoverImg} alt="Placeholder Text"/>            
        </Grid>
      </ImageText>
    </Grid>
    <GridDescription projectTitle={projectTitle} projectContributors={projectContributors} projectTechnologies={projectTechnologies} projectDate={projectDate} />
  </Grid>
)

const GridItem = ({projectTitle, linkDestination, projectContributors, projectTechnologies, projectDate}) => (
  <Grid container item direction="row" justify="center" alignItems="center" spacing={3}>
    <Grid container item direction="column" justify="center" alignItems="center"xs={12} sm={6}>            
      <ImageText linkDestination={linkDestination} projectTitle={projectTitle}>
        <Grid container item direction="row" justify="center" alignItems="center" xs={12}>            
            <img style={imageStyles.coverStyle} src={CoverImg} alt="Placeholder Text"/>            
        </Grid>
      </ImageText>
    </Grid>
    <GridDescription projectTitle={projectTitle} projectContributors={projectContributors} projectTechnologies={projectTechnologies} projectDate={projectDate} />
  </Grid>
)

const ImageText = ({projectTitle, linkDestination, children}) => (
  <div style={{width: '100%'}} className="img__wrap">
    <div className="img__img">{children}</div>
    <a href={linkDestination} className="img__description img__text">Read more about the {projectTitle} Campaign</a>
  </div>
)

const GridDescription = ({projectTitle, projectContributors, projectTechnologies, projectDate}) => (
  <Grid container item direction="column" justify="center" alignItems="center" xs={12} sm={6}>            
    <div style={textStyles.descriptionTitle}>{projectTitle}</div>
    <div style={textStyles.descriptionContent}>Made By: {projectContributors}</div>
    <div style={textStyles.descriptionContent}>{projectTechnologies}</div>
    <div style={textStyles.descriptionContent}>{projectDate}</div>
  </Grid>
)

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
