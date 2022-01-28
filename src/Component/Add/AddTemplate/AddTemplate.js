import * as S from './AddTemplate_Style';

export default function AddTemplate(props) {
  const { subtitle, children } = props;
  return (
    <S.AddTemplate>
      <S.SubTitleBox>
        <p>{subtitle}</p>
      </S.SubTitleBox>

      <S.ContentsBox>{children}</S.ContentsBox>
    </S.AddTemplate>
  );
}
