import * as S from './AddTemplate_Style';

<<<<<<< Updated upstream
export default function AddTemplate(props) {
  const { subtitle, children } = props;
=======
export default function AddTemplate({ subtitle }) {
  console.log(subtitle);
>>>>>>> Stashed changes
  return (
    <S.AddTemplate>
      <S.SubTitleBox>
        <p>{subtitle}</p>
      </S.SubTitleBox>
      <S.ContentsBox>{children}</S.ContentsBox>
    </S.AddTemplate>
  );
}
