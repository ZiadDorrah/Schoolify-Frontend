import React from 'react';
import Card from 'react-bootstrap/Card';
import {Container,Row,Col} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/images/Rectangle 81.png'
import icon from '../../assets/images/Nahdit Misr 1.png'
import styles from '../../assets/css/slidercards.module.css'
import SubTitle from '../Uitily/SubTitle';
import ico from '../../assets/images/student-signin-c13744e2 1.png'
const data = [
    {
        name: 'المواد الدراسية',
        img: img1,
        rev: 'الصف الاول الابتدائى مادة اللغة العربية',
        icon: icon
    },
    {
        name: 'المواد الدراسية',
        img: img1,
        rev: 'الصف الاول الابتدائى مادة اللغة العربية',
        icon: icon
    },
    {
        name: 'المواد الدراسية',
        img: img1,
        rev: 'الصف الاول الابتدائى مادة اللغة العربية',
        icon: icon
    },
    {
        name: 'المواد الدراسية',
        img: img1,
        rev: 'الصف الاول الابتدائى مادة اللغة العربية',
        icon: icon
    },
    {
        name: 'المواد الدراسية',
        img: img1,
        rev: 'الصف الاول الابتدائى مادة اللغة العربية',
        icon: icon
    },
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

const SliderCardsComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '50px',
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
              },
        ],
    };

    return (
        <div id='subjects'>
        <SubTitle  icon={ico} title={'تعرف على المناهج الدراسية'} btntitle={'جميع المراحل'} paragraph={'من الصف الاول الى الصف السادس الابتدائى'} />
        <Container style={{ marginTop: '50px' ,width:'100%'}}>
            <Row>
                <Col md="12">
                    <Slider {...settings}>
                        {data.map((d, i) => (
                            <div key={i}>
                                <Card style={{ marginLeft: '20px' }} className={styles.card}>
                                    <div className={styles.imageContainer}>
                                        <Card.Img className={styles.image} src={d.img} />
                                    </div>
                                    <Card.Body>
                                        <div className={styles.box_button} >
                                            <Col className="d-flex justify-content-end">
                                            <button className={styles.slider_button}>{d.name}</button>
                                            </Col>
                                        </div>
                                        <Card.Title className={styles.title}>{d.rev}</Card.Title>
                                        <Card.Img className={styles.icon} src={d.icon} />
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default SliderCardsComponent;
