import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../Component/Add/WrapperTemplate/WrapperTemplate';
import { ContentsBox } from '../MainContents_Style';
import ClientImage from './ClientImage';

export default function AddProductImage() {
  const title = '구매자 추천 이미지';
  const backgroundColor = 'white';
  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      <WrapperTemplate backgroundColor={backgroundColor}>
        <ClientImage />
      </WrapperTemplate>
    </ContentsBox>
  );
}
