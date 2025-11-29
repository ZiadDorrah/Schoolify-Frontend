import React, { useState, useEffect } from "react";
import classes from "./Medals.module.css";
import medals from "../../assets/images/medals.svg";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import completeGoalPopIamge from "../../assets/images/completeGoalPop.png";
import styles from "../../assets/css/popup.module.css";

const Medals = () => {
  const [selectedTimer, setSelectedTimer] = useState(null);
  const [timer, setTimer] = useState(null); // Set initial timer to null
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const savedEndTime = localStorage.getItem("endTime");
    if (savedEndTime) {
      const remainingTime = Math.max(
        0,
        Math.floor((new Date(savedEndTime) - new Date()) / 1000)
      );
      if (remainingTime > 0) {
        startTimer(remainingTime);
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Clear interval on component unmount
      }
    };
  }, [intervalId]);

  const GoalPopup = () => {
    Swal.fire({
      showCloseButton: true,
      showCancelButton: true,
      html: `
        <div class="${styles["popup-content"]}">
          <h1 class="${styles["popup-title"]}">حدد هدفك الاسبوعى</h1>
          <p class="${styles["goalpopup-text"]}">كم من وقت تود ان تقضية ف التعلم ؟<br/>
          يمكننك تغير هذا الهدف ف اى وقت</p>
          <div class="${styles["timer-popup"]}">
            <button id="timer15" class="timer-button"> 
              <p>15</p>
              <p>دقيقة</p>
            </button>
            <button id="timer30" class="timer-button">
              <p>30</p>
              <p>دقيقة</p>
            </button>
            <button id="timer45" class="timer-button">
              <p>45</p>
              <p>دقيقة</p>
            </button>
            <button id="timer60" class="timer-button">
              <p>60</p>
              <p>دقيقة</p>
            </button>
          </div>
        </div>
      `,
      confirmButtonText: "انشاء هدف جديد",
      cancelButtonText: "إلغاء",
      customClass: {
        title: styles["popup-title"],
        confirmButton: styles["popup-confirm-button"],
        cancelButton: styles["popup-cancel-button"],
        container: styles["custom-popup-container"],
      },
      preConfirm: () => {
        return selectedTimer;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Confirmed with timer:", result.value);
        if (result.value !== null) {
          if (intervalId) {
            clearInterval(intervalId); // Clear the existing interval
          }
          startTimer(result.value * 60); // Start timer in seconds
        }
      } else if (result.isDismissed) {
        console.log("Cancelled");
      }
    });

    const handleTimerClick = (timerValue) => {
      setSelectedTimer(timerValue);
      const timerButtons = document.querySelectorAll(".timer-button");
      timerButtons.forEach((button) =>
        button.classList.remove(styles["active"])
      );
      document
        .getElementById(`timer${timerValue}`)
        .classList.add(styles["active"]);
    };

    document
      .getElementById("timer15")
      .addEventListener("click", () => handleTimerClick(15));
    document
      .getElementById("timer30")
      .addEventListener("click", () => handleTimerClick(30));
    document
      .getElementById("timer45")
      .addEventListener("click", () => handleTimerClick(45));
    document
      .getElementById("timer60")
      .addEventListener("click", () => handleTimerClick(60));
  };

  const startTimer = (duration) => {
    const endTime = new Date(new Date().getTime() + duration * 1000);
    localStorage.setItem("endTime", endTime.toISOString());
    setTimer(duration);
    if (intervalId) {
      clearInterval(intervalId); // Clear any existing interval
    }
    const newIntervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(newIntervalId);
          completeGoalPopup();
          localStorage.removeItem("endTime");
          return null; // Set timer to null to hide the timer display
        }
        return prevTimer - 1;
      });
    }, 1000); // Update every second
    setIntervalId(newIntervalId);
  };

  const completeGoalPopup = () => {
    Swal.fire({
      showCloseButton: true,
      showCancelButton: false,
      html: `
        <div class="${styles["popup-content"]}">
          <h1 class="${styles["popup-title"]}">مبروك تم تحقيق الهدف بنجاح</h1>
          <p class="${styles["popup-text"]}">عاش ي بطل كمل ف رحلة التعلم الممتعة</p>
          <img src="${completeGoalPopIamge}" alt="image" class="${styles["popup-image"]}">
        </div>
      `,
      confirmButtonText: "انشاء هدف جديد",
      customClass: {
        title: styles["popup-title"],
        confirmButton: styles["popup-confirm-button"],
        container: styles["custom-popup-container"],
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Confirmed");
        GoalPopup(); // Allow setting a new goal immediately
      } else if (result.isDismissed) {
        console.log("Cancelled");
      }
    });
  };

  const createGoal = () => {
    GoalPopup();
  };

  return (
    <div className={`${classes.dues} d-flex justify-content-between`}>
      <div className={`${classes.goals}`}>
        <h2>حدد هدفك الاسبوعي</h2>
        <p>
          حدد هدف لتحفيزك على إكمال المنهج. سنساعدك على تتبع أدائك, أضف عدد
          الإيام التي تريد التعلم فيها خلال الاسبوع
        </p>
        <NavLink onClick={createGoal}>
          <h3>حدد هدفك</h3>
        </NavLink>
        {timer !== null && (
          <div>
            <h3>
              Time Remaining: {Math.floor(timer / 60)}:
              {String(timer % 60).padStart(2, "0")}
            </h3>
          </div>
        )}
      </div>
      <div className={`${classes.medals}`}>
        <div className="d-flex justify-content-between">
          <h2>الاوسمة</h2>
          <img src={medals} alt="" />
        </div>
        <p>لم تحصعل على اوسمة حتى الان</p>
      </div>
    </div>
  );
};

export default Medals;
