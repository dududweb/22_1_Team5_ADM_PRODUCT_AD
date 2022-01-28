import * as S from './ToggleButton_Style';

export default function ToggleButton({ value, setValue, id }) {
  return (
    <S.CheckBoxWrapper>
      <S.CheckBox id={id} type="checkbox" />
      <S.CheckBoxLabel htmlFor={id} />
    </S.CheckBoxWrapper>
  );
}
