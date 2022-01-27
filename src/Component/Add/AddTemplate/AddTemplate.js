import * as S from './AddTemplate_Style';

export default function AddTemplate({ subtitle }) {
  return (
    <S.AddTemplate>
      <S.SubTitleBox>
        <p>{subtitle}</p>
      </S.SubTitleBox>
      <S.ContentsBox>내용</S.ContentsBox>
    </S.AddTemplate>
  );
}
