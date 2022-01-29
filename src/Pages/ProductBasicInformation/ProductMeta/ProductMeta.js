import React from 'react';
import * as S from './ProductMeta_Style';

export default function ProductMeta() {
  const [productMeta, setProductMeta] = React.useState('');
  console.log(productMeta);

  const typingProductMeta = e => {
    setProductMeta(e.target.value);
  };

  return (
    <S.InputContainer>
      <S.TagInput
        placeholder="상품 구성 소개 정보를 입력해 주세요."
        onChange={typingProductMeta}
      />
    </S.InputContainer>
  );
}
