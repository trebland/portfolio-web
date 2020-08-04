import React from 'react';
import { Grid } from '@material-ui/core';

const imageStyles = {
    coverStyle: {
      // Left-Image
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

const SectionItem = ({img, title, internalLink, position, children}) => (
    <Grid container className={"segment secondary-font"} item direction={position%2 ? "row" : "row-reverse"} justify="center" alignItems="center" spacing={3}>
      <Grid container item direction="column" justify="center" alignItems="center"xs={12} sm={6}>            
        <ImageText internalLink={internalLink} title={title}>
          <Grid container item direction="row" justify="center" alignItems="center" xs={12}>            
              <img style={imageStyles.coverStyle} src={img} alt="Placeholder Text"/>            
          </Grid>
        </ImageText>
      </Grid>
      <Grid style={position%2 ? textStyles.descriptionContentLeft : textStyles.descriptionContentRight} container item direction="column" justify="center" alignItems="center" xs={12} sm={6}>        
        {children}
      </Grid>
    </Grid>
)

const ImageText = ({title, internalLink, children}) => (
    <div style={imageStyles.coverStyle} className="img__wrap">
      <div className="img__img">{children}</div>
      <a style={{borderRadius: '20px'}} href={internalLink} className="img__description img__text">Read more about {title}</a>
    </div>
)

export default SectionItem

