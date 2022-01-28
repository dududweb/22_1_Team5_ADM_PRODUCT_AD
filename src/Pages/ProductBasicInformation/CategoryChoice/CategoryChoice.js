import * as S from './CategoryChoice_Style';
import React from 'react';

const CategoryIndex = [
  { id: 1, title: '식품' },
  { id: 2, title: '가전' },
  { id: 3, title: '여가' },
  { id: 4, title: '가구' },
  { id: 5, title: '생활' },
  { id: 6, title: '기타' },
];

export default function CategoryChoice() {
  const [choiceCategory, setChoiceCategory] = React.useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setChoiceCategory([...choiceCategory, id]);
    } else {
      setChoiceCategory(choiceCategory.filter(el => el !== id));
    }
  };

  return (
    <S.CategoryContainer>
      <S.CategoryCheckbox>
        <ul>
          {CategoryIndex.map(list => {
            return (
              <S.Index key={list.id}>
                <S.Checkbox
                  id={list.id}
                  type="checkbox"
                  onChange={e => {
                    changeHandler(e.currentTarget.checked, list.id);
                  }}
                  checked={choiceCategory.includes(list.id) ? true : false}
                />
                <label htmlFor={list.id}>{list.title}</label>
              </S.Index>
            );
          })}
        </ul>
      </S.CategoryCheckbox>
      <S.ChoiceCategoryindex>
        {CategoryIndex.map(list => {
          return (
            <React.Fragment key={list.id}>
              {choiceCategory[0] === list.id && (
                <S.CategoryButton id={list.id}>
                  <S.ButtonName>{list.title}</S.ButtonName>
                  <S.DeleteButton>삭제</S.DeleteButton>
                </S.CategoryButton>
              )}
              {choiceCategory[1] === list.id && (
                <S.CategoryButton id={list.id}>
                  <S.ButtonName>{list.title}</S.ButtonName>
                  <S.DeleteButton>삭제</S.DeleteButton>
                </S.CategoryButton>
              )}
              {choiceCategory[2] === list.id && (
                <S.CategoryButton id={list.id}>
                  <S.ButtonName>{list.title}</S.ButtonName>
                  <S.DeleteButton>삭제</S.DeleteButton>
                </S.CategoryButton>
              )}
              {choiceCategory[3] === list.id && (
                <S.CategoryButton id={list.id}>
                  <S.ButtonName>{list.title}</S.ButtonName>
                  <S.DeleteButton>삭제</S.DeleteButton>
                </S.CategoryButton>
              )}
              {choiceCategory[4] === list.id && (
                <S.CategoryButton id={list.id}>
                  <S.ButtonName>{list.title}</S.ButtonName>
                  <S.DeleteButton>삭제</S.DeleteButton>
                </S.CategoryButton>
              )}
              {choiceCategory[5] === list.id && (
                <S.CategoryButton id={list.id}>
                  <S.ButtonName>{list.title}</S.ButtonName>
                  <S.DeleteButton>삭제</S.DeleteButton>
                </S.CategoryButton>
              )}
            </React.Fragment>
          );
        })}
      </S.ChoiceCategoryindex>
    </S.CategoryContainer>
  );
}
