import React from 'react';
import { Grid } from '@material-ui/core';
import Repopit from '../../images/repopit-dev-cover.png';
import OperationPortal from '../../images/operation-portal-cover.png';
import FocusPocus from '../../images/focus-pocus-cover.png';
import AntiBody from '../../images/anti-body.png';
import { SectionContainer, SectionHeader, SectionItem, SectionDescription, LinkWrapper as LW} from '../sub-components/index.js';
import { HtmlIcon, JsIcon, CssIcon, ReactIcon, ReduxIcon, PostgreSqlIcon, DotNetIcon, FlutterIcon, MaterialUiIcon, AwsIcon, GithubIcon, WebIcon, AndroidIcon, IosIcon, MongoDbIcon, ExpressIcon, NodeJsIcon, CSharpIcon, UnityIcon } from '../SvgIcons.js';

export default function Projects() {
    return (
        <div id="Projects">
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
                <SectionContainer position={2}>
                    <h2><SectionHeader headerTitle={"Full Stack"} linkDestination={"/fullstack"}/></h2>
                    <SectionItem img={OperationPortal} title={"Operation Portal"} internalLink={"/projects/repopit"}>
                        <SectionDescription title={"Operation Portal"} contributors={["Thomas Anchor","Scott Lee","Baldwin Suen","Jacqueline Van Der Meulen","Trevor Bland"]} 
                        technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><DotNetIcon /><PostgreSqlIcon /><ReactIcon /><FlutterIcon /><ReduxIcon /><MaterialUiIcon /><AwsIcon /></span>} 
                        liveLinks={<span><LW link={"org.orlandochildrenschurch.operationportal"}><AndroidIcon /></LW><LW link={"orlando-childrens-church/id1505236896?app=itunes&ign-mpt=uo%3D4"}><IosIcon /></LW><LW link={"https://operation-portal.com"}><WebIcon /></LW></span>} 
                        sourceLink={<LW link={"portfolio-web"}><GithubIcon /></LW>} 
                        date={"April 2020"} />
                    </SectionItem>
                </SectionContainer>
                <SectionContainer position={3}>
                    <h2><SectionHeader headerTitle={"Mobile Applications"} linkDestination={"/mobile"}/></h2>
                    <SectionItem img={FocusPocus} title={"Focus Pocus"} internalLink={"/projects/repopit"}>
                        <SectionDescription title={"Focus Pocus"} contributors={["Phillip Tat", "Zachary Arehart", "Rob Lee", "Trevor Bland"]} 
                        technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><MongoDbIcon /><ExpressIcon /><ReactIcon /><NodeJsIcon /><FlutterIcon /><AwsIcon /></span>}
                        sourceLink={<LW link={"portfolio-web"}><GithubIcon /></LW>} 
                        date={"December 2019"} />
                    </SectionItem>
                </SectionContainer>
                <SectionContainer position={4}>
                    <h2><SectionHeader headerTitle={"Games"} linkDestination={"/games"}/></h2>
                    <SectionItem img={AntiBody} title={"Anti-Body"} internalLink={"/projects/repopit"}>
                        <SectionDescription title={"Anti-Body"} contributors={["David Lopez", "Trevor Bland", "Joseph Peaden", "Stephanie Peaden", "Chris Peaden", "Zachary Goodless"]}
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