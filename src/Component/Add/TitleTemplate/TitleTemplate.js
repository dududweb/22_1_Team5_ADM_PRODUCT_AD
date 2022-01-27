import * as S from './TitleTemplate_Style';

export default function TitleTemplate({ title }) {
  return (
    <S.TitleTemplate>
      <S.Container>{title}</S.Container>
    </S.TitleTemplate>
  );
}
