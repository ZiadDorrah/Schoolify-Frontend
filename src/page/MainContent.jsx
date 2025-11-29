import React, { useEffect, useState } from "react";
import PlatformSubjects from "../components/PlatformContent/PlatformSubjects";
import Footer from "../components/Uitily/Footer";

import Swal from "sweetalert2";
import startPopIamge from "../assets/images/popupImage.png";
import styles from "../assets/css/popup.module.css";

const MainContent = () => {
  const title = "مرحبا بيك ف منصة Schoolify";
  const text = "ابدا بجولة سريعة حول المنصة لبدء رحلة التعلم الخاصة بك";
  const [popUp, setPopUp] = useState(localStorage.getItem("showPop"));

  const showPopup = () => {
    localStorage.setItem("showPop", false);
    setPopUp(false);
    Swal.fire({
      showCloseButton: true,
      showCancelButton: false,
      html: `
        <div class="${styles["popup-content"]}">
          <h1 class="${styles["popup-title"]}">مرحبا بيك ف منصة Schoolify</h1>
          <p class="${styles["popup-text"]}">ابدا بجولة سريعة حول المنصة لبدء رحلة التعلم الخاصة بك</p>
          <img src="${startPopIamge}" alt="image" class="${styles["popup-image"]}">
        </div>
      `,
      confirmButtonText: "ابدا الجولة",
      cancelButtonText: "إلغاء",
      customClass: {
        title: styles["popup-title"],
        confirmButton: styles["popup-confirm-button"],
        cancelButton: styles["popup-cancel-button"],
        container: styles["custom-popup-container"],
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("showPop", false);
        setPopUp(false);
        // console.log("Confirmed");
      } else if (result.isDismissed) {
        // console.log("Cancelled");
        setPopUp(false);
        localStorage.setItem("showPop", false);
      }
    });
  };

  useEffect(() => {
    console.log("hereeeeeeeeee");
    if (popUp === true) {
      showPopup();
    }
  }, [popUp]);

  return (
    <>
      <div className="container-fluid">
        <PlatformSubjects />
      </div>
      <Footer />
    </>
  );
};

export default MainContent;
