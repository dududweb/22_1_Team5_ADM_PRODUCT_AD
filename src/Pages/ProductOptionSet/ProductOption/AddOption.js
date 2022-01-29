import * as S from './AddOption_Style';
import Input from '../../../Component/Input/Input';
import DeleteButton from '../../../Component/Button/DeleteButton';

export default function AddOption({
  onChangeInput,
  margin,
  width,
  addOptionName,
  addOptionPrice,
}) {
  return (
    <S.AddOptionWrapper>
      <Input
        placeholder="추가 옵션명 (필수)"
        width={width[4].width}
        margin={margin}
        name="addOptionName"
        value={addOptionName}
        onChange={onChangeInput}
      />
      <div>
        <Input
          placeholder="추가 옵션 정상가 (필수)"
          width={width[5].width}
          margin={margin}
          name="addOptionPrice"
          value={addOptionPrice}
          onChange={onChangeInput}
        />
        <span>원</span>
      </div>
      <DeleteButton />
    </S.AddOptionWrapper>
  );
}
