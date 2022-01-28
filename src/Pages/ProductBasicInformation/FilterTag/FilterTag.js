import React from 'react';
import * as S from './FilterTag_Style';

export default function FilterTag() {
  const [inputTag, setInputTag] = React.useState([]);
  const [inputTag1, setInputTag1] = React.useState('');

  const typingFilterTag = e => {
    setInputTag1(e.target.value);
  };

  const searchFilterTag = () => {
    setInputTag([...inputTag, inputTag1]);
    setInputTag1('');
  };

  return (
    <S.InputContainer>
      <S.TagInput
        placeholder="필터태그를 검색해 주세요."
        onChange={typingFilterTag}
        list="fruitslist"
        value={inputTag1}
      />
      <datalist id="fruitslist">
        <option value="apple" />
        <option value="banana" />
        <option value="grape" />
        <option value="orange" />
      </datalist>
      <S.TagInputButton onClick={searchFilterTag}>검색</S.TagInputButton>
    </S.InputContainer>
  );
}
