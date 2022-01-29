import { useState } from 'react';
import * as S from './InputStyle';

export default function Input({
  name,
  placeholder,
  width,
  margin,
  onChange,
  value,
  type,
}) {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      width={width}
      margin={margin}
      name={name}
      onChange={onChange}
      value={value}
    ></S.Input>
  );
}
