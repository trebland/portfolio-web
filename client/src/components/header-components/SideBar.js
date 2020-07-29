import React from 'react';
import { Grid } from '@material-ui/core';
import ProfilePhoto from '../../images/headshot.jpg';

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
      textAlign: 'left'
    }
  }

function SideBar() {
    return (
        <div className="left-menu" >
            <Grid container direction="column" justify="flex-start" alignItems="center">
                <Grid container item direction="column" justify="flex-start" alignItems="center" xs>
                    <img style={imageStyles.profile} src={ProfilePhoto} alt="Placeholder Text" />
                    <div className="profile-font" style={textStyles.profileTitle}>Trevor Bland</div>
                    <div className="profile-font" style={textStyles.profileSubTitle}>Computer Scientist</div>
                </Grid>
                <Grid container item direction="column" justify="flex-start" alignItems="center" xs>
                    <div style={textStyles.navigationTitle}>About</div>
                    <div style={textStyles.navigationTitle}>Fullstack</div>
                    <div style={textStyles.navigationTitle}>Mobile Applications</div>
                    <div style={textStyles.navigationTitle}>Games</div>
                    <div style={textStyles.navigationTitle}>Modeling</div>
                </Grid>
                <Grid container item direction="column" justify="flex-end" alignItems="flex-start" xs>
                    <p className="profile-font" style={textStyles.email}>Contact: bland.trevor96@gmail.com</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default SideBar;