import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoFile from '../../assets/images/Group2.mp4'
import styles from '../../assets/css/DetailsComponent.module.css';
const VideoDetailsComponent = ({title, paragrah}) => {
  return (
    <div className={`${styles.section} container`}>
      <Row>
        <Col md={7} className={styles.videoContainer}>
            <video  controls className={styles.box_video}>
            <source src={VideoFile} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </Col>
        <Col md={5}>
          <div className={styles.box_title2}>
            <h1 className={styles.categoty_card_title}>{title}</h1>
            <div className={styles.box_pragrah}>
              <p className={styles.categoty_card_pragrah}>{paragrah}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default VideoDetailsComponent