import * as S from './InputStyle';

export default function Input({
  name,
  placeholder,
  width,
  margin,
  onChange,
  value,
}) {
  return (
    <S.Input
      type="text"
      placeholder={placeholder}
      width={width}
      margin={margin}
      name={name}
      onChange={onChange}
      value={value}
    ></S.Input>
  );
}
