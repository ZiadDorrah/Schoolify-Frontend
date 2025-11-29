import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./subtitle.module.css";

const SubTitle = ({ title, btntitle, path, paragraph, icon }) => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1 className={styles.title}>{title}</h1>
          <div className="d-flex align-items-start justify-content-start">
            {icon ? (
              <img
                style={{ width: "24px", height: "24px" }}
                src={icon}
                alt=""
              />
            ) : null}
            {paragraph ? <p className={styles.paragraph}>{paragraph}</p> : null}
          </div>
        </Col>
        <Col style={{ textAlign: "center" }} md={4}>
          {btntitle ? (
            <Link to={`${path}`} style={{ textDecoration: "none" }}>
              <button className={styles.spical_button}>{btntitle}</button>
            </Link>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default SubTitle;
