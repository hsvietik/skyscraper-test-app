import styled from 'styled-components';
import { Colors } from 'helpers/colors';

export const Container = styled.section`
  max-width: 1440px;
  margin: 0px auto;
  padding: 50px 80px;
`;
export const Title = styled.h2`
  margin-bottom: 20px;
  font-family: 'Merriweather', serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;
  color: ${Colors.brown};
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
