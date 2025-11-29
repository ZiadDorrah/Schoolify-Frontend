import React,{useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import leftimg from '../../assets/images/trialpattern.png'
import rightimg from '../../assets/images/trialpattern (1).png'

import styles from '../../assets/css/review.module.css'


import img1 from '../../assets/images/young women standing.png'
const data = [
    {
        img: img1,
        rev: ' حققنا الكثير من الانجازات مع الشركاء النجاح من عملائنا ونفخر دائما بكل ما نقدمةحققنا الكثير من الانجازات مع الشركاء النجاح من عملائنا ونفخر دائما بكل ما نقدمةحققنا الكثير من الانجازات مع الشركاء النجاح من عملائنا ونفخر دائما بكل ما نقدمة        ',

    },
    {
        img: img1,
        rev: ' حققنا الكثير من الانجازات مع الشركاء النجاح من عملائنا ونفخر دائما بكل ما نقدمةحققنا الكثير من الانجازات مع الشركاء النجاح من عملائنا ونفخر دائما بكل ما نقدمةحققنا الكثير من الانجازات مع الشركاء النجاح من عملائنا ونفخر دائما بكل ما نقدمة        ',

    },
    {
        img: img1,
        rev: ' حققنا الكثير من الانجازات مع الشركاء النجاح من عملائنا ونفخر دائما بكل ما نقدمةحققنا الكثير من الانجازات مع الشركاء النجاح من عملائنا ونفخر دائما بكل ما نقدمةحققنا الكثير من الانجازات مع الشركاء النجاح من عملائنا ونفخر دائما بكل ما نقدمة        ',

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
const ReviewComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className={styles.review_section} id='Student_opinions'>

    <Container fluid>
        <Row >
            <Col md="3" xs="0">
                <img className={styles.sideimage} src={leftimg} alt="" />
            </Col>
            <Col md="6">
            <div>
                <h2 className={styles.title}> اراء طلاب <span>Scolifay</span></h2>
                <Slider {...settings}>
                    {
                        data.map((d,i) => (
                            <div key={i} className='md-auto'>
                                <div >
                                    <img className={styles.image_review} src={d.img} alt="" />
                                </div>
                                <p className={styles.paragraph}>{d.rev}</p>
                            </div>
                        ))
                    }
                </Slider>
      </div>
            </Col>
            <Col md="3">
            <img className={styles.sideimage}  src={rightimg} alt="" />
        </Col>
        </Row>
    </Container>
        </div>
  )
}

export default ReviewComponent