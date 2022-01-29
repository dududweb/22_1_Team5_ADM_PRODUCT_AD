import React from 'react';
import * as S from './ProductOptionSetItem_Style';
import ProductOption from './ProductOption/ProductOption';
import DeleteButton from '../../Component/Button/DeleteButton';
import ImageUploder from '../../Component/ImageUploder/ImageUploder';

export default function ProductOptionSetItem({
  handleDeleteSetOption,
  optionListDatas,
  setOptionListDatas,
  handleAddOption,
  addOptionListDatas,
  setAddOptionListDatas,
  data,
}) {
  const [optionImage, setOptionImage] = React.useState([]);
  const [optionImageName, setOptionImageName] = React.useState([]);

  console.log('data', optionListDatas);

  return (
    <S.Container>
      <S.DeleteBtnWrapper onClick={() => handleDeleteSetOption(data.id)}>
        <DeleteButton />
      </S.DeleteBtnWrapper>
      <S.ImageBox>
        <ImageUploder
          name="optionImage"
          myImage={optionImage}
          setMyImage={setOptionImage}
          myImageName={optionImageName}
          setMyImageName={setOptionImageName}
          multiple={false}
        />
      </S.ImageBox>
      <ProductOption
        optionListDatas={optionListDatas}
        setOptionListDatas={setOptionListDatas}
        addOptionListDatas={addOptionListDatas}
        setAddOptionListDatas={setAddOptionListDatas}
      />
      <S.OptionAddBtn onClick={handleAddOption}>+ 옵션추가</S.OptionAddBtn>
    </S.Container>
  );
}
