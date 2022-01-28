import { useState } from 'react';
import * as S from './ProductNotice_Style';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../Component/Add/WrapperTemplate/WrapperTemplate';
import Input from '../../Component/Input/Input';
import DeleteButton from '../../Component/Button/DeleteButton';
import AddInfoUnitButton from './AddInfoUnitButton';
import AddInfoButton from './AddInfoButton';
import { ContentsBox } from '../MainContents_Style';

export default function ProductNotice() {
  const title = '상품 정보 고시';
  const width = 700;
  const [infoValue, setInfoValue] = useState('');
  const [infoValueList, setInfoValueList] = useState({
    product_name: '',
    country: '',
    grade: '',
    storage: '',
    variation: '',
  });
  const getInputValue = e => {
    setInfoValue(e.target.value);
  };

  const subtitle = [
    {
      id: 1,
      title: '제품명 / 중량',
      placeholder: '제품명 / 중량을 입력해 주세요.',
      value: infoValueList.product_name,
    },
    {
      id: 2,
      title: '원산지 / 원재료 함량',
      placeholder: '원산지 / 원재료 함량 입력해 주세요.',
      value: infoValueList.country,
    },
    {
      id: 3,
      title: '등급',
      placeholder: '등급(근내지방도 수치) 입력해 주세요.',
      value: infoValueList.grade,
    },
    {
      id: 4,
      title: '보관',
      placeholder: '보관방식을 입력해 주세요.',
      value: infoValueList.storage,
    },
    {
      id: 5,
      title: '식품유형',
      placeholder: '식품유형을 입력해 주세요.',
    },
  ];

  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      <WrapperTemplate>
        <S.InfoDetailBox>
          <S.InfoTag>
            <S.InfoTitle>정보고시</S.InfoTitle>
            <DeleteButton />
          </S.InfoTag>
          {subtitle.map((el, idx) => {
            return (
              <S.InputDataWrap key={idx}>
                <S.InputDataTitle>{el.title}</S.InputDataTitle>
                <Input placeholder={el.placeholder} width={width} />
              </S.InputDataWrap>
            );
          })}
          <AddInfoUnitButton />
        </S.InfoDetailBox>
        <AddInfoButton />
      </WrapperTemplate>
    </ContentsBox>
  );
}
