import React from 'react';
import Nav from '../Component/Nav/Nav';
import Add from '../Component/Add/Add';
import Header from '../Component/Header/Header';
import DatePickerPage from '../Component/DatePicker/DatePicker';
import ImageUploder from '../Component/ImageUploder/ImageUploder';

export default function Main() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  return (
    <>
      <DatePickerPage
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <ImageUploder />
      <Nav />
      <Header />
      <Add />
    </>
  );
}
