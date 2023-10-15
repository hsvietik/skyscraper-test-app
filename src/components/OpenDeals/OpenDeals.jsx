import { List } from './OpenDeals.styled';
import { Deal } from '../Deal/Deal';
import data from '../../assets/data';
import { Container, Title } from './OpenDeals.styled';

export const OpenDeals = () => {
  return (
    <Container>
      <Title>Open Deals</Title>
      <List>
        {data.map(deal => {
          return (
            <li key={deal.id}>
              <Deal deal={deal} />
            </li>
          );
        })}
      </List>
    </Container>
  );
};
