import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import egyptFlag from '../../assets/images/32209_egypt_flag_icon.png';
import styles from '../../assets/css/NavAuthentication.module.css';
import {NavLink} from 'react-router-dom'
const NavAuthenticationComponent = () => {
  return (
    <Navbar className={styles.navbar}  expand="lg">
      <div  className={`container ${styles.navbar} `}>
        <Navbar.Brand className={styles.brand} href="/">
          Schoolify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={`ms-auto `}>
            <NavLink
              style={{ marginRight: '12px' }}
              className={styles.nav_link}
              to="/"
            >
              ماذا نقدم ؟
            </NavLink>
            <NavLink
              style={{ marginRight: '12px' }}
              className={styles.nav_link}
              to="/"
            >
              المناهج الدراسية
            </NavLink>
            {/* <NavDropdown
              className={`${styles.nav_link} ${styles.dropdown}`}
              title=" المناهج الدراسية"
            >
              <NavDropdown.Item href="" >الصف الدراسى الاول</NavDropdown.Item>
              <NavDropdown.Item href="" >الصف الدراسى الاول</NavDropdown.Item>
              <NavDropdown.Item href="" >الصف الدراسى الاول</NavDropdown.Item>
            </NavDropdown> */}
            <NavLink className={styles.nav_link} style={{ marginRight: '12px' }} to="/">
              اراء الطلاب
            </NavLink>
            <NavLink className={styles.nav_link } style={{ marginRight: '12px' }} to="/">
              ارقامنا
            </NavLink>
          </Nav>

          <Nav  className={` `}>
            <NavDropdown
              className={`${styles.dropdown}  `}
              title={
                <div>
                  <img
                    src={egyptFlag}
                    alt="Arabic Flag"
                    style={{
                      width: '24px',
                      height: '24px',
                      marginLeft: '5px',
                      
                    }}
                  />
                  العربية
                </div>
              }
            >
            </NavDropdown>
              <button  className={`${styles.commincation_button} `} >تواصل معنا</button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavAuthenticationComponent