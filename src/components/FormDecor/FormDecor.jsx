import styled from 'styled-components';
import backgroundImage from '../../assets/skyscraper-login.jpg';

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const StyledContainer = styled.div`
  width: 60vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormDecor = ({ children }) => {
  return (
    <Container>
      <StyledContainer />
      {children}
    </Container>
  );
};

export default FormDecor;
