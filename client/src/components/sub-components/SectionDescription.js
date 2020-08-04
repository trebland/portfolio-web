import React from 'react';
import { Grid } from '@material-ui/core';

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
}

// Takes the following parameters to construct successfully
// title: Title of the project
// contributors: List of names of those who contributed to the project
// technologies: List of technology icons that the project is composed of
// liveLinks: List of external links to live project locations !(must be wrapped in a link wrapper when passed)!
// sourceLink: Github link (or other code repository link) !(must be wrapped in a link wrapper when passed)!
// date: date the project was released

const SectionDescription = ({title, contributors, technologies, liveLinks, sourceLink, date}) => (
    <Grid container item direction="column" justify="center" alignItems="center" xs={12} sm={6}>            
      <div className="title" style={textStyles.descriptionTitle}>{title}</div>
      <div style={textStyles.descriptionContent}><CreditContainer>{contributors}</CreditContainer></div>
      <div style={textStyles.descriptionContent}><TechnologyContainer>{technologies}</TechnologyContainer></div>
      <div style={textStyles.descriptionContent}><LinkAndSourceContainer>
      {/* Conditional Statement to construct the appropriate container as long as the respective link contains data */}
      {liveLinks ? <LinkContainer>{liveLinks}</LinkContainer> : <></>}{sourceLink ? <SourceContainer>{sourceLink}</SourceContainer> : <></>}
      </LinkAndSourceContainer></div>
      <div style={textStyles.descriptionContent}><DateContainer>{date}</DateContainer></div>
    </Grid>
)

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

const DateContainer = ({children}) => (
    <span className="source-container">
      <h4 className="caption">Released</h4>
      {children}
    </span>
)

const LinkAndSourceContainer = ({children}) => (
  <Grid container item direction="row" justify="flex-start" alignItems="center" spacing={9}>
    {children}
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

export default SectionDescription