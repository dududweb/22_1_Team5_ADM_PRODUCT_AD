import AddTemplate from '../../Component/Add/AddTemplate/AddTemplate';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import CustomDepartDate from './CustomDepartDate';
import PickUpInfo from './PickUpInfo';
import EarlyOrder from './EarlyOrder';
import { ContentsBox } from '../MainContents_Style';

export default function DeliveryInfo() {
  const title = '상품 배송정보';
  const subtitle = [
    { title: '사용자 배송일 출발일 지정' },
    { title: '방문 수령' },
    { title: '선 주문 예약배송' },
  ];

  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      {subtitle.map((list, index) => {
        return (
          <AddTemplate key={index} subtitle={list.title}>
            {index === 0 && <CustomDepartDate />}
            {index === 1 && <PickUpInfo />}
            {index === 2 && <EarlyOrder />}
          </AddTemplate>
        );
      })}
    </ContentsBox>
  );
}
