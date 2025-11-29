import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import frame1 from '../../assets/images/Frame 21.png';
import frame2 from '../../assets/images/Frame 22.png';
import frame3 from '../../assets/images/Frame 23.png';
import styles from '../../assets/css/informationcontainer.module.css'
const InformationContainerComponent = () => {
  return (
    <div className={styles.section} >
        <div className='container'>
                <h2 className={styles.title}>ما يميز التعلم على  <span>Schoolify</span></h2>
            <Row style={{paddingBottom:'100px'}}>
                <Col style={{textAlign:'center'}}>
                    <img className={styles.controll_img} src={frame1} alt="" />
                </Col>
                <Col style={{textAlign:'center'}}>
                    <img className={styles.controll_img} src={frame2} alt="" />
                </Col>
                <Col style={{textAlign:'center'}}>
                    <img className={styles.controll_img} src={frame3} alt="" />
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default InformationContainerComponent