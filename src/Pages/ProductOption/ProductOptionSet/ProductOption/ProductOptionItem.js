import * as S from './ProductOptionItem_Style';
import Input from '../../../../Component/Input/Input';
import DeleteButton from '../../../../Component/Button/DeleteButton';

export default function ProductOptionItem({}) {
  return (
    <S.Container>
      <DeleteButton />
      <Input placehoder="pddd" />
      <div>
        <span>
          <Input />
          <span>원</span>
          <span>할인율%</span>
        </span>
        <span>
          <Input />
          <span>원</span>
        </span>
        <span>
          <Input />
          <span>개</span>
        </span>
        <select>
          <option>과세</option>
          <option>비과세</option>
        </select>
      </div>
      <div>
        <Input />
        <Input />
        <span>원</span>
        <DeleteButton />
      </div>

      <div>
        <button>+</button>
        <span>추가 옵션 상품 등록</span>
      </div>
    </S.Container>
  );
}
