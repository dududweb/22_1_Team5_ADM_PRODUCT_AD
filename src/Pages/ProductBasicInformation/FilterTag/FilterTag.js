import React from 'react';
import * as S from './FilterTag_Style';

const DATA_LIST = ['의류', '생활', '가전', '전자기기', '생활용품', '침구류'];

export default function FilterTag() {
  const [choiceTag, setChoiceTag] = React.useState([]);
  const [inputTag, setInputTag] = React.useState('');

  const selectTag = e => {
    if (DATA_LIST.includes(e.target.value)) {
      setChoiceTag([...choiceTag, e.target.value]);
      e.target.value = '';
    }
  };

  const typingFilterTag = e => {
    setInputTag(e.target.value);
  };

  const deleteChoiceTag = e => {
    const choiceTagId = Number(e.target.id);
    const newChoiceTag = [...choiceTag];

    newChoiceTag.splice(choiceTagId, 1);
    setChoiceTag(newChoiceTag);
  };

  return (
    <div>
      <S.InputContainer>
        <S.TagInput
          placeholder="필터태그를 검색해 주세요."
          onChange={e => {
            selectTag(e);
            typingFilterTag(e);
          }}
          list="fruitslist"
          id="TagInput"
          value={inputTag}
        />
        <datalist id="fruitslist">
          {DATA_LIST.map(list => {
            return (
              <option value={list} key={list}>
                {list}
              </option>
            );
          })}
        </datalist>
        <S.TagInputButton>검색</S.TagInputButton>
      </S.InputContainer>
      {choiceTag[0] && <p style={{ paddingTop: 20 }}>지정된 필터 태그</p>}
      <S.FilterTag>
        {choiceTag.map((list, index) => {
          return (
            <div key={index}>
              <S.Tag onClick={deleteChoiceTag} id={index}>
                {list} X
              </S.Tag>
            </div>
          );
        })}
      </S.FilterTag>
    </div>
  );
}
