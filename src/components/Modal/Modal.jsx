import React, { useCallback, useEffect } from 'react';
import { CloseBtn, ModalContent, ModalOverlay } from './Modal.styled';
import sprite from '../../images/sprite.svg';

const Modal = ({ isOpen, onClose, children }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleKeyDown]);
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <CloseBtn onClick={onClose}>
            <svg width="32" height="32">
              <use href={`${sprite}#close`} />
            </svg>
          </CloseBtn>
          {children}
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default Modal;
