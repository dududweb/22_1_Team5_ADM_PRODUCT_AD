import React from 'react';
import Nav from '../Component/Nav/Nav';
import Header from '../Component/Header/Header';
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
          <ProductBasicInformation />
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  margin-top: 66px;
  padding: 20px 0 0 20px;
  width: 100%;
`;
