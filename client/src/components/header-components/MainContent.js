import React from 'react';
import { Grid, Button } from '@material-ui/core';
import CoverImg from '../../images/website-wireframe.png';
import SvgIcon from '@material-ui/core/SvgIcon';

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
    <Grid className={position%2 ? "segment primary-color secondary-font" : "segment secondary-color secondary-font"} container item direction="column" justify="center" alignItems="center" style={{height: '100vh'}}>{children}</Grid>
)
  
const HeaderLink = ({headerTitle, linkDestination}) => (
    <Button style={{margin: '25px'}} variant="contained" color="secondary">
      <a href={linkDestination} className="button__text header" style={{fontSize:28, color: 'white'}}>{headerTitle}</a>
    </Button>
)
  
const LatestItem = ({projectTitle, linkDestination, projectContributors, projectTechnologies, projectLinks, projectDate}) => (
    <Grid container item direction="row" justify="center" alignItems="center" spacing={3}>
      <Grid container item direction="column" justify="center" alignItems="center"xs={12} sm={6}>            
        <ImageText linkDestination={linkDestination} projectTitle={projectTitle}>
          <Grid container item direction="row" justify="center" alignItems="center" xs={12}>            
              <img style={imageStyles.coverStyle} src={CoverImg} alt="Placeholder Text"/>            
          </Grid>
        </ImageText>
      </Grid>
      <GridDescription projectTitle={projectTitle} projectContributors={projectContributors} projectTechnologies={projectTechnologies} projectLinks={projectLinks} projectDate={projectDate} />
    </Grid>
)
  
const GridItem = ({projectTitle, linkDestination, projectContributors, projectTechnologies, projectLinks, projectDate}) => (
    <Grid container item direction="row" justify="center" alignItems="center" spacing={3}>
      <Grid container item direction="column" justify="center" alignItems="center"xs={12} sm={6}>            
        <ImageText linkDestination={linkDestination} projectTitle={projectTitle}>
          <Grid container item direction="row" justify="center" alignItems="center" xs={12}>            
              <img style={imageStyles.coverStyle} src={CoverImg} alt="Placeholder Text"/>            
          </Grid>
        </ImageText>
      </Grid>
      <GridDescription projectTitle={projectTitle} projectContributors={projectContributors} projectTechnologies={projectTechnologies} projectLinks={projectLinks} projectDate={projectDate} />
    </Grid>
)
  
const ImageText = ({projectTitle, linkDestination, children}) => (
    <div style={{width: '100%'}} className="img__wrap">
      <div className="img__img">{children}</div>
      <a href={linkDestination} className="img__description img__text">Read more about the {projectTitle} Campaign</a>
    </div>
)
  
const GridDescription = ({projectTitle, projectContributors, projectTechnologies, projectLinks, projectDate}) => (
    <Grid container item direction="column" justify="center" alignItems="center" xs={12} sm={6}>            
      <div className="title" style={textStyles.descriptionTitle}>{projectTitle}</div>
      <div style={textStyles.descriptionContent}><CreditContainer>{projectContributors}</CreditContainer></div>
      <div style={textStyles.descriptionContent}><TechnologyContainer>{projectTechnologies}</TechnologyContainer></div>
      <div style={textStyles.descriptionContent}>{projectLinks}</div>
      <div style={textStyles.descriptionContent}><DateContainer>{projectDate}</DateContainer></div>
    </Grid>
)

