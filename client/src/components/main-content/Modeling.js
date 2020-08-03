import React from 'react';
import { Grid, Button } from '@material-ui/core';
import CoverImg from '../../images/website-wireframe.png';
import OperationPortal from '../../images/operation-portal.png';
import FocusPocus from '../../images/focus-pocus.png';
import AntiBody from '../../images/anti-body.png';
import ColgateTrevor from '../../images/colgate-trevor.jpg';
import SvgIcon from '@material-ui/core/SvgIcon';

const imageStyles = {
    coverStyle: {
      // Left-Image
      width: '100%',
      maxHeight: '50vh',
      borderRadius: '20px',
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
    <Grid className={position%2 ? "segment primary-color secondary-font" : "segment secondary-color secondary-font"} container item direction="column" justify="center" alignItems="center" style={{height: '100vh'}}>{children}</Grid>
)
  
const HeaderLink = ({headerTitle, linkDestination}) => (
    <Button style={{margin: '25px'}} variant="contained" className="background-accent">
      <a href={linkDestination} className="button__text header accent-color">{headerTitle}</a>
    </Button>
)
  
const LatestItem = ({img, projectTitle, linkDestination, projectContributors, projectTechnologies, projectLinks, projectDate}) => (
    <Grid container item direction="row" justify="center" alignItems="center" spacing={3}>
      <Grid container item direction="column" justify="center" alignItems="center"xs={12} sm={6}>            
        <ImageText linkDestination={linkDestination} projectTitle={projectTitle}>
          <Grid container item direction="row" justify="center" alignItems="center" xs={12}>            
              <img style={imageStyles.coverStyle} src={img} alt="Placeholder Text"/>            
          </Grid>
        </ImageText>
      </Grid>
      <GridDescription projectTitle={projectTitle} projectContributors={projectContributors} projectTechnologies={projectTechnologies} projectLinks={projectLinks} projectDate={projectDate} />
    </Grid>
)
  
const GridItem = ({img, projectTitle, linkDestination, projectContributors, projectTechnologies, projectLinks, projectDate}) => (
    <Grid container item direction="row" justify="center" alignItems="center" spacing={3}>
      <Grid container item direction="column" justify="center" alignItems="center"xs={12} sm={6}>            
        <ImageText linkDestination={linkDestination} projectTitle={projectTitle}>
          <Grid container item direction="row" justify="center" alignItems="center" xs={12}>            
              <img style={imageStyles.coverStyle} src={img} alt="Placeholder Text"/>            
          </Grid>
        </ImageText>
      </Grid>
      <GridDescription projectTitle={projectTitle} projectContributors={projectContributors} projectTechnologies={projectTechnologies} projectLinks={projectLinks} projectDate={projectDate} />
    </Grid>
)
  
const ImageText = ({projectTitle, linkDestination, children}) => (
    <div style={{width: '100%'}} className="img__wrap">
      <div className="img__img">{children}</div>
      <a style={{borderRadius: '20px'}} href={linkDestination} className="img__description img__text">Read more about the {projectTitle} Campaign</a>
    </div>
)
  
const GridDescription = ({projectTitle, projectContributors, projectTechnologies, projectLinks, projectDate}) => (
    <Grid container item direction="column" justify="center" alignItems="center" xs={12} sm={6}>            
      <div className="title" style={textStyles.descriptionTitle}>{projectTitle}</div>
      <div style={textStyles.descriptionContent}><CreditContainer>{projectContributors}</CreditContainer></div>
      <div style={textStyles.descriptionContent}>{projectLinks}</div>
      <div style={textStyles.descriptionContent}><DateContainer>{projectDate}</DateContainer></div>
    </Grid>
)

const WEB = "M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";

/* Links */

const CreditContainer = ({children}) => (
  <span className="link-container">
    <h4 className="caption">Credits</h4>
    {children}
  </span>
)

const RowContainer = ({linkChildren}) => (
  <Grid container item direction="row" justify="flex-start" alignItems="center" spacing={9}>
    <LinkContainer>
      {linkChildren}
    </LinkContainer>
  </Grid>
)

const LinkContainer = ({children}) => (
  <Grid item className="link-container">
    <h4 className="caption">Links</h4>
    {children}
  </Grid>
)

const DateContainer = ({children}) => (
  <span className="source-container">
    <h4 className="caption">Released</h4>
    {children}
  </span>
)

const WebIcon = ({website}) => (
  <a target="_blank" rel="noreferrer noopener" href={website}><SvgIcon className="tech-icon"><path d={WEB} /></SvgIcon></a>
)

export default function Modeling() {
    return (
        <div id="Modeling">
            <Grid container item direction="column" justify="flex-start" alignItems="center">
                <SectionItem position={1}>
                    <h2><HeaderLink headerTitle={"Modeling"} linkDestination={"/modeling"}/></h2>
                    <GridItem img={ColgateTrevor} projectTitle={"Student Colgate Campaign"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Debora Sobczak","Magdalena Wycislik","Trevor Bland"} projectLinks={<RowContainer linkChildren={<WebIcon website={"https://deborasobczak.com/brands/colgate"} />} />}
                        projectDate={"May 2020"} />
                </SectionItem>
            </Grid>
        </div>
    )
}