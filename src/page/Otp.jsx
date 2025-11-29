import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "../assets/css/Otp.module.css";
import section from "../assets/images/test.png";
import NavAuthenticationComponent from "../components/Uitily/NavAuthenticationComponent";
import Footer from "./../components/Uitily/Footer";
import Swal from "sweetalert2";
import { useAuth } from "../store/AuthContext";
import Spinner from 'react-bootstrap/Spinner';
import Cookies from 'js-cookie';

const Otp = (props) => {
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { verify_otp } = useAuth();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber;



  const handleInputChange = (value, index) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);
  };

  function isOtpFullyEntered(otpInputs) {
    // Returns true if all inputs are filled, false otherwise
    return otpInputs.every(input => input.trim() !== "");
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isOtpFullyEntered(otpInputs)) {
      Swal.fire({
        icon: "error",
        title: "Please fill in all fields",
        showConfirmButton: true
      });
      return;
    }

    setIsLoading(true);
    const otp = otpInputs.join("");
    console.log("Sending OTP to backend:", otp);

    return verify_otp({ 'phone': phoneNumber, 'otp_code': otp })
      .then((response) => {
        console.log(response);
        localStorage.setItem('userToken', response.data.token);
        localStorage.setItem('userData', JSON.stringify(response.data.student));
        console.log(response.data.student);
        Swal.fire({
          icon: "success",
          title: "Checking",
          showConfirmButton: false,
          timer: 1500
        });

        Cookies.set('userToken', response.data.token);
        // let tokenCookie = Cookies.get('userToken');
        // console.log(tokenCookie);


        setTimeout(() => {
          navigate("/home");
        }, 1500);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error.response?.data.message || "An error occurred"}`,
          showConfirmButton: false,
          timer: 5000
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };





  function MoveFoucus(index, e) {
    if (index < 5 && e.target.value) {
      document.getElementById(`current-${index + 1}`).focus();
      console.log(index);
    }


    if (e.keyCode === 8 && index > 0 && index <= 5) {
      document.getElementById(`current-${index - 1}`).focus();
      console.log(index);
    }
  }



  useEffect(() => {
    if (!phoneNumber) {
      navigate('/login');
    }
    document.getElementById("current-0").focus();
  }, []);

  return (
    <>
      <NavAuthenticationComponent />
      <div className={classes.widgetContainer}>
        <div className={classes.widget}>
          <div className={classes.rightContent}>
            <div className={classes.titleRightContent}>
              <h2>التحقق من رقم الهاتف</h2>
              <p>
                ادخل رمز التأكيد الذي قمنا بإرساله إليك. تم ارساله الي
                {phoneNumber}<Link to={`/login?phone=${phoneNumber}`} >تعديل</Link>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={classes.inputSection}>
                {otpInputs.map((value, index) => (
                  <div key={index} className={classes.inputsFeild}>
                    <input
                      type="text"
                      id={`current-${index}`}
                      // required
                      maxLength={1}
                      pattern="\d*"
                      value={value}
                      onChange={(e) => handleInputChange(e.target.value, index)}
                      onKeyUp={(e) => MoveFoucus(index, e)}

                    />
                  </div>
                ))}
              </div>
              <button type="submit" disabled={isLoading ? true : false} className={classes.submitButtton} >
                {isLoading === true ? (
                  <Spinner animation="border" />
                ) : (
                  "تأكيد"
                )}</button>
            </form>
            <p className={classes.craeteOtpMessage}>
              لم يصلك الكود؟ <a href="/">إعادة ارساله</a>
            </p>
          </div>
          <div className={classes.leftImage}>
            <img src={section} alt="test" className={classes.liImage} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Otp;
