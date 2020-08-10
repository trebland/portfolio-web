import React from 'react';
import { Grid } from '@material-ui/core';
import Repopit from 'images/repopit-dev-cover.png';
import OperationPortal from 'images/operation-portal-cover2.png';
import FocusPocus from 'images/focus-pocus-cover.png';
import AntiBody from 'images/anti-body.png';
import { SectionContainer, SectionHeader, SectionItem, LinkWrapper as LW} from '../sub-components/index.js';
import { HtmlIcon, JsIcon, CssIcon, ReactIcon, ReduxIcon, PostgreSqlIcon, DotNetIcon, FlutterIcon, MaterialUiIcon, AwsIcon, GithubIcon, WebIcon, AndroidIcon, IosIcon, MongoDbIcon, ExpressIcon, NodeJsIcon, CSharpIcon, UnityIcon } from '../../SvgIcons.js';

export default function Projects() {
    return (
        <div id="projects">
            <Grid container item direction="column" justify="flex-start" alignItems="center">
              
                <SectionContainer>
                    <SectionHeader headerTitle={"Latest Development"}/>
                    <SectionItem img={Repopit} title={"Repopit.dev"} internalLink={"/projects/repopit"} contributors={["Trevor Bland"]} 
                        technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><ReactIcon /><ReduxIcon /><MaterialUiIcon /><AwsIcon /></span>} 
                        liveLinks={<LW link={"https://repopit.dev"}><WebIcon /></LW>} sourceLink={<LW isGithub={true} link={"portfolio-web"}><GithubIcon /></LW>} 
                        date={"August 2020"} position={1}>
                            Its a REPOsitory PIT! Repopit.dev serves to showcase Trevor Bland's projects and provide additional information about him. This web portfolio serves to inform prospective employers and computer scientists on my prior experiences.
                    </SectionItem>
                </SectionContainer>

                <SectionContainer>
                    <SectionHeader headerTitle={"Full Stack"}/>
                    <SectionItem img={OperationPortal} title={"Operation Portal"} internalLink={"/projects/repopit"}
                        contributors={["Thomas Anchor","Scott Lee","Baldwin Suen","Jacqueline Van Der Meulen","Trevor Bland"]} 
                        technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><DotNetIcon /><PostgreSqlIcon /><ReactIcon /><FlutterIcon /><ReduxIcon /><MaterialUiIcon /><AwsIcon /></span>} 
                        liveLinks={<span><LW isAndroid={true} link={"org.orlandochildrenschurch.operationportal"}><AndroidIcon /></LW><LW isApple={true} link={"orlando-childrens-church/id1505236896?app=itunes&ign-mpt=uo%3D4"}><IosIcon /></LW><LW link={"https://www.operation-portal.com"}><WebIcon /></LW></span>} 
                        sourceLink={<LW isGithub={true} link={"OperationPortal"}><GithubIcon /></LW>} 
                        date={"April 2020"} position={2}>
                            A Mobile-Web application designed to improve Orlando Childrens Church ability to help at risk youth. Operation Portal helps their Saturday routines, giving them the ability to help feed and care for more kids during their volunteer routine. Please visit <LW link="http://orlandochildrenschurch.org/">Orlando Children's Church</LW> if you'd like to contribute to their cause.
                    </SectionItem>
                </SectionContainer>

                <SectionContainer>
                    <SectionHeader headerTitle={"Mobile Applications"}/>
                    <SectionItem img={FocusPocus} title={"Focus Pocus"} internalLink={"/projects/repopit"}
                        contributors={["Phillip Tat", "Zachary Arehart", "Rob Lee", "Trevor Bland"]} 
                        technologies={<span><HtmlIcon /><JsIcon /><CssIcon /><MongoDbIcon /><ExpressIcon /><ReactIcon /><NodeJsIcon /><FlutterIcon /><AwsIcon /></span>}
                        sourceLink={<LW isGithub={true} link={"FocusPocus"}><GithubIcon /></LW>} 
                        date={"December 2019"} position={3}>
                            "Hocus Pocus, Now You're More Focused!" Focus Pocus was created to manage your daily routines using an automatic timer switch. You'd input your routines and the allotment for them, and it would notify you when the routine should be completed and breaks should be taken.
                    </SectionItem>
                </SectionContainer>

                <SectionContainer>
                    <SectionHeader headerTitle={"Games"}/>
                    <SectionItem img={AntiBody} title={"Anti-Body"} internalLink={"/projects/repopit"} 
                        contributors={["David Lopez", "Trevor Bland", "Joseph Peaden", "Stephanie Peaden", "Chris Peaden", "Zachary Goodless"]}
                        technologies={<span><UnityIcon /><CSharpIcon /></span>} 
                        liveLinks={<span><LW link={"https://globalgamejam.org/2018/games/anti-body"}><WebIcon /></LW></span>} 
                        sourceLink={<LW isGithub={true} link={"Anti-Body"}><GithubIcon /></LW>} 
                        date={"January 2018"} position={4}>
                            Antibodies. Anti-Body displayed the game jam's theme of transmission via viruses and bacteria. Utilizing tower defense game mechanics, we managed to create this game in 72 hours with some members having minimal experience in C#.
                    </SectionItem>
                </SectionContainer>

            </Grid>
        </div>
    )
}