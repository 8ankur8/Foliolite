import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';


import { BlogCard, Grid, TitleContent, UtilityList, SkillCard } from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SkillText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Technologies = () =>  (
  <Section nopadding id="projects">
    <SectionTitle style={{fontSize:"54px" , paddingTop:"36px"}} main>Main Skills</SectionTitle>
    
    <Grid>
     {["Dapp architecture, Strategic thinking, Storytelling, Tokenization" , 
     "Frontend, UX/UI, Smart contracts, AR/VR" ,
     "Solidity, JavaScript, CSS, HTML, React, Node, Canvas, SVG, WebGL, Glsl, C#/C++" ,
     "Figma, Blender, Photoshop, BIM"].map((project , index) => (<SkillCard key={index}>  <SkillText title> {project} </SkillText> </SkillCard>))}
    </Grid>
    <SectionDivider />
  </Section>
);

export default Technologies;

