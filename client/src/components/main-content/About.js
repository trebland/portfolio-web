import React from 'react';
import { Grid } from '@material-ui/core';
import { SectionContainer, SectionHeader, SectionItem, SectionDescription, LinkWrapper as LW} from '../sub-components/index.js';
import { HtmlIcon, JsIcon, CssIcon, ReactIcon, ReduxIcon, MaterialUiIcon, AwsIcon, GithubIcon, WebIcon } from '../SvgIcons.js';

export default function About() {
    return (
        <div id="About">
            <Grid container item direction="column" justify="flex-start" alignItems="flex-start">
              <SectionContainer position={1} classNames="background">
                <Grid item xs>
                  <div style={{backgroundColor: '#FFF', color: '#000', padding: '20px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}>The Hong Kong Polytechnic University</div>
                </Grid>
                <Grid style={{backgroundColor: '#FFF', color: '#000', padding: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', width: '100%', height: '10%'}} item>
                  <div>I've been programming for the last 9 years of my life, 4 of which were in a formal setting at the University of Central Florida. I've </div>
                </Grid>
              </SectionContainer>
            </Grid>
        </div>
    )
}