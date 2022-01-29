import * as S from './InputStyle';

export default function Input({ placeholder, width, margin }) {
  return (
    <S.Input
      type="text"
      placeholder={placeholder}
      width={width}
      margin={margin}
    />
  );
}
