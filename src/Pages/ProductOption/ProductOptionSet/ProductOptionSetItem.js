import * as S from './ProductOptionSetItem_Style';
import AddImageButton from '../../../Component/AddImageInput/AddImageButton';
import ProductOption from './ProductOption/ProductOption';
import DeleteButton from '../../../Component/Button/DeleteButton';

export default function ProductOptionSetItem({}) {
  return (
    <S.Container>
      <S.DeleteBtnWrapper>
        <DeleteButton />
      </S.DeleteBtnWrapper>
      <S.ImageBox>
        <AddImageButton />
      </S.ImageBox>
      <ProductOption />
      <S.OptionAddBtn>+ 옵션추가</S.OptionAddBtn>
    </S.Container>
  );
}
