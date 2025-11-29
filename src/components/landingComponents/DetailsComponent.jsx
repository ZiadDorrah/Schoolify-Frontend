import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../assets/css/DetailsComponent.module.css';

const DetailsComponent = ({ image, image2, title, paragrah }) => {
  return (
    <div id='offer' className={`${styles.section} container`}>
      <Row>
        <Col md={7}>
          <div className={styles.box_title}>
            <h1 className={styles.categoty_card_title}>{title}</h1>
            <div className={styles.box_pragrah}>
              {paragrah ? <p className={styles.categoty_card_pragrah}>{paragrah}</p> :<p className={styles.categoty_card_pragrah}>منصة طلاب سكوليفاي هي منصة تعليمية تقدم خدمة الربط بين الطالب والمعلم والاستفادة من الدروس الخصوصية في جميع المناهج الابتدائية  <br />
                        واختبارات مركز قياس.هدفنا تعزيز الثقة في التعليم عن بعد وطرح أساليب جديدة في تقوية الحصيلة العلمية للطلاب والطالبات، وذلك بطريقة ميسرة ومرنة ومفيدة .<br />
                        كل هذا من أجل تقوية حصيلة الطلاب/الطالبات في مواد دراسية مختارة وبطريقة مريحة وسهلة الوصول  .</p> }
            
              
</div>
          </div>
        </Col>
        {image?.length > 1 && (
          <Col md={5}sm="0"  >
            <img src={image} alt="" className={styles.categoty_card_img} />
          </Col>
        )}
        {image2?.length > 1 && (
            <Col md={5} sm="0" >
                <img src={image2} alt="" className={styles.categoty_card_img2} />
            </Col>
        )}
      </Row>
    </div>
  );
};

export default DetailsComponent;
