import styled from 'styled-components';
import { Colors } from '../../helpers/colors';
import { Transition } from 'helpers/transition';

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  font-family: 'Merriweather', serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.37;
  color: ${Colors.brown};
`;

export const LogOutButton = styled.button`
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
