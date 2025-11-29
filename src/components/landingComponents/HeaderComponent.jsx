import React from 'react'
import {Link} from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavComponent from '../Uitily/NavComponent'
import arrowDown from '../../assets/images/arrow-down.png'
import styles from '../../assets/css/Header.module.css'
const HeaderComponent = () => {
  return (
    <header >
      <NavComponent/>
      <div className='container'>
        <Row>
          <Col className='col-md-8' >
            <h2 className={styles.title}>مرحبا بك فى Schoolify</h2>
            <div className={styles.box_pragrah}>
            <p className={styles.pragrah} >اهلا بك الى المنصة الاولى والاكثر متعة لتعلم المرحلة الابتدائية وقصص متدرجة
                بالصعوبة فيديوهات دروس كرتونية ممتعة وتمارين تفاعلية اوراق عمل
                والعاب تعليمية ممتعة.</p>
            </div>
            <div className={styles.box_button} >
            <button className={`${styles.spical_button}`}>
      <Nav.Link className={styles.buttonContent} href='#offer'>
        <img src={arrowDown} alt="" />
        <span> ابدأ التصفح</span>
      </Nav.Link>
    </button>
    <Link to="/login">
        <button className={`${styles.commincation_button} `} >
              سجل الدخول 
          </button>
          </Link>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default HeaderComponent