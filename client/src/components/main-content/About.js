import React from 'react';
import { Grid } from '@material-ui/core';
import Repopit from '../../images/website-wireframe.png';
import { SectionContainer, SectionHeader, SectionItem, SectionDescription, LinkWrapper as LW} from '../sub-components/index.js';
import { HtmlIcon, JsIcon, CssIcon, ReactIcon, ReduxIcon, MaterialUiIcon, AwsIcon, GithubIcon, WebIcon } from '../SvgIcons.js';

export default function About() {
    return (
        <div id="About">
            <Grid container item direction="column" justify="flex-start" alignItems="center">
              <SectionContainer position={1}>
                  <h2><SectionHeader headerTitle={"Latest Development"} linkDestination={"/fullstack"}/></h2>
                  <SectionItem img={Repopit} title={"Repopit.dev"} internalLink={"/projects/repopit"}>
                      <SectionDescription title={"Repopit.dev"} contributors={["Trevor Bland"]} 
                      technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><ReactIcon /><ReduxIcon /><MaterialUiIcon /><AwsIcon /></span>} 
                      liveLinks={<LW link={"https://repopit.dev"}><WebIcon /></LW>} sourceLink={<LW link={"portfolio-web"}><GithubIcon /></LW>} 
                      date={"August 2020"} />
                  </SectionItem>
              </SectionContainer>
            </Grid>
        </div>
    )
}