import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiHtml53DEffects } from 'react-icons/di';

import { Section } from '../../styles/GlobalComponents';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, SocialContainer } from './HeaderStyles';
import Button from '../../styles/GlobalComponents/Button';

const Header = () =>  (
  <Section row nopadding style={{flexDirection:'column'}}>
  <Container>
    <Div1>
          <SocialIcons href="https://github.com/8ankur8">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ankur-gurjar-385918174">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/a_liveankur">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
    </Div1>
    <Div3>
     <a href="https://aliveankur.xyz" target="_blank">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" ,borderStyle :"solid"}}>
          <DiHtml53DEffects size="3.5rem" /> <span style={{fontWeight: 1000 ,fontSize : "2rem",padding: "0.75rem"}}> 3D Verison </span>
        </a>
      </a> 
      {/* <Button>
        <DiHtml53DEffects size="3.5rem" /> <span style={{fontWeight: 1000 ,fontSize : "2rem",padding: "0.4rem"}}> 3D Verison </span>
       </Button> */}
    </Div3>
    </Container>
    </Section> 
);

export default Header;
