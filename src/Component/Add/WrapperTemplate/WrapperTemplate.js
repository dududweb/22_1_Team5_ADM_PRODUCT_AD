import * as S from './WrapperTemplate_Style';

export default function WrapperTemplate(props) {
  const { children } = props;

  return <S.WrapperTemplate>{children}</S.WrapperTemplate>;
}
