import React from 'react';
import ImageUploder from '../../Component/ImageUploder/ImageUploder';

export default function ThumbnailUploder() {
  const [representativeImage, setRepresentativeImage] = React.useState([]);
  const [representativeImageName, setRepresentativeName] = React.useState([]);

  return (
    <ImageUploder
      myImage={representativeImage}
      setMyImage={setRepresentativeImage}
      myImageName={representativeImageName}
      setMyImageName={setRepresentativeName}
    />
  );
}
