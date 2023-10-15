import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Colors } from '../../helpers/colors';
import { Transition } from '../../helpers/transition';

export const AuthNavigation = styled.ul`
  display: flex;
  gap: 10px;
  font-family: 'Merriweather', serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.37;
  text-align: center;
`;

export const LogIn = styled(NavLink)`
  display: block;
  min-width: 160px;
  padding: 11px;
  border-radius: 5px;
  border: 1px solid ${Colors.brown};
  color: ${Colors.brown};
  background-color: transparent;
  transition-property: color, background-color;
  transition-duration: ${Transition.duration};
  transition-timing-function: ${Transition.transitionTiming};
  &:hover,
  &:focus {
    color: ${Colors.white};
    background-color: ${Colors.brown};
  }
`;
export const SignUp = styled(NavLink)`
  display: block;
  min-width: 160px;
  padding: 11px;
  border-radius: 5px;
  border: 1px solid ${Colors.brown};
  color: ${Colors.white};
  background-color: ${Colors.brown};
  transition-property: color, background-color;
  transition-duration: ${Transition.duration};
  transition-timing-function: ${Transition.transitionTiming};

  &:hover,
  &:focus {
    color: ${Colors.brown};
    background-color: transparent;
  }
`;
