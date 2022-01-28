import ProductOptionSetItem from './ProductOptionSetItem';

export const ProductOptionSetList = ({
  OptionListDatas,
  handleDeleteSetItem,
}) => {
  return (
    <ul>
      {OptionListDatas?.map(setData => (
        <ProductOptionSetItem
          key={setData.id}
          optionData={setData}
          OptionListDatas={OptionListDatas}
          handleDeleteSetItem={handleDeleteSetItem}
        />
      ))}
    </ul>
  );
};

export default ProductOptionSetList;
