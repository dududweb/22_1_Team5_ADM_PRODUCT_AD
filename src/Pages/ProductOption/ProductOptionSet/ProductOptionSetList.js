import ProductOptionSetItem from './ProductOptionSetItem';

export const ProductOptionSetList = ({ OptionListDatas }) => {
  // console.log(OptionListDatas);

  return (
    <ul>
      {OptionListDatas?.map(optionData => (
        <ProductOptionSetItem
          key={optionData.id}
          optionData={optionData}
          OptionListDatas={OptionListDatas}
          // setOptionListDatas={setOptionListDatas}
        />
      ))}
    </ul>
  );
};

export default ProductOptionSetList;
