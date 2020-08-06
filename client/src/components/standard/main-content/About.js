import React from 'react';
import { Grid, Container } from '@material-ui/core';
import AboutCover from 'images/about-background2.jpg';
import ColgateCover from 'images/colgate-trevor.jpg';
import { SectionContainer, SectionHeader, SectionItem, LinkWrapper as LW} from '../sub-components/index.js';
import { HtmlIcon, JsIcon, CssIcon, ReactIcon, ReduxIcon, PostgreSqlIcon, DotNetIcon, FlutterIcon, MaterialUiIcon, AwsIcon, GithubIcon, WebIcon, AndroidIcon, IosIcon, MongoDbIcon, ExpressIcon, NodeJsIcon, CSharpIcon, UnityIcon } from '../../SvgIcons.js';

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

export default function About() {
    return (
        <div id="About">
            <Grid container item direction="column" justify="flex-start" alignItems="flex-start">
              <SectionContainer>
                <Grid container item direction="row" justify="center" alignItems="center" xs={9} style={{padding: 40}} className="section-item tertiary-color">
                  <Grid container item direction="column" justify="flex-start" alignItems="center" style={{paddingBottom: 20}}>
                    <h1 className="about-item caption">Fullstack, Game, and Mobile Application Developer.</h1>
                    <h4 className="about-item">Traveling, Competitive Gaming, Gardening, Modeling, and Voice Acting.</h4>
                  </Grid>
                  <Grid container item direction="row" justify="flex-start" alignItems="center" spacing={3}>
                    <Grid container item direction="column" justify="flex-start" alignItems="center" xs={6}>
                      <span style={{fontSize: 22, lineHeight: 1.8}}>I studied at Hillsborough Community College, University of Central Florida, and then a brief semester abroad at The Hong Kong Polytechnic University. Throughout my studies I found passion in new hobbies and learned how to learn. The new experiences, people, and places that I've encountered help me to become the person I am today.</span>
                    </Grid>
                    <Grid container item direction="column" justify="flex-start" alignItems="center" xs={6}>
                      <img style={imageStyles.coverStyle} src={AboutCover} alt={"The Hong Kong Polytechnic University Student Group"}></img>
                    </Grid>
                  </Grid>
                </Grid>
              </SectionContainer>
              {/* 
              <SectionContainer>
                  <h2><SectionHeader headerTitle={"Modeling"} linkDestination={"/fullstack"}/></h2>
                  <SectionItem img={<></>} title={"Repopit.dev"} internalLink={"/projects/repopit"} contributors={["Trevor Bland"]} 
                      technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><ReactIcon /><ReduxIcon /><MaterialUiIcon /><AwsIcon /></span>} 
                      liveLinks={<LW link={"https://repopit.dev"}><WebIcon /></LW>} sourceLink={<LW link={"portfolio-web"}><GithubIcon /></LW>} 
                      date={"August 2020"} position={1}/>
              </SectionContainer>
              <SectionContainer>
                    <h2><SectionHeader headerTitle={"Competitive Gaming"} linkDestination={"/fullstack"}/></h2>
                    <SectionItem img={<></>} title={"Repopit.dev"} internalLink={"/projects/repopit"} contributors={["Trevor Bland"]} 
                        technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><ReactIcon /><ReduxIcon /><MaterialUiIcon /><AwsIcon /></span>} 
                        liveLinks={<LW link={"https://repopit.dev"}><WebIcon /></LW>} sourceLink={<LW link={"portfolio-web"}><GithubIcon /></LW>} 
                        date={"August 2020"} position={1}/>
                </SectionContainer>
                <SectionContainer>
                    <h2><SectionHeader headerTitle={"Traveler"} linkDestination={"/fullstack"}/></h2>
                    <SectionItem img={<></>} title={"Repopit.dev"} internalLink={"/projects/repopit"} contributors={["Trevor Bland"]} 
                        technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><ReactIcon /><ReduxIcon /><MaterialUiIcon /><AwsIcon /></span>} 
                        liveLinks={<LW link={"https://repopit.dev"}><WebIcon /></LW>} sourceLink={<LW link={"portfolio-web"}><GithubIcon /></LW>} 
                        date={"August 2020"} position={1}/>
                </SectionContainer> 
                */}
            </Grid>
        </div>
    )
}