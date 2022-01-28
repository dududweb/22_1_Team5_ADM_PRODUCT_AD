import * as S from './EarlyOrder_Style';
import { useState } from 'react';
import ToggleButton from '../../Component/ToggleButton/ToggleButton';
import DatePicker from '../../Component/DatePicker/DatePicker';

export default function CustomDepartDate() {
  const [value, setValue] = useState(false);
  const id = 'a3';
  return (
    <>
      <ToggleButton id={id} value={value} setValue={setValue}></ToggleButton>
      <S.DatePickerWrap>
        <S.DateTitle>주문시간</S.DateTitle>
        <DatePicker />
      </S.DatePickerWrap>
      <S.DatePickerWrap>
        <S.DateTitle>새벽배송</S.DateTitle>
        <DatePicker />
      </S.DatePickerWrap>
    </>
  );
}
