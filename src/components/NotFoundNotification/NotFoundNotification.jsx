import styled from 'styled-components';
import { Colors } from 'helpers/colors';
const Section = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${Colors.black};
`;
export function NotFoundNotification() {
  return (
    <Section>
      <h3>Oops! We can't find the page you're looking for</h3>
      <h4>You tried to request a page that doesn't exist </h4>
    </Section>
  );
}
