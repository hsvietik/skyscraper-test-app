import styled from 'styled-components';

export const Container = styled.div`
  width: 630px;
  height: 400px;
  position: relative;
`;
export const DealImage = styled.img``;
export const DealDataWrap = styled.div`
  position: absolute;
  width: 100%;
  padding: 20px 14px;
  bottom: 0px;
  left: 0px;
`;
export const DealTitle = styled.h3`
  margin-bottom: 5px;
  font-family: 'Merriweather', serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.7;
`;
export const DealData = styled.div`
  display: flex;
  column-gap: 60px;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const DealInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const DealInfo = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
