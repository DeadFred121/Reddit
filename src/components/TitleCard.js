import React from 'react';
import {
  Hero,
  Container,
  Title,
  SubTitle
} from 'reactbulma';


const TitleCard = () => (
  <Hero danger bold>
    <Hero.Body>
      <Container>
        <Title>Reddit</Title>
        <SubTitle>The front page of the internet!</SubTitle>
      </Container>
    </Hero.Body>
  </Hero>
)

export default TitleCard