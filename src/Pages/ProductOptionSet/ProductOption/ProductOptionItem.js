import { useState } from 'react';
import * as S from './ProductOptionItem_Style';
import Input from '../../../Component/Input/Input';
import DeleteButton from '../../../Component/Button/DeleteButton';
import Add from '../../../Component/Icon/add_black_24dp';
import AddOption from './AddOption';

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

  const [addOptionProduct, setAddOptionProduct] = useState([
    { addOptionName: '', addOptionPrice: '' },
  ]);

  const handleAddOptionProduct = () => {
    setAddOptionProduct([
      ...addOptionProduct,
      { id: addOptionProduct.length + 1 },
    ]);
  };

  const [inputs, setInputs] = useState({
    optionName: '',
    price: '',
    sellPrice: '',
    stock: '',
    addOptionName: '',
    addOptionPrice: '',
  });

  const {
    optionName,
    price,
    sellPrice,
    stock,
    taxation,
    addOptionName,
    addOptionPrice,
  } = inputs;

  const onChangeInput = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <S.Container>
      <S.DeleteButtonWrapper>
        <DeleteButton />
      </S.DeleteButtonWrapper>
      <Input
        placeholder="옵션명을 입력해 주세요. (필수)"
        width={width[0].width}
        margin={margin}
        name="optionName"
        value={optionName}
        onChange={onChangeInput}
      />
      <S.OptionPriceWrapper>
        <span>
          <Input
            placeholder="상품 정상가 (필수)"
            width={width[1].width}
            margin={margin}
            name="price"
            value={price}
            onChange={onChangeInput}
            type="number"
          />
          <span>원</span>
        </span>

        {inputs.price !== '' ? (
          <S.DiscountRate>
            &#123;&#123;{((sellPrice / price) * 100).toFixed(0)}%&#125;&#125;
          </S.DiscountRate>
        ) : (
          <S.DiscountRate>&#123;&#123;할인율%&#125;&#125;</S.DiscountRate>
        )}

        <span>
          <Input
            placeholder="상품 판매가(필수)"
            width={width[2].width}
            margin={margin}
            name="sellPrice"
            value={sellPrice}
            onChange={onChangeInput}
            type="number"
          />
          <span>원</span>
        </span>
        <span>
          <Input
            placeholder="재고 (필수)"
            width={width[3].width}
            margin={margin}
            name="stock"
            value={stock}
            onChange={onChangeInput}
            type="number"
          />
          <span>개</span>
        </span>
        <S.SelectBox name="taxation" value={taxation} onChange={onChangeInput}>
          <option>과세</option>
          <option>비과세</option>
        </S.SelectBox>
      </S.OptionPriceWrapper>

      <ul>
        {addOptionProduct?.map(data => {
          <AddOption
            key={data.id}
            onChangeInput={onChangeInput}
            width={width}
            margin={margin}
            inputs={inputs}
            setInputs={setInputs}
            addOptionName={addOptionName}
            addOptionPrice={addOptionPrice}
          />;
        })}
      </ul>

      <S.AddOptionBtnWrapper onClick={handleAddOptionProduct}>
        <Add />
        <span>추가 옵션 상품 등록</span>
      </S.AddOptionBtnWrapper>
    </S.Container>
  );
}
