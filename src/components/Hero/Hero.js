import React from 'react';

import { Section, SectionText, SectionTitle, SectionHead } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          AliveAnkur 
        </SectionTitle>
        <SectionHead>
        Immersive Craftzman
        </SectionHead>
        <SectionText>
        I'm a metaverser and freelancer from India who heavily influenced by storytelling, immersive interactions, and killer user experiences. Always down to learn and grow in the metaverse. When I'm not working, you can find me jamming out to music, creating visiable art, or slaying it in some games.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);


export default Hero;