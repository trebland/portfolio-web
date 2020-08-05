import React from 'react';
import { Grid } from '@material-ui/core';
import ProfilePhoto from 'images/headshot.jpg';
import { Email, GitHub, LinkedIn, ExpandMore } from '@material-ui/icons';
import { useDispatch } from "react-redux";
import { selectPage } from "redux/actions/pageActions";
import ResumePdf from 'TrevorBland_Resume.pdf'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const imageStyles = {
    profile: {
      width: '100px',
      height: '100px',
      borderRadius: '50%'
    }
  }

const textStyles = {
    
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
    <div id="top-menu" >
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid container item direction="column" justify="flex-start" alignItems="center" xs>
                <img style={imageStyles.profile} src={ProfilePhoto} alt="Placeholder Text" />
                <div className="primary-font title">Trevor Bland</div>
                <div className="primary-font subtitle">Computer Scientist</div>
            </Grid>

            <Grid container item direction="column" justify="center" alignItems="center" style={{paddingLeft: 40}} xs>
                <button onClick={() => dispatch(selectPage("About"))} id="About" className="nav-link primary-font">About</button>
                <button onClick={() => dispatch(selectPage("Projects"))} id="Projects" className="nav-link primary-font">Projects</button>
                <a href={ResumePdf} id="Resume" className="nav-link primary-font">Resume</a>
            </Grid>
        </Grid>
        <Grid container item direction="row" justify="space-around" alignItems="center" xs>
            <a href="mailto:bland.trevor96@gmail.com" className="nav-link"><Email style={iconStyles.email} /></a>
            <a target="_blank" rel="noreferrer noopener" href="https://linkedin.com/in/trevor-bland-94b2941b4/" className="nav-link"><LinkedIn style={iconStyles.linkedIn} /></a>
            <a target="_blank" rel="noreferrer noopener" href="https://github.com/trebland" className="nav-link"><GitHub style={iconStyles.github} /></a>
        </Grid>
    </div>
  )
}

export default SideBar;