const HTML5 = "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z";
const AWS = "M7.64,10.38C7.64,10.63 7.66,10.83 7.71,11C7.76,11.12 7.83,11.28 7.92,11.46C7.96,11.5 7.97,11.56 7.97,11.61C7.97,11.68 7.93,11.74 7.84,11.81L7.42,12.09C7.36,12.13 7.3,12.15 7.25,12.15C7.18,12.15 7.12,12.11 7.05,12.05C6.96,11.95 6.88,11.85 6.81,11.74C6.75,11.63 6.68,11.5 6.61,11.35C6.09,11.96 5.44,12.27 4.65,12.27C4.09,12.27 3.65,12.11 3.32,11.79C3,11.47 2.83,11.04 2.83,10.5C2.83,9.95 3.03,9.5 3.43,9.14C3.84,8.8 4.38,8.62 5.06,8.62C5.29,8.62 5.5,8.64 5.77,8.68C6,8.71 6.27,8.76 6.53,8.82V8.34C6.53,7.83 6.43,7.5 6.22,7.27C6,7.06 5.65,6.97 5.14,6.97C4.9,6.97 4.66,7 4.42,7.05C4.17,7.11 3.93,7.18 3.7,7.28C3.59,7.32 3.5,7.35 3.47,7.36C3.42,7.38 3.39,7.38 3.36,7.38C3.27,7.38 3.22,7.32 3.22,7.18V6.85C3.22,6.75 3.23,6.67 3.27,6.62C3.3,6.57 3.36,6.53 3.45,6.5C3.69,6.36 3.96,6.26 4.29,6.18C4.62,6.09 4.96,6.05 5.33,6.05C6.12,6.05 6.7,6.23 7.07,6.59C7.44,6.95 7.62,7.5 7.62,8.23V10.38H7.64M4.94,11.4C5.16,11.4 5.38,11.36 5.62,11.28C5.86,11.2 6.07,11.05 6.25,10.85C6.36,10.72 6.44,10.58 6.5,10.42C6.5,10.26 6.55,10.07 6.55,9.84V9.57C6.35,9.5 6.15,9.5 5.93,9.45C5.72,9.43 5.5,9.41 5.31,9.41C4.86,9.41 4.54,9.5 4.32,9.68C4.1,9.86 4,10.11 4,10.44C4,10.76 4.07,11 4.24,11.15C4.4,11.32 4.63,11.4 4.94,11.4M10.28,12.11C10.16,12.11 10.08,12.09 10,12.05C9.97,12 9.92,11.91 9.88,11.79L8.32,6.65C8.28,6.5 8.26,6.43 8.26,6.38C8.26,6.27 8.31,6.21 8.42,6.21H9.07C9.2,6.21 9.29,6.23 9.33,6.28C9.39,6.32 9.43,6.41 9.47,6.54L10.58,10.94L11.62,6.54C11.65,6.41 11.69,6.32 11.75,6.28C11.8,6.24 11.89,6.21 12,6.21H12.55C12.67,6.21 12.76,6.23 12.81,6.28C12.86,6.32 12.91,6.41 12.94,6.54L14,11L15.14,6.54C15.18,6.41 15.23,6.32 15.27,6.28C15.33,6.24 15.41,6.21 15.53,6.21H16.15C16.26,6.21 16.32,6.27 16.32,6.38C16.32,6.41 16.31,6.45 16.3,6.5C16.3,6.5 16.28,6.58 16.26,6.65L14.65,11.79C14.61,11.93 14.57,12 14.5,12.05C14.46,12.09 14.37,12.12 14.26,12.12H13.69C13.56,12.12 13.5,12.1 13.42,12.05C13.37,12 13.32,11.92 13.3,11.79L12.27,7.5L11.24,11.78C11.21,11.91 11.17,12 11.12,12.05C11.06,12.09 10.97,12.11 10.85,12.11H10.28M18.83,12.29C18.5,12.29 18.13,12.25 17.8,12.17C17.47,12.09 17.21,12 17.04,11.91C16.93,11.85 16.86,11.78 16.83,11.72C16.8,11.66 16.79,11.6 16.79,11.54V11.2C16.79,11.06 16.84,11 16.94,11C17,11 17,11 17.06,11C17.1,11 17.16,11.05 17.23,11.08C17.45,11.18 17.7,11.26 17.96,11.31C18.23,11.36 18.5,11.39 18.75,11.39C19.17,11.39 19.5,11.32 19.72,11.17C19.95,11 20.07,10.81 20.07,10.54C20.07,10.35 20,10.2 19.89,10.07C19.77,9.95 19.54,9.83 19.22,9.73L18.25,9.43C17.77,9.27 17.41,9.05 17.19,8.75C16.97,8.46 16.86,8.13 16.86,7.78C16.86,7.5 16.92,7.26 17.04,7.05C17.16,6.83 17.32,6.65 17.5,6.5C17.72,6.35 17.94,6.24 18.21,6.16C18.47,6.08 18.75,6.04 19.05,6.04C19.19,6.04 19.34,6.05 19.5,6.07C19.64,6.09 19.78,6.12 19.92,6.14C20.06,6.18 20.18,6.21 20.3,6.25C20.42,6.29 20.5,6.33 20.58,6.37C20.67,6.42 20.74,6.47 20.78,6.53C20.82,6.59 20.84,6.66 20.84,6.75V7.07C20.84,7.21 20.79,7.28 20.69,7.28C20.64,7.28 20.55,7.25 20.43,7.2C20.06,7.03 19.63,6.94 19.16,6.94C18.78,6.94 18.5,7 18.27,7.13C18.07,7.25 17.96,7.45 17.96,7.72C17.96,7.91 18.03,8.07 18.16,8.19C18.29,8.32 18.54,8.44 18.89,8.56L19.84,8.86C20.32,9 20.66,9.22 20.87,9.5C21.07,9.77 21.17,10.08 21.17,10.43C21.17,10.71 21.11,10.97 21,11.2C20.88,11.42 20.72,11.62 20.5,11.78C20.31,11.95 20.06,12.07 19.78,12.16C19.5,12.25 19.16,12.29 18.83,12.29M20.08,15.53C17.89,17.14 14.71,18 12,18C8.15,18 4.7,16.58 2.09,14.23C1.88,14.04 2.07,13.79 2.32,13.94C5.14,15.57 8.61,16.56 12.21,16.56C14.64,16.56 17.31,16.06 19.76,15C20.13,14.85 20.44,15.26 20.08,15.53M21,14.5C20.71,14.13 19.14,14.32 18.43,14.4C18.22,14.43 18.19,14.24 18.38,14.1C19.63,13.23 21.69,13.5 21.92,13.77C22.16,14.07 21.86,16.13 20.69,17.11C20.5,17.26 20.33,17.18 20.41,17C20.68,16.32 21.27,14.84 21,14.5Z";
const JS = "M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z";
const REACT = "M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z";
const GITHUB = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z";
const CSS = "M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z";
const MATERIALUI = "M8,16.61V15.37L14,11.91V7.23L9,10.12L4,7.23V13L3,13.58L2,13V5L3.07,4.38L9,7.81L12.93,5.54L14.93,4.38L16,5V13.06L10.92,16L14.97,18.33L20,15.43V11L21,10.42L22,11V16.58L14.97,20.64L8,16.61M22,9.75L21,10.33L20,9.75V8.58L21,8L22,8.58V9.75Z";
const ANDROID = "M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32S16.15 13.5 16.61 13.5H16.61C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15M7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5H7.41C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15M16.91 10.14L18.58 7.26C18.67 7.09 18.61 6.88 18.45 6.79C18.28 6.69 18.07 6.75 18 6.92L16.29 9.83C14.95 9.22 13.5 8.9 12 8.91C10.47 8.91 9 9.24 7.73 9.82L6.04 6.91C5.95 6.74 5.74 6.68 5.57 6.78C5.4 6.87 5.35 7.08 5.44 7.25L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14H16.91Z";
const IOS = "M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z";

