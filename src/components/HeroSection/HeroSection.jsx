import React from 'react';
import { Hero, Picture, Text } from './HeroSection.styled';
import background from '../Header/phone-book-logo.png';

function HeroSection() {
  return (
    <Hero>
      <Picture src={background} alt="phonebook" />
      <div>
        <Text>
          Phonebook app ensures you will always have the latest and complete
          contact information and will never lose a contact anymore
        </Text>
        <Text>To use the Phonebook app Register or Log In</Text>
      </div>
    </Hero>
  );
}

export default HeroSection;
