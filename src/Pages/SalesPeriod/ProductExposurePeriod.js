import React, { useState } from 'react';
import * as S from './ProductExposurePeriod_Style';
import DatePicker from '../../Component/DatePicker/DatePicker';

export default function ProductExposurePeriod() {
  const [select, setSelect] = useState('noLimit');
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handleSelectChange = e => {
    setSelect(e.target.value);
  };
  return (
    <S.Wrap>
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
  );
}
