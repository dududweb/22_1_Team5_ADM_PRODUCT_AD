import * as S from './ProductOptionSetItem_Style';
import AddImageButton from '../../../Component/AddImageInput/AddImageButton';
import ProductOption from './ProductOption/ProductOption';

export default function ProductOptionSetItem({}) {
  return (
    <S.Container>
      <S.ImageBox>
        <AddImageButton />
      </S.ImageBox>
      <ProductOption />
      <S.OptionAddBtn>+ 옵션추가</S.OptionAddBtn>
    </S.Container>
  );
}

{
  /* <Container>
<GotoEdit to={`${id}/edit`} state={{ projectData: projectData }}>
  <ThumbnailBasicBox
    src={thumbnail_image_url ?? 'images/photo-potrait.svg'}
  />
  <CardContent>
    <Info>
      <TitleAndStatus>
        <Title>{name ?? '제목을 입력해주세요.'}</Title>
        <Status status={status ?? '클래스 준비'}>
          {status ?? '클래스 준비'}
        </Status>
      </TitleAndStatus>
      <DeleteButton tpye="button" onClick={e => handleDeleteClass(e, id)}>
        <Icon iconName={AiFillDelete} size={24} margin={0} />
      </DeleteButton>
    </Info>
    <Button color="black" bgColor="lightGray" tpye="button">
      자세히 보기
    </Button>
  </CardContent>
</GotoEdit>
</Container>
); */
}
