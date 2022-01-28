import * as S from '../../Component/Add/AddTemplate/AddTemplate_Style';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../Component/Add/WrapperTemplate/WrapperTemplate';

export default function ProductNotice() {
  const title = '상품 정보 고시';
  const subtitle = [
    {
      title: '카테고리',
    },
  ];

  return (
    <S.ContentsBox>
      <TitleTemplate title={title} />
      <WrapperTemplate>
        <div>내용 내용</div>
      </WrapperTemplate>
    </S.ContentsBox>
  );
}
