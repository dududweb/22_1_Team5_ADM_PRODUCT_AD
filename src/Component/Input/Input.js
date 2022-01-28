import * as S from './InputStyle';

export default function Input({ placeholder, width }) {
  return (
    <S.Input type="text" placeholder={placeholder} width={width}></S.Input>
  );
}
