import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  height: auto;
  padding: 64px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 1001;
`;

export const CloseBtn = styled.button`
  position: absolute;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 20px;

  & svg {
    stroke: ${({ theme }) => theme.colors.black};
  }
`;
