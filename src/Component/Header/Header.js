import * as S from './Header_Style';
import SaveButton from '../Button/SaveButton';

export default function Header() {
  return (
    <S.Header>
      <S.Container />
      <S.Title>
        상품등록
        <SaveButton />
      </S.Title>
    </S.Header>
  );
}
