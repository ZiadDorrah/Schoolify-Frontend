import React, { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import styles from "./LoginPage.module.css";
import { Link } from 'react-router-dom';
import idSignUp from '../../../assets/images/idSignUp.png';
import nameSignUp from '../../../assets/images/nameSignUp.png';
import phone from "../../../assets/images/call-calling.png";
import flag from "../../../assets/images/32209_egypt_flag_icon.png";
import section from "../../../assets/images/test.png";
import NavAuthenticationComponent from "../../../components/Uitily/NavAuthenticationComponent";
import Footer from "../../../components/Uitily/Footer";
import { NavLink, resolvePath, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import joi from "joi";
import Swal from "sweetalert2";
import { useAuth } from "../../../dashStore/AuthContextDash";
import eyeOpenImg from '../../../assets/icons/eye-password-show-svgrepo-com.svg';
import eyeClosedImg from '../../../assets/icons/eye-password-hide-svgrepo-com.svg';

const LoginPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();

  const location = useLocation();
  const {
    pageLoading
  } = useAuth();
  const { signin } = useAuth();

  useEffect(() => {
    if (window.localStorage.getItem('adminToken'))
      window.location.href = '/dashboard';

  }, []);

  const validateLoginForm = (credentials) => {
    const schema = joi.object({
      username: joi.string().alphanum().min(3).max(30).required(),
      password: joi.string().pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+]{3,30}$')).required(),
    });

    return schema.validate(credentials, { abortEarly: false });
  };

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    let err_list = validateLoginForm(credentials);
    if (err_list.error && err_list.error.details.length) {

      setIsLoading(false);
      return Swal.fire({
        icon: 'error',
        title: 'Please Enter Valid Data',
        html: err_list.error.details
          .map(
            (error, index) =>
              `<div key=${index} style="text-align: center; margin: 10px auto;" class="alert alert-danger py-2">${error.message}</div>`
          )
          .join(''),
        showConfirmButton: false,
        timer: 5000,
      });
    }
    return await signin(credentials).then((response) => {

      Swal.fire({
        icon: 'success',
        title: "Welcome back, Your dashboard is ready with all the latest insights and tools at your fingertips",
        showConfirmButton: true,
      });
      // console.log(response);
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminData', JSON.stringify(response.data.admin));

      setIsLoading(false);
      // Clear Data
      setCredentials({ username: '', password: '' });
      console.log(credentials);
      navigate("/dashboard");
    }).catch(error => {
      Swal.fire({
        icon: 'error',
        title: `${error.response.data.message}`,
        showConfirmButton: false,
        timer: 5000,
      });
      setIsLoading(false);
    });

  }

  function getCredentials(e) {
    let myCredentials = { ...credentials }; // copy user
    myCredentials[e.target.name] = e.target.value;
    setCredentials(myCredentials);
    // console.log(myCredentials);
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {
        pageLoading === true ? <div className={`${styles.loading}`}>
          <Spinner animation="border" variant="success" role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </Spinner>
        </div> : (
          <div style={{ backgroundColor: "#F6F6F6" }}>
            <NavAuthenticationComponent />
            {/* {errorList.map((error)=> <div style={{maxWidth:'50%', textAlign:'center' ,margin:'10px auto'}} className='alert alert-danger py-2'>{error.message}</div>)} */}
            <div className={styles.main_component}>
              <div className={styles.right_side}>
                <h2>مرحبًا! </h2>
                <p>يرجى تسجيل الدخول للوصول إلى لوحة التحكم الخاصة بالمسؤول</p>
                <form onSubmit={handleLoginSubmit}>
                  <div className={styles.inputWithImage}>
                    <label htmlFor="username" className={styles.lablesInput}>
                      اسم المستخدم
                    </label>
                    <div className={styles.inputDesgin}>
                      <div className={styles.imageContainer}>
                        <img src={nameSignUp} alt="id input" className={styles.inputImage} />
                      </div>
                      <input
                        onChange={getCredentials}
                        type="text"
                        id="username"
                        name="username"
                        placeholder="اسم المستخدم "
                        className={`${styles.inputField} `}
                        value={credentials.username}
                      />
                    </div>
                  </div>
                  <div className={styles.inputWithImage}>
                    <label htmlFor="password" className={styles.lablesInput}>
                      كلمه السر
                    </label>
                    <div className={styles.inputDesgin}>
                      <div className={styles.imageContainer}>
                        <img src={idSignUp} alt="id input" className={styles.inputImage} />
                      </div>
                      <input
                        onChange={getCredentials}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="كلمه السر  "
                        className={`${styles.inputField} `}
                        value={credentials.password}
                      />
                      <img
                        src={showPassword ? eyeOpenImg : eyeClosedImg}
                        alt="Toggle visibility"
                        onClick={togglePasswordVisibility}
                        className={styles.eyeIcon}
                      />
                    </div>
                  </div>
                  <button type="submit" className={styles.submitButtton} >
                    {isLoading === true ? (
                      <Spinner animation="border" />
                    ) : (
                      "تسجيل الدخول"
                    )}

                    {/* {moveLogin && <Link to="/" />} */}
                  </button>
                </form>
              </div>
            </div>
            <Footer />
          </div>
        )
      }
    </>
  );
};

export default LoginPage;