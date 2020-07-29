import React from 'react';
import { Grid, Button } from '@material-ui/core';
import CoverImg from '../../images/website-wireframe.png';

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
    <Grid className={position%2 ? "primary-color" : "secondary-color"} container item direction="column" justify="center" alignItems="center" style={{height: '100vh'}}>{children}</Grid>
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

function MobileMainContent() {
    return (
        <div className="bottom-menu">
            <Grid container item direction="column" justify="flex-start" alignItems="center">
                <SectionItem position={1}>
                    <h2><HeaderLink headerTitle={"Latest Development"} linkDestination={"/fullstack"}/></h2>
                    <LatestItem projectTitle={"Repopit.dev"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={"React, JavaScript, AWS, GitHub, HTML, CSS, Material.UI"} 
                        projectDate={"July 2020"} />
                </SectionItem>
                <SectionItem position={2}>
                    <h2><HeaderLink headerTitle={"Full Stack"} linkDestination={"/fullstack"}/></h2>
                    <GridItem projectTitle={"Repopit.dev"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={"React, JavaScript, AWS, GitHub, HTML, CSS, Material.UI"} 
                        projectDate={"July 2020"} />
                </SectionItem>
                <SectionItem position={3}>
                    <h2><HeaderLink headerTitle={"Mobile Applications"} linkDestination={"/fullstack"}/></h2>
                    <GridItem projectTitle={"Repopit.dev"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={"React, JavaScript, AWS, GitHub, HTML, CSS, Material.UI"} 
                        projectDate={"July 2020"} />
                </SectionItem>
                <SectionItem position={4}>
                    <h2><HeaderLink headerTitle={"Modeling"} linkDestination={"/fullstack"}/></h2>
                    <GridItem projectTitle={"Repopit.dev"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={"React, JavaScript, AWS, GitHub, HTML, CSS, Material.UI"} 
                        projectDate={"July 2020"} />
                </SectionItem>
            </Grid>
        </div>
    )
}

export default MobileMainContent;