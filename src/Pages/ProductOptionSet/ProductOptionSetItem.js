import * as S from './ProductOptionSetItem_Style';
import AddImageButton from '../../Component/AddImageInput/AddImageButton';
import ProductOption from './ProductOption/ProductOption';
import DeleteButton from '../../Component/Button/DeleteButton';

export default function ProductOptionSetItem({
  handleDeleteSetOption,
  optionListDatas,
  setOptionListDatas,
  handleAddOption,
  addOptionListDatas,
  setAddOptionListDatas,
}) {
  return (
    <S.Container>
      <S.DeleteBtnWrapper onClick={handleDeleteSetOption}>
        <DeleteButton />
      </S.DeleteBtnWrapper>
      <S.ImageBox>
        <AddImageButton />
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
