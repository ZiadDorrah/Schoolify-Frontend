// DegreePopUp.jsx

import React from 'react';
import Swal from 'sweetalert2';
import styles from '../../assets/css/popup.module.css';
import mark from '../../assets/images/Mask group.png';

const DegreePopUp = ({ title, text, image }) => {
  const showPopup = () => {
    Swal.fire({
      showCloseButton: true,
      showCancelButton: false,
      customClass: {
        title: styles['popup-title'],
        container: styles['custom-popup-container'],
      },
      html: `
        <div class="${styles['popup-content']}">
          <h1 class="${styles['popup-title']}">${title}</h1>
          <p class="${styles['popup-text']}">${text}</p>
          <img src="${image}" alt="image" class="${styles['popup2-image']}">
          <table class="table table-striped">
            <thead>
              <tr>
                <th style="text-align:start;">المستوى</th>
                <th style="text-align:end;">عدد النقاط</th>
                <!-- Add more columns as needed -->
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align:start;"><img src="${mark}" alt="image" "> المستوى الاول</td>
                <td style="text-align:end;">500</td>
              </tr>
              <tr>
                <td style="text-align:start;"><img src="${mark}" alt="image" "> المستوى الاول</td>
                <td style="text-align:end;">500</td>
              </tr>
            </tbody>
          </table>
          
        </div>
      `,
      showConfirmButton: false, // Hide the default confirm button
    }).then((result) => {
      // You can handle the confirmation action here if needed
      if (result.isDismissed) {
        console.log('Cancelled');
      }
    });
  };

  return (
    <div>
      <button onClick={showPopup}>
        Show
      </button>
    </div>
  );
};

export default DegreePopUp;
