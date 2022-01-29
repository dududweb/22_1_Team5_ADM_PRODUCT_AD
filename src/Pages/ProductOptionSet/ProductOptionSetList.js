import ProductOptionSetItem from './ProductOptionSetItem';

export const ProductOptionSetList = ({
  optionListDatas,
  setOptionListDatas,
  handleDeleteSetOption,
  handleAddOption,
  addOptionListDatas,
  setAddOptionListDatas,
}) => {
  return (
    <ul>
      {optionListDatas?.map(data => (
        <ProductOptionSetItem
          // key={data.id}
          // optionData={data}
          setOptionListDatas={setOptionListDatas}
          optionListDatas={optionListDatas}
          handleDeleteSetOption={handleDeleteSetOption}
          handleAddOption={handleAddOption}
          addOptionListDatas={addOptionListDatas}
          setAddOptionListDatas={setAddOptionListDatas}
        />
      ))}
    </ul>
  );
};

export default ProductOptionSetList;
