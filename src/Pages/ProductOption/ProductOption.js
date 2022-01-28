import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../Component/Add/WrapperTemplate/WrapperTemplate';
import { ContentsBox } from '../MainContents_Style';

export default function ProductOption() {
  const title = '상품 옵션';
  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      <WrapperTemplate>
        <div>내용 내용</div>
      </WrapperTemplate>
    </ContentsBox>
  );
}
