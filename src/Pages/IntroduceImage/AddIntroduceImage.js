import * as S from './AddintroduceImage_Style';
import { useRef, useState } from 'react';

export default function AddIntroduceImage() {
  const [img, setImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const deleteImg = () => {
    setImg(null);
  };

  const insertImg = e => {
    let reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
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
        <S.AddButton htmlfor="file">
          + 이미지 추가
          <S.Button
            type="file"
            id="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={insertImg}
          />
        </S.AddButton>
      </S.IntroduceImage>
      <S.ImgArea src={previewImg} alt="img" />
      <S.ImgageName>{name}</S.ImgageName>
      <S.DeleteButtons onClick={deleteImg}>x</S.DeleteButtons>
    </S.Div>
  );
}
