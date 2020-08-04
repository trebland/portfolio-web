import React from 'react';
import { Grid } from '@material-ui/core';
import ColgateTrevor from '../../images/colgate-trevor.jpg';
import { SectionContainer, SectionHeader, SectionItem, SectionDescription, LinkWrapper as LW} from '../sub-components/index.js';
import { WebIcon } from '../../SvgIcons.js';

export default function Modeling() {
    return (
        <div id="Modeling">
            <Grid container item direction="column" justify="flex-start" alignItems="center">
                <SectionContainer position={4}>
                    <h2><SectionHeader headerTitle={"Modeling"} linkDestination={"/modeling"}/></h2>
                    <SectionItem img={ColgateTrevor} title={"Student Colgate Campaign"} internalLink={"/projects/repopit"}>
                        <SectionDescription title={"Student Colgate Campaign"} contributors={["Debora Sobczak","Magdalena Wycislik","Trevor Bland"]}
                        liveLinks={<span><LW link={"https://deborasobczak.com/brands/colgate"}><WebIcon /></LW></span>}
                        date={"May 2020"} />
                    </SectionItem>
                </SectionContainer>
            </Grid>
        </div>
    )
}