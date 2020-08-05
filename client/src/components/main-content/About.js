import React from 'react';
import { Grid } from '@material-ui/core';
import { SectionContainer, SectionHeader, SectionItem, LinkWrapper as LW} from '../sub-components/index.js';
import { HtmlIcon, JsIcon, CssIcon, ReactIcon, ReduxIcon, MaterialUiIcon, AwsIcon, GithubIcon, WebIcon } from '../SvgIcons.js';

export default function About() {
    return (
        <div id="About">
            <Grid container item direction="column" justify="flex-start" alignItems="flex-start">
              <SectionContainer className="background">
              </SectionContainer>
            </Grid>
        </div>
    )
}