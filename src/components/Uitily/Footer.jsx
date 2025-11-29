import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import insta from '../../assets/images/Group.png'
import face from '../../assets/images/104458_facebook_social media_fb_social_icon.png'
import styles from '../../assets/css/footer.module.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
      <footer id='footer' className="text-center text-lg-start ">
        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          
        </section> */}
  
        <section >
          <Container fluid className="text-center text-md-start mt-5">
            <Row className="mt-3 d-flex justify-content-between">
              <Col md="3" lg="4" xl="3" className={`mx-auto mb-4 ${styles.fotter_logo}`}>
                {/* ... (Company info) */}
                <h1>Scolifay</h1>
              </Col>
  
              <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
                {/* ... (Products) */}
                <Link style={{textDecoration:'none'}} ><p className={styles.text}>سياسة الخصوصية</p></Link>
                <Link style={{textDecoration:'none'}}><p className={styles.text}>الشروط والاحكام</p></Link>
              </Col>
  
              <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
                {/* ... (Useful links) */}
                <Link style={{textDecoration:'none'}}><p className={styles.text}>تواصل معنا</p></Link>
              </Col>
              <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
                {/* ... (Useful links) */}
                <Link style={{textDecoration:'none'}}><img className={styles.icons} src={insta} alt="" /></Link>
                <Link style={{textDecoration:'none'}}><img className={styles.icons} src={face} alt="" /></Link>
              </Col>
  
              {/* ... (Contact info) */}
            </Row>
          </Container>
        </section>
  
        <div   >
            <p className={styles.footer_words}>
            جميع الحقوق محفوظة لدى المنصة Schoolify التعليمية 2024
            </p>
        </div>
      </footer>
    );
  };
export default Footer;
