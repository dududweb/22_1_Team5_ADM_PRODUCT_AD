import AddTemplate from '../../Component/Add/AddTemplate/AddTemplate';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import ToggleButton from '../../Component/ToggleButton/ToggleButton';

export default function DeliveryInfo() {
  const title = '상품 배송정보';
  const subtitle = [
    { title: '카테고리' },
    { title: '필터 태그' },
    { title: '상품명*' },
    { title: '상품 구성 소개 정보*' },
    { title: '상품 썸네일' },
    { title: '상품 대표 이미지' },
  ];

  return (
    <>
      <TitleTemplate title={title} />
      {subtitle.map((list, index) => {
        return (
          <AddTemplate key={index} subtitle={list.title}>
            {/* {index === 0 && <ToggleButton />} */}
          </AddTemplate>
        );
      })}
      <ToggleButton />
    </>
  );
}
