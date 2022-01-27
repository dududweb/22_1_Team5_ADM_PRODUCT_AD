import React from 'react';

export default function ImageUploder() {
  const [myImage, setMyImage] = React.useState([]);
  console.log(myImage);

  const addImage = e => {
    const nowSelectImageList = e.target.files;
    const nowImageURLList = [...myImage];
    for (let i = 0; i < nowSelectImageList.length; i += 1) {
      const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
      nowImageURLList.push(nowImageUrl);
    }
    setMyImage(nowImageURLList);
  };

  const deleteImage = () => {
    setMyImage([]);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/jpg, impge/png, image/jpeg, image/gif"
        name="profile_img"
        onChange={addImage}
      ></input>
      <button onClick={deleteImage}>삭제</button>
    </div>
  );
}
