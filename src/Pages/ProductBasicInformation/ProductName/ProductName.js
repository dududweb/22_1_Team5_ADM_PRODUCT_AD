import React from 'react';
import * as S from './ProductName_Style';

export default function ProductName() {
  const [productCode, setProductCode] = React.useState('');
  const [productName, setProductName] = React.useState('');

  const randomString = e => {
    const chars =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    const stringLength = 6;
    let randomstring = '';
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    setProductCode(randomstring);
    setProductName(e.target.value);
  };

  return (
    <S.ProductNameBox>
      <S.InputContainer>
        <S.TagInput
          placeholder="상품명을 입력해 주세요."
          onChange={randomString}
        />
      </S.InputContainer>
      <S.TitleBox>상품 코드</S.TitleBox>
      <div>{productCode}</div>
    </S.ProductNameBox>
  );
}
