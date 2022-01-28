import { useEffect, useState } from 'react';
import TitleTemplate from '../../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../../Component/Add/WrapperTemplate/WrapperTemplate';
import { ContentsBox } from '../../MainContents_Style';
import ProductOptionSetList from './ProductOptionSetList';
import * as S from './ProductOptionSet_Style';

export default function ProductOptionSet() {
  const title = '상품 옵션';

  const [OptionListDatas, setOptionListDatas] = useState([]);

  useEffect(() => {
    fetch('./data/ProductOptionMockData.json')
      .then(res => res.json())
      .then(result => {
        setOptionListDatas(result);
      });
  }, []);

  const handleAddOption = () => {
    setOptionListDatas([
      ...OptionListDatas,
      {
        id: null,
        optionName: null,
        Price: null,
        sellPrice: null,
        stock: null,
        taxation: null,
        addOptionName: null,
        addOptionPrice: null,
      },
    ]);
  };

  console.log(OptionListDatas);

  return (
    <ContentsBox>
      <TitleTemplate title={title}></TitleTemplate>
      <button onClick={handleAddOption}>옵션 세트 추가</button>
      <WrapperTemplate>
        <ProductOptionSetList
          OptionListDatas={OptionListDatas}
          // setOptionListDatas={setOptionListDatas}
        />
        <S.EmptyOption>옵션세트를 추가하여 옵션을 구성해 주세요.</S.EmptyOption>
      </WrapperTemplate>
    </ContentsBox>
  );
}
