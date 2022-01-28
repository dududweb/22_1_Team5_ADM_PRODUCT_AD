import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../Component/Add/WrapperTemplate/WrapperTemplate';
import { ContentsBox } from '../MainContents_Style';
import AddIntroduceImage from './AddIntroduceImage';

export default function IntroduceImage() {
  const title = '상품 추천 이미지';
  const backgroundColor = 'white';
  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      <WrapperTemplate backgroundColor={backgroundColor}>
        <AddIntroduceImage />
      </WrapperTemplate>
    </ContentsBox>
  );
}
