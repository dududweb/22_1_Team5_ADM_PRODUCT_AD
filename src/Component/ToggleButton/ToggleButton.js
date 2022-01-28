import * as S from './ToggleButton_Style';
import { useState } from 'react';

export default function ToggleButton() {
  const [value, setValue] = useState(false);
  //셋 밸류가 true상태이면 버튼이 켜진 상태, false면 꺼진상태
  return (
    <S.CheckBoxWrapper>
      <S.CheckBox id="checkbox" type="checkbox" />
      <S.CheckBoxLabel htmlFor="checkbox" />
    </S.CheckBoxWrapper>
  );
}
