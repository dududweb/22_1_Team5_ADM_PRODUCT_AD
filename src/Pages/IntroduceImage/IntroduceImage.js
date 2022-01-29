import React from 'react';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../Component/Add/WrapperTemplate/WrapperTemplate';
import { ContentsBox } from '../MainContents_Style';
import ImageUploder from '../../Component/ImageUploder/ImageUploder';

export default function IntroduceImage() {
  const title = '상품 소개 이미지';
  const backgroundColor = 'white';

  const [productImage, setProductImage] = React.useState([]);
  const [productName, setProductName] = React.useState([]);

  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      <WrapperTemplate backgroundColor={backgroundColor}>
        <ImageUploder
          name="productImage"
          myImage={productImage}
          setMyImage={setProductImage}
          myImageName={productName}
          setMyImageName={setProductName}
          multiple={true}
        />
      </WrapperTemplate>
    </ContentsBox>
  );
}
