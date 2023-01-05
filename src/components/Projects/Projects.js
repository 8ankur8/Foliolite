import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionHead } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsList = ['project 1','project 2']

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle style={{fontSize:"54px" , paddingTop:" 36px"}} main>Projects</SectionTitle>
    <GridContainer>
    {projects.map((p, i) => {
        return (<BlogCard key={i}> <a href={p.visit} target="_blank" ><SectionHead style={{ paddingBottom:" 6px"}} title> {p.title} </SectionHead> </a></BlogCard>)})}
    </GridContainer>
    <SectionDivider />
  </Section>
);

export default Projects;
