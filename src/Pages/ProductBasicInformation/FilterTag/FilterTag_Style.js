import styled from 'styled-components';

export const InputContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 5px;
`;
export const TagInput = styled.input`
  border: none;
  width: 92%;
  -webkit-appearance: none; /* 크롬 화살표 없애기 */
  -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
  appearance: none; /* 화살표 없애기 */
`;
export const TagInputButton = styled.button`
  border: 1px solid purple;
  border-radius: 4px;
  padding: 10px 20px;
`;
export const FilterTag = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
`;
export const choiceBox = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const Tag = styled.span`
  padding: 10px;
  margin-right: 10px;
  background: #dbeebf;
  border-radius: 4px;
`;
