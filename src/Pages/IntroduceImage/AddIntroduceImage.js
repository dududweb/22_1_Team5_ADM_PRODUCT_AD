import * as S from './AddintroduceImage_Style';
import { useState } from 'react';

export default function AddIntroduceImage() {
  const [img, setImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const insertImg = e => {
    let reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);

      setImg(e.target.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        setPreviewImg([...previewImg, previewImgUrl]);
      }
    };
  };

  return (
    <S.Div>
      <S.IntroduceImage encType="multipart/form-data">
        <S.AddButton htmlFor="file">+ 이미지 추가</S.AddButton>
        <S.Button
          type="file"
          id="file"
          accept="image/jpg, image/jpeg, image/png"
          onChange={insertImg}
        />
      </S.IntroduceImage>
    </S.Div>
  );
}
