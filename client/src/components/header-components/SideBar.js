import React from 'react';
import { Grid } from '@material-ui/core';
import ProfilePhoto from '../../images/headshot.jpg';
import IconButton from '@material-ui/core/IconButton';
import { Email, GitHub, ExpandMore } from '@material-ui/icons';

const imageStyles = {
    coverStyle: {
      // Left-Image
      maxWidth: '100%',
      maxHeight: '80vh'
    },
    profile: {
      width: '50%',
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
      marginBottom: '40px' 
    },
    sectionTitle: {
      color: 'white',
      fontSize: 40,
      marginBottom: '40px'
    },
    email: {
      color: 'white',
      textAlign: 'left'
    }
}

const iconStyles = {
  email: {
    fontSize: 50,
  },
  github: {
    fontSize: 50,
  }
}

function SideBar() {
    return (
        <div className="left-menu" >
            <Grid container direction="column" justify="flex-start" alignItems="center" xs={12} spacing={3}>
                <Grid container item direction="column" justify="flex-start" alignItems="center" xs>
                    <img style={imageStyles.profile} src={ProfilePhoto} alt="Placeholder Text" />
                    <div className="primary-font" style={textStyles.profileTitle}>Trevor Bland</div>
                    <div className="primary-font" style={textStyles.profileSubTitle}>Computer Scientist</div>
                </Grid>
                <Grid container item direction="column" justify="flex-start" alignItems="flex-start" xs>
                    <a href="/about" className="nav-link primary-font">About</a>
                    <a href="/fullstack" className="nav-link primary-font">Fullstack</a>
                    <a href="/mobile" className="nav-link primary-font">Mobile Applications</a>
                    <a href="/games" className="nav-link primary-font">Games</a>
                    <a href="/modeling" className="nav-link primary-font">Modeling</a>
                </Grid>
                <Grid container item direction="row" justify="space-around" alignItems="center" xs>
                  <a href="mailto:bland.trevor96@gmail.com" className="nav-link"><Email style={iconStyles.email} /></a>
                  <a target="_blank" rel="noreferrer noopener" href="https:github.com/trebland" className="nav-link"><GitHub style={iconStyles.github} /></a>
                </Grid>
            </Grid>
        </div>
    )
}

export default SideBar;