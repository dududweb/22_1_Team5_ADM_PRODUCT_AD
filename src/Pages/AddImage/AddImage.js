import AddImageButton from '../../Component/AddImageInput/AddImageButton';
import ImageUploder from '../../Component/ImageUploder/ImageUploder';

export default function AddImage() {
  return (
    <>
      <AddImageButton>+ 이미지 첨부</AddImageButton>
      <ImageUploder />
    </>
  );
}
