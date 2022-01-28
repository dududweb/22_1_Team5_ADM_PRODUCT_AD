import React from 'react';
import Nav from '../Component/Nav/Nav';
import Header from '../Component/Header/Header';
import DatePickerPage from '../Component/DatePicker/DatePicker';
import ImageUploder from '../Component/ImageUploder/ImageUploder';
import ProductNotice from './ProductNotice/ProductNotice';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import styled from 'styled-components';
import ProductBasicInformation from './ProductBasicInformation/ProductBasicInformation';

export default function Main() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const head = '상품등록';

  return (
    <>
      <Container>
        <Nav />
        <Header head={head} />
        <Wrapper>
          <Header />
          <Add />
          <ProductNotice />
          <DeliveryInfo />
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 110px 0 0 220px;
`;
