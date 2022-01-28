import React, { useState } from 'react';
import * as S from './SalesPeriodCheckBox_Style';
import DatePicker from '../../Component/DatePicker/DatePicker';

export default function SalesPeriodCheckBox() {
  const [pick, setPick] = useState('noPeriod');
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handlePickChange = e => {
    setPick(e.target.value);
  };
  return (
    <S.Wrap>
      <S.Item>
        <S.RadioButton
          type="radio"
          value="noPeriod"
          checked={pick === 'noPeriod'}
          onChange={handlePickChange}
        />
        <S.RadioButtonLabel />
        <div>제한 없음</div>
      </S.Item>
      <S.Item>
        <S.RadioButton
          type="radio"
          value="unSales"
          checked={pick === 'unSales'}
          onChange={handlePickChange}
        />
        <S.RadioButtonLabel />
        <div>미판매</div>
      </S.Item>
      <S.Item>
        <S.RadioButton
          type="radio"
          value="salesPeriodSetting"
          checked={pick === 'salesPeriodSetting'}
          onChange={handlePickChange}
        />
        <S.RadioButtonLabel />
        <div>판매기간 설정</div>
      </S.Item>
      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    </S.Wrap>
  );
}
