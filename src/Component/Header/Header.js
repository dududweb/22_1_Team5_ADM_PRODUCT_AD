import * as S from './Header_Style';

export default function Header(props) {
  return (
    <S.Header>
      <S.Container />
      <S.Title>{props.head}</S.Title>
    </S.Header>
  );
}
