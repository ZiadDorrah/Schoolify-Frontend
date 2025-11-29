import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";
import styles from "./signUp.module.css";
import nameSignUp from "../../../assets/images/nameSignUp.png";
import idSignUp from "../../../assets/images/idSignUp.png";
import phoneSignUp from "../../../assets/images/call-calling.png";
import teacherSignUp from "../../../assets/images/teacherSignUp.png";
import leftImage from "../../../assets/images/test.png";
import { useAuth } from "../../../dashStore/AuthContextDash";
import NavAuthenticationComponent from "../../../components/Uitily/NavAuthenticationComponent";
import Footer from "../../../components/Uitily/Footer";
import joi from "joi";
import eyeOpenImg from "../../../assets/icons/eye-password-show-svgrepo-com.svg";
import eyeClosedImg from "../../../assets/icons/eye-password-hide-svgrepo-com.svg";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [moveLogin, setMoveLogin] = useState(false);
  const [errorGrade, setErrorGrade] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { pageLoading, register, getGrades, setPageLoading } = useAuth();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    phone: "",
    permission: "",
  });

  function getUserData(e) {
    let myUser = { ...user }; // copy user
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    // console.log(myUser);
  }

  const [grades, setGrades] = useState([]);

  const validateRegisterForm = (user) => {
    const schema = joi.object({
      first_name: joi.string().alphanum().min(3).max(30).required(),
      last_name: joi.string().alphanum().min(3).max(30).required(),
      username: joi.string().alphanum().min(3).max(30).required(),
      password: joi
        .string()
        .pattern(new RegExp("^[a-zA-Z0-9!@#$%^&*()_+]{3,30}$")),
      phone: joi
        .string()
        .length(11)
        .pattern(/^[0-9]+$/)
        .required(),
      permission: joi.string(),
    });
    return schema.validate(user, { abortEarly: false });
  };

  async function submitRegisterForm(e) {
    e.preventDefault();
    setIsLoading(true);
    let err_list = validateRegisterForm(user);

    if (err_list.error && err_list.error.details.length) {
      setIsLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Please Enter Valid Data",
        html: err_list.error.details
          .map(
            (error, index) =>
              `<div key=${index} style="text-align: center; margin: 10px auto;" class="alert alert-danger py-2">${error.message}</div>`
          )
          .join(""),
        showConfirmButton: false,
        timer: 5000,
      });
    }

    return await register(user)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "New member created!",
          showConfirmButton: true,
        });
        setIsLoading(false);

        // Clear Data
        setUser({
          first_name: "",
          last_name: "",
          username: "",
          password: "",
          phone: "",
          permission: "",
        });
        console.log(user);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
          showConfirmButton: false,
          timer: 5000,
        });
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (!window.localStorage.getItem("adminToken")) {
      window.location.href = "/dashboard/login";
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>
        <Header addTitle="اضافه عضو جديد" />
        <div className={styles.container}>
          <div className={styles.upperSide}>
            {pageLoading === true ? (
              <div className={`${styles.loading}`}>
                <Spinner animation="border" variant="success" role="status">
                  <span className="visually-hidden text-center">
                    Loading...
                  </span>
                </Spinner>
              </div>
            ) : (
              <div style={{ backgroundColor: "#F6F6F6" }}>
                {/* <NavAuthenticationComponent /> */}

                <div className={styles.main_component}>
                  <div className={styles.right_side}>
                    <h2>أهلاً بك! </h2>
                    <p>قم بإنشاء حساب جديد </p>
                    <form onSubmit={submitRegisterForm}>
                      <div className={styles.inputWithImage}>
                        <label
                          htmlFor="first_name"
                          className={styles.lablesInput}
                        >
                          الاسم الاول{" "}
                        </label>
                        <div className={styles.inputDesgin}>
                          <div className={styles.imageContainer}>
                            <img
                              src={nameSignUp}
                              alt="first name"
                              className={styles.inputImage}
                            />
                          </div>
                          <input
                            onChange={getUserData}
                            type="text"
                            id="first_name"
                            name="first_name"
                            placeholder="الاسم الاول"
                            className={`${styles.inputField} `}
                            value={user.first_name}
                          />
                        </div>
                      </div>
                      <div className={styles.inputWithImage}>
                        <label
                          htmlFor="last_name"
                          className={styles.lablesInput}
                        >
                          الاسم الثانى
                        </label>
                        <div className={styles.inputDesgin}>
                          <div className={styles.imageContainer}>
                            <img
                              src={nameSignUp}
                              alt="last name"
                              className={styles.inputImage}
                            />
                          </div>
                          <input
                            onChange={getUserData}
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="الاسم الثانى"
                            className={`${styles.inputField} `}
                            value={user.last_name}
                          />
                        </div>
                      </div>
                      <div className={styles.inputWithImage}>
                        <label
                          htmlFor="username"
                          className={styles.lablesInput}
                        >
                          اسم المستخدم
                        </label>
                        <div className={styles.inputDesgin}>
                          <div className={styles.imageContainer}>
                            <img
                              src={idSignUp}
                              alt="id input"
                              className={styles.inputImage}
                            />
                          </div>
                          <input
                            onChange={getUserData}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="اسم المستخدم "
                            className={`${styles.inputField} `}
                            value={user.username}
                          />
                        </div>
                      </div>
                      <div className={styles.inputWithImage}>
                        <label
                          htmlFor="password"
                          className={styles.lablesInput}
                        >
                          كلمه السر
                        </label>
                        <div className={styles.inputDesgin}>
                          <div className={styles.imageContainer}>
                            <img
                              src={idSignUp}
                              alt="id input"
                              className={styles.inputImage}
                            />
                          </div>
                          <input
                            onChange={getUserData}
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="كلمه السر  "
                            className={`${styles.inputField} `}
                            value={user.password}
                          />
                          <img
                            src={showPassword ? eyeOpenImg : eyeClosedImg}
                            alt="Toggle visibility"
                            onClick={togglePasswordVisibility}
                            className={styles.eyeIcon}
                          />
                        </div>
                      </div>
                      <div className={styles.inputWithImage}>
                        <label htmlFor="phone" className={styles.lablesInput}>
                          رقم الهاتف
                        </label>
                        <div className={styles.inputDesgin}>
                          <div className={styles.imageContainer}>
                            <img
                              src={phoneSignUp}
                              alt="phone number"
                              className={styles.inputImage}
                            />
                          </div>
                          <input
                            onChange={getUserData}
                            type="number"
                            id="phone"
                            name="phone"
                            placeholder="رقم الهاتف"
                            className={`${styles.inputField} `}
                            value={user.phone}
                          />
                        </div>
                      </div>
                      <div className={styles.inputWithImage}>
                        <label
                          htmlFor="permission"
                          className={styles.lablesInput}
                        >
                          اختيار إذن
                        </label>
                        <div className={styles.inputDesgin}>
                          <div className={styles.imageContainer}>
                            <img
                              src={teacherSignUp}
                              alt="grade"
                              className={styles.inputImage}
                            />
                          </div>
                          <select
                            onChange={getUserData}
                            id="permission"
                            name="permission"
                            className={`${styles.inputField} `}
                            value={user.permission}
                          >
                            <option className={styles.option}>
                              اختيار إذن
                            </option>
                            <option className={styles.option} value="TE">
                              {" "}
                              TE
                            </option>
                            <option className={styles.option} value="SU">
                              SU{" "}
                            </option>
                          </select>
                        </div>
                      </div>
                      <button type="submit" className={styles.submitButtton}>
                        {isLoading === true ? (
                          <Spinner animation="border" />
                        ) : (
                          "إنشاء حساب "
                        )}

                        {/* {moveLogin && <Link to="/" />} */}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
