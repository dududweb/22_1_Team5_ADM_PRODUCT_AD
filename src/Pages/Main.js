import React from 'react';
import Nav from '../Component/Nav/Nav';
import Add from '../Component/Add/Add';
import Header from '../Component/Header/Header';
import DatePickerPage from '../Component/DatePicker/DatePicker';
import ImageUploder from '../Component/ImageUploder/ImageUploder';
import styled from 'styled-components';

export default function Main() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  return (
    <>
      <Container>
        <Nav />
        <Wrapper>
          <Header />
          <Add />
        </Wrapper>
      </Container>
      <DatePickerPage
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <ImageUploder />
    </>
  );
}

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
`;
