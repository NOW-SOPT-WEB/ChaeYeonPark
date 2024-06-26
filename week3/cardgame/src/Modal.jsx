import React from 'react';
import styled from '@emotion/styled';

const Modal = ({ onClickClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <h2>축하합니다! 동물의 숲 카드게임 성공!</h2>
        <button onClick={onClickClose}>닫기</button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
