import * as S from './WrapperTemplate_Style';

export default function WrapperTemplate(props) {
  const { children, backgroundColor } = props;

  return (
    <S.WrapperTemplate backgroundColor={backgroundColor}>
      {children}
    </S.WrapperTemplate>
  );
}
