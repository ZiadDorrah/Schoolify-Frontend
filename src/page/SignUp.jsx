import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import styles from '../assets/css/signUp.module.css';
import nameSignUp from '../assets/images/nameSignUp.png';
import idSignUp from '../assets/images/idSignUp.png';
import phoneSignUp from '../assets/images/call-calling.png';
import teacherSignUp from '../assets/images/teacherSignUp.png';
import leftImage from '../assets/images/test.png';
import { useAuth } from '../store/AuthContext';
import NavAuthenticationComponent from '../components/Uitily/NavAuthenticationComponent';
import Footer from '../components/Uitily/Footer';
import joi from 'joi';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [moveLogin, setMoveLogin] = useState(false);
  const [errorGrade, setErrorGrade] = useState([]);


  const {
    pageLoading,
    register,
    getGrades,
    setPageLoading,
  } = useAuth();

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    national_id: '',
    phone: '',
    grade_id: ''
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
      national_id: joi.string().length(14).pattern(/^[0-9]+$/).required(),
      phone: joi.string().length(11).pattern(/^[0-9]+$/).required(),
      grade_id: joi.string(),
    });
    return schema.validate(user, { abortEarly: false });
  };

  async function submitRegisterForm(e){
    e.preventDefault();
    setIsLoading(true)
    let err_list = validateRegisterForm(user)

    if(err_list.error && err_list.error.details.length){

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

    return await register(user).then(() => {
      
        Swal.fire({
          icon: 'success',
          title: "All data true, please wait for admins accept the request",
          showConfirmButton: true,
        });
        setIsLoading(false);

        // Clear Data
        setUser({first_name: '',last_name: '',national_id: '',phone: '',grade_id: ''});
        console.log(user);
      }).catch(error => {
        Swal.fire({
          icon: 'error',
          title: `${error.response.data.message}`,
          showConfirmButton: false,
          timer: 5000,
        });
        setIsLoading(false);
      }) 
      
  }

  const pbGrades = async () => {
    setPageLoading(true);
    
    await getGrades().then(response => {
      
      setGrades(response.data.message)
    
    }).catch(err =>{
      Swal.fire({
        icon: 'error',
        title: `${err.response && err.response.data.message ? err.response.data.message : 'Unknow error found'}`,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
    })
    setPageLoading(false)
  }

  

  useEffect(() => {
    pbGrades();
  }, []);
  
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
                <h2>اهلا بعودتك!</h2>
                <p>انشاء حساب جديد واستمتع بطرق تعلم ممتعة وشيقة</p>
                <form onSubmit={submitRegisterForm}>
                  <div className={styles.inputWithImage}>
                    <label htmlFor="first_name" className={styles.lablesInput}>
                      الاسم الاول{" "}
                    </label>
                    <div className={styles.inputDesgin}>
                      <div className={styles.imageContainer}>
                        <img src={nameSignUp} alt="first name" className={styles.inputImage} />
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
                    <label htmlFor="last_name" className={styles.lablesInput}>
                      الاسم الثانى
                    </label>
                    <div className={styles.inputDesgin}>
                      <div className={styles.imageContainer}>
                        <img src={nameSignUp} alt="last name" className={styles.inputImage} />
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
                    <label htmlFor="national_id" className={styles.lablesInput}>
                      الرقم القومى
                    </label>
                    <div className={styles.inputDesgin}>
                      <div className={styles.imageContainer}>
                        <img src={idSignUp} alt="id input" className={styles.inputImage} />
                      </div>
                      <input
                        onChange={getUserData}
                        type="number"
                        id="national_id"
                        name="national_id"
                        placeholder="الرقم القومى"
                        className={`${styles.inputField} `}
                        value={user.national_id}
                      />
                    </div>
                  </div>
                  <div className={styles.inputWithImage}>
                    <label htmlFor="phone" className={styles.lablesInput}>
                      رقم الهاتف
                    </label>
                    <div className={styles.inputDesgin}>
                      <div className={styles.imageContainer}>
                        <img src={phoneSignUp} alt="phone number" className={styles.inputImage} />
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
                    <label htmlFor="grade_id" className={styles.lablesInput}>
                      اختيار الصف
                    </label>
                    <div className={styles.inputDesgin}>
                      <div className={styles.imageContainer}>
                        <img src={teacherSignUp} alt="grade" className={styles.inputImage} />
                      </div>
                      <select
                        onChange={getUserData}
                        id="grade_id"
                        name="grade_id"
                        className={`${styles.inputField} `}
                        value={user.grade_id}
                      >
                        <option className={styles.option}>اختيار الصف</option>
                        {grades && grades.length > 0 &&
                          grades.map((grade) => (
                            <option key={grade.id} className={styles.option} value={grade.id}>
                              {grade.grade_name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <button type="submit" className={styles.submitButtton} >
                    {isLoading === true ? (
                      <Spinner animation="border" />
                    ) : (
                      " إنشاء حساب"
                    )}

                    {moveLogin && <Link to="/" />}
                  </button>
                  <p className={styles.toLogin}>
                    لديك حساب ؟ <Link to="/login">تسجيل الدخول</Link>
                  </p>
                </form>
              </div>
              <div className={styles.left_side}>
                <img src={leftImage} className={styles.image} alt="" />
              </div>
            </div>
            <Footer />
          </div>
        )
      }
    </>
  );
};

export default SignUp;
