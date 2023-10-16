import axios from 'axios';

export async function fetchDeals() {
  const response = await axios.get(`http://localhost:3001/skyscraper`);
  return response;
}
