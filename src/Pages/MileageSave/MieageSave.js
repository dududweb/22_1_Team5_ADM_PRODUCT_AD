import AddTemplate from '../../Component/Add/AddTemplate/AddTemplate';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import MieageInfo from './MileageInfo';

export default function DeliveryInfo() {
  const title = '상품 혜택 허용 설정 ';
  const subtitle = [{ title: '마일리지 적립' }];

  return (
    <>
      <TitleTemplate title={title} />
      {subtitle.map((list, index) => {
        return (
          <AddTemplate key={index} subtitle={list.title}>
            {index === 0 && <MieageInfo />}
          </AddTemplate>
        );
      })}
    </>
  );
}