/* Technologies */

const HtmlIcon = () => (
  <SvgIcon className="tech-icon"><path d={HTML5} /></SvgIcon>
)

const AwsIcon = () => (
  <SvgIcon className="tech-icon"><path d={AWS} /></SvgIcon>
)

const JsIcon = () => (
  <SvgIcon className="tech-icon"><path d={JS} /></SvgIcon>
)

const ReactIcon = () => (
  <SvgIcon className="tech-icon"><path d={REACT} /></SvgIcon>
)

const CssIcon = () => (
  <SvgIcon className="tech-icon"><path d={CSS} /></SvgIcon>
)

const MaterialUiIcon = () => (
  <SvgIcon className="tech-icon"><path d={MATERIALUI} /></SvgIcon>
)

/* Links */

const CreditContainer = ({children}) => (
  <span className="link-container">
    <h4 className="caption">Credits</h4>
    {children}
  </span>
)

const TechnologyContainer = ({children}) => (
  <span className="link-container">
    <h4 className="caption">Technologies</h4>
    {children}
  </span>
)

const RowContainer = ({linkChildren, sourceChildren}) => (
  <Grid container item direction="row" justify="flex-start" alignItems="center" spacing={9}>
    <LinkContainer>
      {linkChildren}
    </LinkContainer>
    <SourceContainer>
      {sourceChildren}
    </SourceContainer>
  </Grid>
)

