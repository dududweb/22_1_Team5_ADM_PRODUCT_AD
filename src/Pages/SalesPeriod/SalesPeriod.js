import React, { useState } from 'react';
import * as S from './SalesPeriod_Style';
import Nav from '../../Component/Nav/Nav';
import Header from '../../Component/Header/Header';
import SaveButton from '../../Component/Button/SaveButton';
import DatePicker from '../../Component/DatePicker/DatePicker';

export default function SalesPeriod() {
  const [select, setSelect] = useState('noLimit');
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handleSelectChange = e => {
    setSelect(e.target.value);
  };

  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <Header>
          <SaveButton />
        </Header>
        <S.SalesPeriod>노출 및 판매기간 설정</S.SalesPeriod>
        <S.Wrap>
          <S.Exposureperiod>상품 노출 기한</S.Exposureperiod>

          <S.Item>
            <S.RadioButton
              type="radio"
              name="radio"
              value="noLimit"
              checked={select === 'noLimit'}
              onChange={handleSelectChange}
            />
            <S.RadioButtonLabel />
            <div>제한 없음</div>
          </S.Item>
          <S.Item>
            <S.RadioButton
              type="radio"
              name="radio"
              value="unexposed"
              checked={select === 'unexposed'}
              onChange={handleSelectChange}
            />
            <S.RadioButtonLabel />
            <div>미노출</div>
          </S.Item>
          <S.Item>
            <S.RadioButton
              type="radio"
              name="radio"
              value="exposurePeriodSetting"
              checked={select === 'exposurePeriodSetting'}
              onChange={handleSelectChange}
            />
            <S.RadioButtonLabel />
            <div>노출기간 설정</div>
          </S.Item>
          <DatePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </S.Wrap>
        <S.Salesdeadline>상품 판매 기한</S.Salesdeadline>
      </S.Wrapper>
    </S.Container>
  );
}
