import React from 'react';
import { Grid, Button } from '@material-ui/core';
import CoverImg from '../../images/website-wireframe.png';
import OperationPortal from '../../images/operation-portal.png';
import FocusPocus from '../../images/focus-pocus.png';
import AntiBody from '../../images/anti-body.png';
import ColgateTrevor from '../../images/colgate-trevor.jpg';
import { SectionContainer, SectionHeader, SectionItem } from '../sub-components/index';
import { HtmlIcon, JsIcon, CssIcon, ReactIcon, ReduxIcon, MaterialUiIcon, AwsIcon, GithubIcon, WebIcon, AndroidIcon, IosIcon } from '../../SvgIcons';

const imageStyles = {
    coverStyle: {
      // Left-Image
      width: '100%',
      maxHeight: '50vh',
      borderRadius: '20px',
    },
    profile: {
      width: '100%',
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
      paddingRight: '20px'
    }
}

/* Links */

const CreditContainer = ({children}) => (
  <span className="link-container">
    <h4 className="caption">Credits</h4>
    {children}
  </span>
)

const TechnologyContainer = ({children}) => (
  <span className="link-container">
    <h4 className="caption">Technologies</h4>
    {children}
  </span>
)

const LinkAndSourceContainer = ({linkChildren, sourceChildren}) => (
  <Grid container item direction="row" justify="flex-start" alignItems="center" spacing={9}>
    <LinkContainer>
      {linkChildren}
    </LinkContainer>
    <SourceContainer>
      {sourceChildren}
    </SourceContainer>
  </Grid>
)

const LinkContainer = ({children}) => (
  <Grid item className="link-container">
    <h4 className="caption">Links</h4>
    {children}
  </Grid>
)

const SourceContainer = ({children}) => (
  <Grid item className="source-container">
    <h4 className="caption">Source</h4>
    {children}
  </Grid>
)

const DateContainer = ({children}) => (
  <span className="source-container">
    <h4 className="caption">Released</h4>
    {children}
  </span>
)

const LinkWrapper = ({link, children}) => (
    <a target="_blank" rel="noreferrer noopener" href={link}>{children}</a>
)

export default function Projects() {
    return (
        <div id="Projects">
            <Grid container item direction="column" justify="flex-start" alignItems="center">
                <SectionContainer position={1}>
                    <h2><SectionHeader headerTitle={"Latest Development"} linkDestination={"/fullstack"}/></h2>
                    <SectionItem img={CoverImg} projectTitle={"Repopit.dev"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} 
                        projectTechnologies={<span><HtmlIcon /><JsIcon /><CssIcon /><ReactIcon /><ReduxIcon /><MaterialUiIcon /><AwsIcon /></span>} 
                        projectLinks={<SectionItem 
                          linkChildren={<span><WebIcon website={"https://repopit.dev"} /></span>} 
                          sourceChildren={<GithubIcon projectLink="portfolio-web"/>}/>} 
                        projectDate={"August 2020"} />
                </SectionContainer>
                <SectionContainer position={2}>
                    <h2><SectionHeader headerTitle={"Full Stack"} linkDestination={"/fullstack"}/></h2>
                    <SectionItem img={OperationPortal} projectTitle={"Operation Portal"} linkDestination={"/projects/repopit"} projectContributors={"Trevor Bland"} 
                        projectTechnologies={<span><HtmlIcon /><JsIcon /><CssIcon /><ReactIcon /><MaterialUiIcon /></span>} 
                        projectLinks={<SectionItem 
                          linkChildren={<span><LinkWrapper link={"org.orlandochildrenschurch.operationportal"}><AndroidIcon /></LinkWrapper><LinkWrapper link={"orlando-childrens-church/id1505236896?app=itunes&ign-mpt=uo%3D4"}><IosIcon /></LinkWrapper><LinkWrapper link={"https://repopit.dev"}><WebIcon /></LinkWrapper></span>} 
                          sourceChildren={<LinkWrapper link={"portfolio-web"}><GithubIcon /></LinkWrapper>} />}
                        projectDate={"April 2020"} />
                </SectionContainer>
                <SectionContainer position={3}>
                    <h2><SectionHeader headerTitle={"Mobile Applications"} linkDestination={"/mobile"}/></h2>
                    <SectionItem img={FocusPocus} projectTitle={"FocusPocus"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={"React, JavaScript, AWS, GitHub, HTML, CSS, Material.UI"} 
                        projectLinks={<SectionItem 
                          linkChildren={<span><AndroidIcon link={"org.orlandochildrenschurch.operationportal"}/><IosIcon link={"orlando-childrens-church/id1505236896?app=itunes&ign-mpt=uo%3D4"} /><WebIcon website={"https://repopit.dev"} /></span>} 
                          sourceChildren={<GithubIcon projectLink="portfolio-web"/>}/>} 
                        projectDate={"December 2019"} />
                </SectionContainer>
                <SectionContainer position={4}>
                    <h2><SectionHeader headerTitle={"Games"} linkDestination={"/games"}/></h2>
                    <SectionItem img={AntiBody} projectTitle={"Anti-Body"} linkDestination={"/projects/repopit"} 
                        projectContributors={"Trevor Bland"} projectTechnologies={"React, JavaScript, AWS, GitHub, HTML, CSS, Material.UI"}
                        projectLinks={<SectionItem 
                          linkChildren={<span><AndroidIcon link={"org.orlandochildrenschurch.operationportal"}/><IosIcon link={"orlando-childrens-church/id1505236896?app=itunes&ign-mpt=uo%3D4"} /><WebIcon website={"https://repopit.dev"} /></span>} 
                          sourceChildren={<GithubIcon projectLink="portfolio-web"/>}/>} 
                        projectDate={"January 2018"} />
                </SectionContainer>
            </Grid>
        </div>
    )
}