import * as S from './FilterTag_Style';

export default function FilterTag() {
  return (
    <S.InputContainer>
      <S.TagInput placeholder="필터태그를 검색해 주세요." />
      <button>검색</button>
    </S.InputContainer>
  );
}
