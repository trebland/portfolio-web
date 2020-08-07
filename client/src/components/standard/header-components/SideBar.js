import React from 'react';
import { Grid } from '@material-ui/core';
import ProfilePhoto from 'images/headshot.jpg';
import { Email, GitHub, LinkedIn, ExpandMore } from '@material-ui/icons';
import { useDispatch } from "react-redux";
import { selectPage } from "redux/actions/pageActions";
import ResumePdf from '../../../TrevorBland_Resume.pdf'

const imageStyles = {
    profile: {
      width: '50%',
      borderRadius: '50%'
    }
  }

const textStyles = {
    profileTitle: {
      color: 'white', 
      fontSize: 28, 
    },
    profileSubTitle: {
      color: 'white', 
      fontSize: 20,
      marginBottom: '40px' 
    }
}

const iconStyles = {
  email: {
    fontSize: 50,
  },
  linkedIn: {
    fontSize: 50,
  },
  github: {
    fontSize: 50,
  }
}

export function SideBar() {
  const dispatch = useDispatch();

  return (
    <div id="left-menu" >
        <Grid container direction="column" justify="flex-start" alignItems="center" spacing={3}>
            <Grid container item direction="column" justify="flex-start" alignItems="center" xs>
            <img style={imageStyles.profile} src={ProfilePhoto} alt="Trevor Bland" />
                <h2 className="primary-font white">Trevor Bland</h2>
                <h3 className="primary-font white">Computer Scientist</h3>
            </Grid>

            <Grid container item direction="column" justify="flex-start" alignItems="flex-start" style={{paddingLeft: 40}} xs>
                <button onClick={() => dispatch(selectPage("About"))} id="About__button" className="nav-link primary-font">About</button>
                <button onClick={() => dispatch(selectPage("Projects"))} id="Projects__button" className="nav-link primary-font">Projects</button>
                <a href={ResumePdf} id="Resume__button" className="nav-link primary-font">Resume</a>
            </Grid>

            <Grid container item direction="row" justify="space-around" alignItems="center" xs>
              <a aria-label="Email Link" href="mailto:bland.trevor96@gmail.com" className="nav-link"><Email style={iconStyles.email} /></a>
              <a aria-label="LinkedIn Link" target="_blank" rel="noreferrer noopener" href="https://linkedin.com/in/trevor-bland-94b2941b4/" className="nav-link"><LinkedIn style={iconStyles.linkedIn} /></a>
              <a aria-label="GitHub Link" target="_blank" rel="noreferrer noopener" href="https://github.com/trebland" className="nav-link"><GitHub style={iconStyles.github} /></a>
            </Grid>
        </Grid>
    </div>
  )
}

export default SideBar;