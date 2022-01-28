import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import AddTemplate from '../../Component/Add/AddTemplate/AddTemplate';
import { ContentsBox } from '../MainContents_Style';
import CategoryChoice from './CategoryChoice/CategoryChoice';
import FilterTag from './FilterTag/FilterTag';
import ProductName from './ProductName/ProductName';
import ProductMeta from './ProductMeta/ProductMeta';
import Stock from './Stock/Stock';
import AddImageButton from '../../Component/AddImageInput/AddImageButton';

const title = '상품 기본 정보';
const subtitle = [
  { title: '카테고리' },
  { title: '필터 태그' },
  { title: '상품명*' },
  { title: '상품 구성 소개 정보*' },
  { title: '상품 썸네일' },
  { title: '상품 대표 이미지' },
  { title: '상품 총 재고*' },
];

export default function ProductBasicInformation() {
  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      {subtitle.map((list, index) => {
        return (
          <AddTemplate subtitle={list.title} key={index}>
            {index === 0 && <CategoryChoice />}
            {index === 1 && <FilterTag />}
            {index === 2 && <ProductName />}
            {index === 3 && <ProductMeta />}
            {index === 4 && <AddImageButton />}
            {index === 5 && <AddImageButton />}
            {index === 6 && <Stock />}
          </AddTemplate>
        );
      })}
    </ContentsBox>
  );
}
