import React, { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import classes from "../assets/css/LoginPage.module.css";
import phone from "../assets/images/call-calling.png";
import flag from "../assets/images/32209_egypt_flag_icon.png";
import section from "../assets/images/test.png";
import NavAuthenticationComponent from "../components/Uitily/NavAuthenticationComponent";
import Footer from "../components/Uitily/Footer";
import { NavLink, resolvePath, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import Joi from "joi";
import Swal from "sweetalert2";
import { useAuth } from "../store/AuthContext";

const LoginPage = (props) => {
  const [errorList, setErrorList] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const { login } = useAuth();


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const phoneParam = queryParams.get('phone');
    if (phoneParam) setPhoneNumber(phoneParam);

    if (window.localStorage.getItem('userToken'))
      window.location.href = '/home';
    if (!window.localStorage.getItem('userToken') && window.localStorage.getItem('userData')) {
      localStorage.clear();
    }
  }, [location.search]);


  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    // console.log("input change");
  };

  function validateLogin(phoneNumber) {
    const schema = Joi.object({
      phoneNumber: Joi.string()
        .length(11)
        .pattern(/^(010|011|012|015)[0-9]{8}$/)
        .required()
        .messages({
          'string.length': 'Your phone number should have exactly 11 digits. Please check and try again.',
          'string.pattern.base': 'This Phone Number is Invalid.',
          'string.empty': 'Please enter your phone number to continue.',
          'any.required': ' "phoneNumber" is required. '
        }),
    });

    return schema.validate({ phoneNumber });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let validationResult = validateLogin(phoneNumber);
    if (validationResult.error && validationResult.error.details.length) {
      setErrorList(validationResult.error.details);
      setIsLoading(false);
      return Swal.fire({
        icon: "error",
        title: "The Phone Number you entered is invalid",
        html: validationResult.error.details
          .map(
            (error, index) =>
              `<div key=${index} style="text-align: center; margin: 10px auto;" class="alert alert-danger py-2">${error.message}</div>`
          )
          .join(""),
        showConfirmButton: false,
        timer: 5000,
      });
    }


    return await login({ 'phone': phoneNumber }).then(() => {
      setIsLoading(true);
      Swal.fire({
        icon: "success",
        title: "Checking",
        showConfirmButton: false,
        timer: 1500
      });
      new Promise(resolve => {
        setTimeout(() => {
          return resolve;
        }, 3000);
      });

      navigate("/otp", { state: { phoneNumber } });
    }).catch((error) => {
      setIsLoading(true);
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        showConfirmButton: false,
        timer: 5000
      });

    }).finally(() => {
      setIsLoading(false);
    });
  };


  return (

    <>
      <NavAuthenticationComponent />
      <div className={classes.widgetContainer}>
        <div className={classes.widget}>
          <div className={classes.rightContent}>
            <div className={classes.titleRightContent}>
              <h2>اهلا بعودتك!</h2>
              <p>سجل الدخول الي حسابك واستمتع بطرق تعلم ممتعة وشيقة</p>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="phone-number">رقم الهاتف </label>
              <div className={classes.inputSection}>
                <div className={classes.phoneNumber}>
                  <div className={classes.phoneImg}>
                    <img src={phone} alt="phone" />
                  </div>
                  <input
                    type="number"
                    placeholder="رقم الهاتف"
                    id="phone-number"
                    min={0}
                    // required
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
                <div className={classes.countryCode}>
                  <p className={classes.countryCodeNumber}>2+</p>
                  <div className={classes.countryImg}>
                    <img src={flag} alt="flag" />
                  </div>
                </div>
              </div>
              <button type="submit" disabled={isLoading ? true : false} className={classes.submitButtton} >
                {isLoading === true ? (
                  <Spinner animation="border" />
                ) : (
                  "تسجيل الدخول"
                )}</button>
            </form>
            <p className={classes.craeteAccountText}>
              ليس لديك حساب ؟<NavLink to="/signUp">إنشاء حساب جديد</NavLink>
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

export default LoginPage;