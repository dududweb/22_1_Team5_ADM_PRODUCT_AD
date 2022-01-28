import React from 'react';
import Nav from '../Component/Nav/Nav';
import Header from '../Component/Header/Header';
import styled from 'styled-components';
import ProductBasicInformation from './ProductBasicInformation/ProductBasicInformation';
import ProductOption from './ProductOption/ProductOption';
import SalesPeriod from './SalesPeriod/SalesPeriod';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import MileageSave from './MileageSave/MieageSave';
import OtherSettigns from './OtherSettings/OtherSettings';
import ProductNotice from './ProductNotice/ProductNotice';

export default function Main() {
  // const [startDate, setStartDate] = React.useState(null);
  // const [endDate, setEndDate] = React.useState(null);

  return (
    <Container>
      <Nav />
      <Header />
      <Wrapper>
        <SalesPeriod />
        <ProductBasicInformation />
        <ProductOption />
        <ProductNotice />
        <DeliveryInfo />
        <MileageSave />
        <OtherSettigns />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 110px 0 0 220px;
`;
