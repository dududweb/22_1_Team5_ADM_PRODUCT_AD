import React from 'react';
import Nav from '../Component/Nav/Nav';
import Header from '../Component/Header/Header';
import styled from 'styled-components';
import ProductBasicInformation from './ProductBasicInformation/ProductBasicInformation';
import ProductOption from './ProductOption/ProductOption';

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
          <ProductBasicInformation />
          <ProductOption />
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
