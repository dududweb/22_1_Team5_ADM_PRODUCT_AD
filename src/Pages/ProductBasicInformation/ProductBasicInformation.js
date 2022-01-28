import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import AddTemplate from '../../Component/Add/AddTemplate/AddTemplate';
import { ContentsBox } from '../MainContents_Style';
import CategoryChoice from './CategoryChoice/CategoryChoice';

export default function ProductBasicInformation() {
  const title = '상품 기본 정보';
  const subtitle = [
    { title: '카테고리' },
    { title: '필터 태그' },
    { title: '상품명*' },
    { title: '상품 구성 소개 정보*' },
    { title: '상품 썸네일' },
    { title: '상품 대표 이미지' },
  ];

  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      {subtitle.map((list, index) => {
        return (
          <AddTemplate
            subtitle={list.title}
            contents={list.contents}
            key={index}
          >
            {index === 0 && <CategoryChoice />}
            {index === 4 && <CategoryChoice />}
          </AddTemplate>
        );
      })}
    </ContentsBox>
  );
}
