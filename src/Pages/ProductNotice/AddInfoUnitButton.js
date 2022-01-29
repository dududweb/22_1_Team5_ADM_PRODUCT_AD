import * as S from './AddInfoUnitButton_Style';

export default function AddInfoUnitButton({ onCreate }) {
  return (
    <S.AddInfoUnitButton onClick={onCreate}>+ 항목 추가</S.AddInfoUnitButton>
  );
}
