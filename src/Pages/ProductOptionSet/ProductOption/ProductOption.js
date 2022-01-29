// import * as S from './ProductOptionSet_Style';
import ProductOptionItem from './ProductOptionItem';

export default function ProductOption({
  addOptionListDatas,
  setAddOptionListDatas,
}) {
  return (
    <ul>
      {addOptionListDatas?.map(data => (
        <ProductOptionItem key={data.id} />
      ))}
    </ul>
  );
}
