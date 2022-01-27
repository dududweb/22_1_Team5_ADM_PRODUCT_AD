import * as S from './ModalStyle';

export default function Modal({ onSetIsVisible, setIsVisibleModal }) {
  return (
    <>
      <S.Modal>
        필수항목을 선택하세요.
        <S.ButtonWrap>
          <S.CancelBtn onClick={() => onSetIsVisible(false)}>취소</S.CancelBtn>
          <S.ConfirmBtn onClick={() => onSetIsVisible(false)}>
            확인
          </S.ConfirmBtn>
        </S.ButtonWrap>
      </S.Modal>
      <S.BodyBlackout onClick={() => setIsVisibleModal(false)} />
    </>
  );
}
