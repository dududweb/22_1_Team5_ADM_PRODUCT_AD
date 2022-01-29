import React from 'react';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../Component/Add/WrapperTemplate/WrapperTemplate';
import { ContentsBox } from '../MainContents_Style';
import ImageUploder from '../../Component/ImageUploder/ImageUploder';

export default function AddProductImage() {
  const title = '구매자 추천 이미지';
  const backgroundColor = 'white';

  const [clientImage, setClientImage] = React.useState([]);
  const [clientImageName, setClientImageName] = React.useState([]);

  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      <WrapperTemplate backgroundColor={backgroundColor}>
        <ImageUploder
          name="clientImage"
          myImage={clientImage}
          setMyImage={setClientImage}
          myImageName={clientImageName}
          setMyImageName={setClientImageName}
          multiple={true}
        />
      </WrapperTemplate>
    </ContentsBox>
  );
}
