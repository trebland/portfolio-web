import React from 'react';
import { Grid, Button } from '@material-ui/core';
import CoverImg from '../../images/website-wireframe.png';
import OperationPortal from '../../images/operation-portal.png';
import FocusPocus from '../../images/focus-pocus.png';
import AntiBody from '../../images/anti-body.png';
import ColgateTrevor from '../../images/colgate-trevor.jpg';
import { SectionContainer, SectionHeader, SectionItem, SectionDescription, LinkWrapper as LW} from '../sub-components/index.js';
import { HtmlIcon, JsIcon, CssIcon, ReactIcon, ReduxIcon, PostgreSqlIcon, DotNetIcon, FlutterIcon, MaterialUiIcon, AwsIcon, GithubIcon, WebIcon, AndroidIcon, IosIcon, MongoDbIcon, ExpressIcon, NodeJsIcon, CSharpIcon, UnityIcon } from '../../SvgIcons.js';

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

export default function Projects() {
    return (
        <div id="Projects">
            <Grid container item direction="column" justify="flex-start" alignItems="center">
                <SectionContainer position={1}>
                    <h2><SectionHeader headerTitle={"Latest Development"} linkDestination={"/fullstack"}/></h2>
                    <SectionItem img={CoverImg} title={"Repopit.dev"} internalLink={"/projects/repopit"}>
                        <SectionDescription title={"Repopit.dev"} contributors={"Trevor Bland"} 
                        technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><ReactIcon /><ReduxIcon /><MaterialUiIcon /><AwsIcon /></span>} 
                        liveLinks={<LW link={"https://repopit.dev"}><WebIcon /></LW>} sourceLink={<LW link={"portfolio-web"}><GithubIcon /></LW>} 
                        date={"August 2020"} />
                    </SectionItem>
                </SectionContainer>
                <SectionContainer position={2}>
                    <h2><SectionHeader headerTitle={"Full Stack"} linkDestination={"/fullstack"}/></h2>
                    <SectionItem img={OperationPortal} title={"Operation Portal"} internalLink={"/projects/repopit"}>
                        <SectionDescription title={"Operation Portal"} contributors={"Trevor Bland"} 
                        technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><DotNetIcon /><PostgreSqlIcon /><ReactIcon /><FlutterIcon /><ReduxIcon /><MaterialUiIcon /><AwsIcon /></span>} 
                        liveLinks={<span><LW link={"org.orlandochildrenschurch.operationportal"}><AndroidIcon /></LW><LW link={"orlando-childrens-church/id1505236896?app=itunes&ign-mpt=uo%3D4"}><IosIcon /></LW><LW link={"https://operation-portal.com"}><WebIcon /></LW></span>} 
                        sourceLink={<LW link={"portfolio-web"}><GithubIcon /></LW>} 
                        date={"April 2020"} />
                    </SectionItem>
                </SectionContainer>
                <SectionContainer position={3}>
                    <h2><SectionHeader headerTitle={"Mobile Applications"} linkDestination={"/mobile"}/></h2>
                    <SectionItem img={FocusPocus} title={"Focus Pocus"} internalLink={"/projects/repopit"}>
                        <SectionDescription title={"Focus Pocus"} contributors={"Trevor Bland"} 
                        technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><MongoDbIcon /><ExpressIcon /><ReactIcon /><NodeJsIcon /><FlutterIcon /><AwsIcon /></span>}
                        sourceLink={<LW link={"portfolio-web"}><GithubIcon /></LW>} 
                        date={"December 2019"} />
                    </SectionItem>
                </SectionContainer>
                <SectionContainer position={4}>
                    <h2><SectionHeader headerTitle={"Games"} linkDestination={"/games"}/></h2>
                    <SectionItem img={AntiBody} title={"Anti-Body"} internalLink={"/projects/repopit"}>
                        <SectionDescription title={"Anti-Body"} contributors={"Trevor Bland"} 
                        technologies={<span><UnityIcon /><CSharpIcon /></span>} 
                        liveLinks={<span><LW link={"https://globalgamejam.org/2018/games/anti-body"}><WebIcon /></LW></span>} 
                        sourceLink={<LW link={"portfolio-web"}><GithubIcon /></LW>} 
                        date={"January 2018"} />
                    </SectionItem>
                </SectionContainer>
            </Grid>
        </div>
    )
}