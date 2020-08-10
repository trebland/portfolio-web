import React from 'react';
import { Grid } from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import ResumePdf from 'TrevorBland_Resume.pdf'

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
  return (
    <div id="top-menu" >
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid container item direction="column" justify="flex-start" alignItems="center" style={{paddingTop: '20px'}} xs>
                <h2 className="primary-font title orange">Trevor Bland</h2>
                <h3 className="primary-font subtitle">Computer Scientist</h3>
            </Grid>

            <Grid container item direction="column" justify="center" alignItems="center" xs>
                <a id="About__button" href={"/#about"} className="nav-link primary-font">About</a>
                <a id="Projects__button" href={"/#projects"} className="nav-link primary-font">Projects</a>
                <a id="Resume__button" href={ResumePdf} className="nav-link primary-font">Resume</a>
            </Grid>
        </Grid>
        <Grid container item direction="row" justify="space-around" alignItems="center" xs>
            <a aria-label="Email Link" href="mailto:bland.trevor96@gmail.com" className="nav-link"><Email style={iconStyles.email} /></a>
            <a aria-label="LinkedIn Link" target="_blank" rel="noreferrer noopener" href="https://linkedin.com/in/trevor-bland-94b2941b4/" className="nav-link"><LinkedIn style={iconStyles.linkedIn} /></a>
            <a aria-label="GitHub Link" target="_blank" rel="noreferrer noopener" href="https://github.com/trebland" className="nav-link"><GitHub style={iconStyles.github} /></a>
        </Grid>
    </div>
  )
}

export default SideBar;