import * as S from './ProductOptionItem_Style';
import Input from '../../../../Component/Input/Input';
import DeleteButton from '../../../../Component/Button/DeleteButton';
import Add from '../../../../Component/Icon/add_black_24dp';

export default function ProductOptionItem() {
  const width = [
    { id: 1, width: 880 },
    { id: 2, width: 150 },
    { id: 3, width: 150 },
    { id: 4, width: 150 },
    { id: 5, width: 360 },
    { id: 6, width: 360 },
  ];
  const margin = 7;
  return (
    <S.Container>
      <S.DeleteButtonWrapper>
        <DeleteButton />
      </S.DeleteButtonWrapper>
      <Input
        placeholder="옵션명을 입력해 주세요. (필수)"
        width={width[0].width}
        margin={margin}
      />
      <S.OptionPriceWrapper>
        <span>
          <Input
            placeholder="상품 정상가 (필수)"
            width={width[1].width}
            margin={margin}
          />
          <span>원</span>
        </span>
        <span>할인율%</span>
        <span>
          <Input
            placeholder="상품 판매가(필수)"
            width={width[2].width}
            margin={margin}
          />
          <span>원</span>
        </span>
        <span>
          <Input
            placeholder="재고 (필수)"
            width={width[3].width}
            margin={margin}
          />
          <span>개</span>
        </span>
        <S.SelectBox>
          <option>과세</option>
          <option>비과세</option>
        </S.SelectBox>
      </S.OptionPriceWrapper>
      <S.AddOptionWrapper>
        <Input
          placeholder="추가 옵션명 (필수)"
          width={width[4].width}
          margin={margin}
        />
        <div>
          <Input
            placeholder="추가 옵션 정상가 (필수)"
            width={width[5].width}
            margin={margin}
          />
          <span>원</span>
        </div>
        <DeleteButton />
      </S.AddOptionWrapper>

      <S.AddOptionBtnWrapper>
        <Add />
        <span>추가 옵션 상품 등록</span>
      </S.AddOptionBtnWrapper>
    </S.Container>
  );
}
