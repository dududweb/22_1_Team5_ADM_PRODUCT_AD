import styled from 'styled-components';

export const WrapperTemplate = styled.div`
  width: 1100px;
  padding: 18px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#efefef'};
  border: 1px solid lightgray;
  border-top: none;
`;
