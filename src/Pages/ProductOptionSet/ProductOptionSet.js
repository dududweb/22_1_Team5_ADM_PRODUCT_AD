import { useEffect, useState } from 'react';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../Component/Add/WrapperTemplate/WrapperTemplate';
import { ContentsBox } from '../MainContents_Style';
import ProductOptionSetList from './ProductOptionSetList';
import * as S from './ProductOptionSet_Style';

export default function ProductOptionSet() {
  const title = '상품 옵션';

  const [optionListDatas, setOptionListDatas] = useState([]);

  const [addOptionListDatas, setAddOptionListDatas] = useState([
    {
      optionName: '',
      price: null,
      sellPrice: null,
      stock: null,
      taxation: null,
    },
  ]);

  const handleAddOption = () => {
    setAddOptionListDatas([
      ...addOptionListDatas,
      {
        id: addOptionListDatas.length + 1,
        optionName: '',
        price: null,
        sellPrice: null,
        stock: null,
        taxation: null,
      },
    ]);
  };
  // useEffect(() => {
  //   fetch('./data/ProductOptionMockData.json')
  //     .then(res => res.json())
  //     .then(result => {
  //       setOptionListDatas(result);
  //     });
  // }, []);

  const handleAddSetOption = () => {
    setOptionListDatas([
      ...optionListDatas,
      {
        id: optionListDatas.length + 1,
      },
    ]);
  };

  console.log('tes11t', optionListDatas);

  const handleDeleteSetOption = id => {
    setOptionListDatas(optionListDatas.filter(item => item.id !== id));
    console.log('클릭됨');
  };

  return (
    <ContentsBox>
      <S.TitleWrapper>
        <TitleTemplate title={title} />
        <S.OptionSetBtn onClick={handleAddSetOption}>
          + 옵션 세트 추가
        </S.OptionSetBtn>
      </S.TitleWrapper>
      <WrapperTemplate>
        {optionListDatas?.length > 0 ? (
          <ProductOptionSetList
            optionListDatas={optionListDatas}
            setOptionListDatas={setOptionListDatas}
            handleDeleteSetOption={handleDeleteSetOption}
            handleAddOption={handleAddOption}
            addOptionListDatas={addOptionListDatas}
            setAddOptionListDatas={setAddOptionListDatas}
          />
        ) : (
          <S.EmptyOption>
            옵션세트를 추가하여 옵션을 구성해 주세요.
          </S.EmptyOption>
        )}
      </WrapperTemplate>
    </ContentsBox>
  );
}
