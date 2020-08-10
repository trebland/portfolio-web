import React from 'react';
import { Grid } from '@material-ui/core';
import AboutCover from 'images/profile-photo.png';
import { SectionContainer } from '../sub-components/index.js';

const imageStyles = {
  coverStyle: {
    maxWidth: '100%',
    maxHeight: '50vh',
    borderRadius: '20px',
  }
}

export default function About() {
    return (
        <div id="about">
            <Grid container item direction="column" justify="flex-start" alignItems="flex-start">
              <SectionContainer>
                  <Grid className="section-item tertiary-color" style={{padding: 40}} container item direction="column" justify="flex-start" alignItems="center">
                    <h1 className="about-item caption">Fullstack, Game, and Mobile Application Developer.</h1>
                    <h2 className="about-item">Traveler, Competitive Gamer, and Gardener.</h2>
                    <img style={imageStyles.coverStyle} src={AboutCover} alt={"The Hong Kong Polytechnic University Student Group"}></img>
                    <span className="about-item" style={{lineHeight: 1.4}}>I studied at Hillsborough Community College, University of Central Florida, and then a brief semester abroad at The Hong Kong Polytechnic University. Throughout my studies I found passion in new hobbies and learned how to learn. The new experiences, people, and places that I've encountered help me to become the person I am today.</span>
                  </Grid>
              </SectionContainer>
            </Grid>
        </div>
    )
}