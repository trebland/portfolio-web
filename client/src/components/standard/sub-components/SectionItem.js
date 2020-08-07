import React from 'react';
import { Grid } from '@material-ui/core';

const imageStyles = {
    coverStyle: {
      maxWidth: '90%',
      maxHeight: '50vh',
      borderRadius: '20px',
    },
    fillStyle: {
      maxWidth: '100%',
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
    width: '100%',
    marginBottom: '20px'
  },
  descriptionContentLeft: {
    textAlign: 'left', 
  },
  descriptionContentRight: {
    textAlign: 'right', 
  },
}

// Takes the following parameters to construct successfully
// img: Image of the project to display
// title: Title of the project
// internalLink: Link to the project page (internal link)
// contributors: List of names of those who contributed to the project
// technologies: List of technology icons that the project is composed of
// externalLinks: List of external links, linking to live project locations
// date: date the project was released
// children: the text description passed as a child

const SectionItem = ({img, title, internalLink, contributors, technologies, liveLinks, sourceLink, date, position, children}) => (
  <Grid container item direction="column" justify="center" alignItems="center" className="section-item tertiary-color" style={{padding: '20px 0px'}} xs={9}>
    <Grid container item direction={position%2 ? "row" : "row-reverse"} justify="center" alignItems="center">
      <Grid container item direction="column" justify="center" alignItems="center" sm={6}>
        <Grid container item direction="row" justify="center" alignItems="center" xs={12}>            
            <img style={imageStyles.coverStyle} src={img} alt={title}/>            
        </Grid>
      </Grid>
      <SectionDescription title={title} contributors={contributors} technologies={technologies} liveLinks={liveLinks} sourceLink={sourceLink} date={date} position={position}/>
    </Grid>
    <Grid item style={{padding: '5%'}}>
      {children}
    </Grid>
  </Grid>
)

// Intended to be used in a future version
// const ImageText = ({title, internalLink, children}) => (
//   <div style={imageStyles.coverStyle} className="img__wrap">
//     <div className="img__img">{children}</div>
//     <a style={{borderRadius: '20px'}} href={internalLink} className="img__description img__text">Read more about {title}</a>
//   </div>
// )

// Takes the following parameters to construct successfully
// title: Title of the project
// contributors: List of names of those who contributed to the project (must be array type)
// date: date the project was released
// technologies: List of technology icons that the project is composed of (optional)
// liveLinks: List of external links to live project locations (optional)
// sourceLink: Github link (or other code repository link) (optional)
// position: Whether the content should appear on the left or right side of the page

const SectionDescription = ({title, contributors, technologies, liveLinks, sourceLink, date, position}) => (      
  <Grid className="section-description" style={position%2 ? textStyles.descriptionContentLeft : textStyles.descriptionContentRight} container item direction="column" justify="center" alignItems="center" xs={12} sm={6}>         
    <div className="title" style={textStyles.descriptionTitle}>{title}</div>
    <div style={textStyles.descriptionContent}><CreditContainer>{contributors.map(contributor => (<div className="contributor" key={contributor}>{contributor}</div>))}</CreditContainer></div>
    <div style={textStyles.descriptionContent}>{technologies ? <TechnologyContainer>{technologies}</TechnologyContainer> : <></>}</div>
    <div style={textStyles.descriptionContent}><LinkAndSourceContainer position={position}>{liveLinks ? <LinkContainer>{liveLinks}</LinkContainer> : <></>}{sourceLink ? <SourceContainer>{sourceLink}</SourceContainer> : <></>}</LinkAndSourceContainer></div>
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

const LinkAndSourceContainer = ({position, children}) => (
  <Grid container item direction={position%2 ? "row" : "row-reverse"} justify="flex-start" alignItems="center" spacing={9}>
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

export default SectionItem