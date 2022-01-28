import { useEffect, useState } from 'react';
import TitleTemplate from '../../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../../Component/Add/WrapperTemplate/WrapperTemplate';
import { ContentsBox } from '../../MainContents_Style';
import ProductOptionSetList from './ProductOptionSetList';
import DeleteButton from '../../../Component/Button/DeleteButton';
import * as S from './ProductOptionSet_Style';

export default function ProductOptionSet() {
  const title = '상품 옵션';

  const [OptionListDatas, setOptionListDatas] = useState([]);

  // useEffect(() => {
  //   fetch('./data/ProductOptionMockData.json')
  //     .then(res => res.json())
  //     .then(result => {
  //       setOptionListDatas(result);
  //     });
  // }, []);

  const handleAddOption = () => {
    setOptionListDatas([
      ...OptionListDatas,
      {
        id: 1,
        optionName: 'ㅇㅇ',
        Price: null,
        sellPrice: null,
        stock: null,
        taxation: null,
        addOptionName: null,
        addOptionPrice: null,
      },
    ]);
    console.log('test', OptionListDatas);
  };

  // const handleAddOption = () => {
  //   fetch('./data/ProductOptionMockData.json')
  //     .then(res => res.json())
  //     .then(result => {
  //       setOptionListDatas(OptionListDatas => [
  //         ...OptionListDatas,
  //         {
  //           id: result[0].id,
  //           optionName: null,
  //           Price: null,
  //           sellPrice: null,
  //           stock: null,
  //           taxation: null,
  //           addOptionName: null,
  //           addOptionPrice: null,
  //         },
  //       ]);

  //     });
  // };

  const handleDeleteSetItem = name => {
    setOptionListDatas(OptionListDatas.filter(item => item.name !== name));
  };

  return (
    <ContentsBox>
      <S.TitleWrapper>
        <TitleTemplate title={title} />
        <S.OptionSetBtn onClick={handleAddOption}>
          + 옵션 세트 추가
        </S.OptionSetBtn>
      </S.TitleWrapper>
      <WrapperTemplate>
        {OptionListDatas?.length > 0 ? (
          <ProductOptionSetList
            OptionListDatas={OptionListDatas}
            setOptionListDatas={setOptionListDatas}
            handleDeleteSetItem={handleDeleteSetItem}
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