const LinkContainer = ({children}) => (
  <Grid item className="link-container">
    <h4 className="caption">Links</h4>
    {children}
  </Grid>
)

const SourceContainer = ({children}) => (
  <Grid item className="source-container">
    <h4 className="caption">Source</h4>
    {children}
  </Grid>
)

const DateContainer = ({children}) => (
  <span className="source-container">
    <h4 className="caption">Released</h4>
    {children}
  </span>
)

const GithubIcon = ({projectLink}) => (
  <a href={"https:github.com/trebland/" + projectLink}><SvgIcon className="tech-icon"><path d={GITHUB} /></SvgIcon></a>
)

const AndroidIcon = () => (
  <a href={"https://play.google.com/store/apps/details?id=org.orlandochildrenschurch.operationportal"}><SvgIcon className="tech-icon"><path d={ANDROID} /></SvgIcon></a>
)

const IosIcon = () => (
  <a><SvgIcon className="tech-icon"><path d={IOS} /></SvgIcon></a>
)



function MainContent() {
    return (
        <div className="right-menu">
            <Grid container item direction="column" justify="flex-start" alignItems="center">
                <SectionItem position={1}>
                    <h2><HeaderLink headerTitle={"Latest Development"} linkDestination={"/fullstack"}/></h2>
                    <LatestItem projectTitle={"Repopit.dev"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={<span><HtmlIcon/><CssIcon/><JsIcon/><ReactIcon/><MaterialUiIcon/><AwsIcon/></span>} 
                        projectLinks={<RowContainer linkChildren={<span><AndroidIcon/><IosIcon/></span>} sourceChildren={<GithubIcon projectLink="portfolio-web"/>}/>} projectDate={"July 2020"} />
                </SectionItem>
                <SectionItem position={2}>
                    <h2><HeaderLink headerTitle={"Full Stack"} linkDestination={"/fullstack"}/></h2>
                    <GridItem projectTitle={"Operation Portal"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={"React, JavaScript, AWS, GitHub, HTML, CSS, Material.UI"} 
                        projectDate={"July 2020"} />
                </SectionItem>
                <SectionItem position={3}>
                    <h2><HeaderLink headerTitle={"Mobile Applications"} linkDestination={"/fullstack"}/></h2>
                    <GridItem projectTitle={"FlikBak"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={"React, JavaScript, AWS, GitHub, HTML, CSS, Material.UI"} 
                        projectDate={"July 2020"} />
                </SectionItem>
                <SectionItem position={3}>
                    <h2><HeaderLink headerTitle={"Games"} linkDestination={"/fullstack"}/></h2>
                    <GridItem projectTitle={"FlikBak"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={"React, JavaScript, AWS, GitHub, HTML, CSS, Material.UI"} 
                        projectDate={"July 2020"} />
                </SectionItem>
                <SectionItem position={4}>
                    <h2><HeaderLink headerTitle={"Modeling"} linkDestination={"/fullstack"}/></h2>
                    <GridItem projectTitle={"Student Colgate Campaign"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={"React, JavaScript, AWS, GitHub, HTML, CSS, Material.UI"} 
                        projectDate={"July 2020"} />
                </SectionItem>
            </Grid>
        </div>
    )
}

export default MainContent;