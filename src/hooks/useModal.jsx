import React, { useState } from 'react';
import { createPortal } from 'react-dom';

let portalElement = document.createElement('div');
document.body.appendChild(portalElement);

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleModal = () => {
    setIsShowing((prev) => !prev);
  };

  const ModalOverlay = ({ children }) => (
    <>
      {isShowing
        ? document.body.classList.add('overflow-hidden')
        : document.body.classList.remove('overflow-hidden')}
      {isShowing &&
        createPortal(
          <div
            onClick={toggleModal}
            className='fixed top-0 left-0 right-0 w-screen h-screen bg-opacity-90 bg-black z-50 cursor-pointer'
          />,
          portalElement
        )}
      {isShowing &&
        createPortal(
          <div className='fixed top-1/2 left-1/2 w-full md:w-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-2xl px-4'>
            {children}
          </div>,
          portalElement
        )}
    </>
  );

  return {
    toggleModal,
    ModalOverlay,
  };
};

export default useModal;
