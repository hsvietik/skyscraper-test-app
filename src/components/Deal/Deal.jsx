import {
  Container,
  DealDataWrap,
  DealImage,
  DealData,
  DealTitle,
  DealInfoWrap,
  DealInfo,
} from './Deal.styled';

export const Deal = ({ deal }) => {
  const toFormatNumber = number => {
    const formattedNumber = new Intl.NumberFormat('ru-RU').format(number);
    return formattedNumber;
  };
  const toCountDaysLeft = date => {
    const deadline = new Date(date);
    const today = new Date();
    const differenceInDays = Math.floor(
      (deadline - today) / (1000 * 60 * 60 * 24)
    );
    return differenceInDays;
  };
  return (
    <Container>
      <DealImage src={deal.picture} alt={deal.name} />
      <DealDataWrap>
        <DealTitle>{deal.name}</DealTitle>
        <DealData>
          <DealInfoWrap>
            <DealInfo>{toFormatNumber(deal.price)} Dhs</DealInfo>
            <DealInfo>Ticket - {toFormatNumber(deal.ticket)} Dhs</DealInfo>
          </DealInfoWrap>
          <DealInfoWrap>
            <DealInfo>Yield {deal.yield}%</DealInfo>
            <DealInfo>Days left {toCountDaysLeft(deal.deadline)} </DealInfo>
          </DealInfoWrap>
          <DealInfoWrap>
            <DealInfo>Sold {deal.sold}%</DealInfo>
          </DealInfoWrap>
        </DealData>
      </DealDataWrap>
    </Container>
  );
};
