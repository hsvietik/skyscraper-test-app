import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { List } from './OpenDeals.styled';
import { Deal } from '../Deal/Deal';
import data from '../../assets/data';
import { Container, Title } from './OpenDeals.styled';
import { fetchDeals } from '../../helpers/fetchDeals';

export const OpenDeals = () => {
  const [fetchedDeals, setFetchedDeals] = useState([]);
  const deals = fetchedDeals.length ? fetchedDeals : data;

  useEffect(() => {
    async function loadDeals() {
      try {
        const response = await fetchDeals({});
        setFetchedDeals(response.data);
      } catch (error) {
        if (error.code) {
          return toast.error(`Oops, something went wrong.`);
        }
      }
    }
    loadDeals();
  }, []);

  return (
    <Container>
      <Title>Open Deals</Title>
      <List>
        {deals.map(deal => {
          return (
            <li key={deal.id}>
              <Deal deal={deal} />
            </li>
          );
        })}
      </List>
      <Toaster />
    </Container>
  );
};
