import React from 'react';
import * as S from './ImageUploder_Style';
import AddImageButton from '../AddImageInput/AddImageButton';

export default function ImageUploder(props) {
  const { myImage, setMyImage, myImageName, setMyImageName, name } = props;

  const addImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageURLList = [...myImage];
    for (let i = 0; i < nowSelectImageList.length; i += 1) {
      const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
      nowImageURLList.push(nowImageUrl);
    }
    setMyImage(nowImageURLList);
    setMyImageName([...nowSelectImageList]);
  };

  const deleteImage = e => {
    const targetNumber = Number(e.target.id);
    const newMyImage = [...myImage];
    const newMyImageName = [...myImageName];

    newMyImage.splice(targetNumber, 1);
    newMyImageName.splice(targetNumber, 1);

    setMyImage(newMyImage);
    setMyImageName(newMyImageName);
  };

  return (
    <div style={{ display: 'flex' }}>
      <label htmlFor={name}>
        <AddImageButton>+ 이미지 첨부</AddImageButton>
      </label>
      <S.ThumbnailImageUplod
        id={name}
        type="file"
        accept="image/jpg, impge/png, image/jpeg, image/gif"
        name={name}
        multiple
        onChange={addImage}
      />
      <div>
        {myImageName?.map((list, index) => {
          return (
            <S.ThumbnailNameBox key={index} style={{ display: 'flex' }}>
              <S.ThumbnailName>{list.name}</S.ThumbnailName>;
              <S.ThumbnailDelete onClick={deleteImage} id={index}>
                X
              </S.ThumbnailDelete>
            </S.ThumbnailNameBox>
          );
        })}
      </div>
    </div>
  );
}
