import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from 'helpers/colors';
import { Transition } from '../../helpers/transition';
import backgroundImage from '../../assets/skyscraper-main.jpg';

export const Section = styled.section`
  height: 100vh;
  padding: 297px 150px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 64px;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  line-height: 1.25;
`;

export const Text = styled.p`
  margin-bottom: 30px;
  max-width: 822px;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -0.48px;
`;

export const Button = styled(Link)`
  display: block;
  padding: 10px 24px;
  border: 1px solid ${Colors.white};
  border-radius: 8px;
  background-color: transparent;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -0.48px;
  transition: background-color;
  transition-duration: ${Transition.duration};
  transition-timing-function: ${Transition.transitionTiming};
  &:hover,
  &:focus {
    background-color: ${Colors.brown};
  }
`;
