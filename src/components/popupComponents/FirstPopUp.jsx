// PopUp.jsx

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from '../../assets/css/popup.module.css';

const FirstPopUp = ({ title, text, image }) => {
  const showPopup = () => {
    Swal.fire({
      showCloseButton: true,
      showCancelButton: false,
      html: `
        <div class="${styles['popup-content']}">
          <h1 class="${styles['popup-title']}">${title}</h1>
          <p class="${styles['popup-text']}">${text}</p>
          <img src="${image}" alt="image" class="${styles['popup-image']}">
        </div>
      `,
      confirmButtonText: 'ابدا الجولة',
      cancelButtonText: 'إلغاء',
      customClass: {
        title: styles['popup-title'],
        confirmButton: styles['popup-confirm-button'],
        cancelButton: styles['popup-cancel-button'],
        container: styles['custom-popup-container'],
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Confirmed');
      } else if (result.isDismissed) {
        console.log('Cancelled');
      }
    });
  };

  return (
    <>
      <button onClick={showPopup}>
        Show Popup
      </button>
    </>
  );
};

export default FirstPopUp;
