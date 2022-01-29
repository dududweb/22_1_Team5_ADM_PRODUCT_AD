import { useState, useRef } from 'react';
import * as S from './ProductNotice_Style';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import WrapperTemplate from '../../Component/Add/WrapperTemplate/WrapperTemplate';
import DeleteButton from '../../Component/Button/DeleteButton';
import AddInfoUnitButton from './AddInfoUnitButton';
import AddInfoButton from './AddInfoButton';
import { ContentsBox } from '../MainContents_Style';

export default function ProductNotice() {
  const title = '상품 정보 고시';
  const width = 700;
  const newInputWidth = 620;

  const nextId = useRef(2);
  const [newInputs, setNewInputs] = useState({
    tagName: '',
    tagContents: '',
  });
  const { tagName, tagContents } = newInputs;
  const getInputNew = e => {
    const { name, value } = e.target;
    setNewInputs({ ...newInputs, [name]: value });
  };

  const [contentsData, setContentsData] = useState([
    {
      id: 1,
      tagName: '',
      tagContents: '',
    },
  ]);

  const CreateList = () => {
    const list = {
      id: nextId.current,
      tagName,
      tagContents,
    };
    setContentsData([...contentsData, list]);
    setNewInputs({
      tagName: '',
      tagContents: '',
    });
    nextId.current += 1;
  };

  const [infoValueList, setInfoValueList] = useState('');
  const inputTitle = [
    {
      id: 1,
      name: 'product',
      title: '제품명',
      placeholder: '제품명 / 중량을 입력해 주세요.',
    },
    {
      id: 2,
      name: 'country',
      title: '원산지 / 원재료 함량',
      placeholder: '원산지 / 원재료 함량 입력해 주세요.',
    },
    {
      id: 3,
      name: 'grade',
      title: '등급',
      placeholder: '등급(근내지방도 수치) 입력해 주세요.',
    },
    {
      id: 4,
      name: 'storage',
      title: '보관',
      placeholder: '보관방식을 입력해 주세요.',
    },
    {
      id: 5,
      name: 'foodtype',
      title: '식품유형',
      placeholder: '식품유형을 입력해 주세요.',
    },
  ];

  const getInputValue = e => {
    const { name, value } = e.target;
    setInfoValueList({ ...infoValueList, [name]: value });
  };

  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      <WrapperTemplate>
        <S.InfoDetailBox>
          <S.InfoTag>
            <S.InfoTitle>정보고시</S.InfoTitle>
            <DeleteButton />
          </S.InfoTag>
          {inputTitle.map(el => {
            return (
              <S.InputDataWrap key={el.id}>
                <S.InputDataTitle>{el.title}</S.InputDataTitle>
                <S.Input
                  type="text"
                  name={el.name}
                  onChange={getInputValue}
                  width={width}
                  placeholder={el.placeholder}
                />
              </S.InputDataWrap>
            );
          })}
          {contentsData &&
            contentsData.map(el => {
              return (
                <S.InputDataWrap key={el.id}>
                  <S.InputDataTitle>
                    <S.Input
                      type="text"
                      onChange={getInputNew}
                      name={el.tagName}
                    />
                  </S.InputDataTitle>
                  <S.NewInputWrap>
                    <S.Input
                      type="text"
                      width={newInputWidth}
                      onChange={getInputNew}
                      name={el.tagContents}
                    />
                    <DeleteButton />
                  </S.NewInputWrap>
                </S.InputDataWrap>
              );
            })}
          <AddInfoUnitButton onCreate={CreateList} />
        </S.InfoDetailBox>
        <AddInfoButton />
      </WrapperTemplate>
    </ContentsBox>
  );
}
